import { NextResponse } from 'next/server';
import connectToMongo from "../../../midelware/DB"
import Data from '@/Models/Data';
import Admin from '@/Models/Admin';
import jwt from 'jsonwebtoken'

const JWT_KEY = 'mybenefitsguardianQuizapp'

export async function POST(request) {
    try {
        await connectToMongo()
        const payload = await request.json();
        const data = new Data(payload);
        console.log(payload);
        const savedNote = await data.save()
        return NextResponse.json({ message: 'Email Saved', success:true,savedNote })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Error Occured", success: false }, { status: 500 });
    }
};

export async function GET(request) {
    try {
        await connectToMongo()
        const Token = request.headers.get('mbg_admintoken');
        const data = jwt.verify(Token, JWT_KEY)
        const admin = await Admin.findOne({ _id: data.user.id })
        if (!admin) {
            return NextResponse.json({Message:"Your are not allowed to see this data",success:false})
        }

        const Emails = await Data.find()
        if (!Emails) {
            return NextResponse.json({Message:"No Data To See",success:false})
        }

        return NextResponse.json({ success:true, Emails })

    } catch (error) {
        console.error(error)
        return NextResponse.json({message:'network error occured',success:false},{status:404})
    }
};
