import { NextResponse } from 'next/server';
import connectToMongo from "../../../midelware/DB";
import Admin from '@/Models/Admin';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
// import { headers } from 'next/headers'
// const headerToken = headers()


const JWT_KEY = 'mybenefitsguardianQuizapp'


// export async function POST(request) {

//     try {
//         await connectToMongo()
//         const {UserName,Password} = await request.json();
//         const Salt = await bcrypt.genSalt(10);
//         const SecPassword= await bcrypt.hash( Password, Salt)
//         const data = new Admin({
//             UserName,
//             Password:SecPassword
//         });
//         // console.log(payload);
//         const savedNote = await data.save()
//         const data2 ={
//             savedNote:{
//                 id:savedNote.id,
//             }
//         }
//         const AuthToken =  jwt.sign(data2,JWT_KEY);
//         return NextResponse.json({ message: 'Admin Created Saved', AuthToken,success:true,savedNote })
//     } catch (error) {
//         console.error(error)
//         return NextResponse.json({ message: "Error Occured", success: false }, { status: 500 });
//     }
// };

export async function POST(request) {

    let success = false;
    const { UserName, Password } = await request.json();

    try {
        await connectToMongo()
        let user = await Admin.findOne({ UserName: UserName })
        if (!user) {
            return NextResponse.json({ Message: "Account doesnt Fined", success: false }, { status: 404 })
        }

        const passwordCompare = await bcrypt.compare(Password, user.Password)

        if (!passwordCompare) {
            return NextResponse.json({ Message: "Incorrect Password", success: false }, { status: 404 })
        }

        const Payload = {
            user: {
                id: user.id,
            }
        }
        const AuthToken = jwt.sign(Payload, JWT_KEY);
        success = true;
        return NextResponse.json({ success, AuthToken })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ success, Error: 'error occured' }, { status: 505 })
    }
};

export async function PUT(request) {
    const { oldpassword, newpassword } = await request.json();

    try {
        await connectToMongo()
        const Token = request.headers.get('mbg_admintoken');
        const data = jwt.verify(Token, JWT_KEY)
        const admin = await Admin.findOne({ _id: data.user.id })
        if (!admin) {
            return NextResponse.json({ Message: "Account doesnt Fined", success: false }, { status: 404 })
        }

        const passwordCompare = await bcrypt.compare(oldpassword, admin.Password)

        if (!passwordCompare) {
            return NextResponse.json({ Message: "Password You enter is InCorrect", success: false }, { status: 400 })
        }

        const Salt = await bcrypt.genSalt(10);
        const SecPassword = await bcrypt.hash(newpassword, Salt)
        const user = await Admin.findByIdAndUpdate(admin._id, { Password: SecPassword })

        const Payload = {
            user: {
                id: user.id,
            }
        }
        const AuthToken = jwt.sign(Payload, JWT_KEY);
        
        return NextResponse.json({ success:true, AuthToken })

    } catch (error) {
        console.error(error)
        return NextResponse.json({ success: false, Error: 'Error Occured' }, { status: 500 });
    }
};
