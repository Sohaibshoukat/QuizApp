"use client"
import React from 'react'
import "./navbar.css"
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const Navbar = ({item}) => {
    const router = useRouter();
    return (
        <div className="header">
            <div className="innerbody">
                <div className="Logo">
                    <Link href={item}>
                        <img src="https://www.mybenefitsguardian.com/lib_xxgOhURDPpOpyvNu/qcgbv5zf7yhjm0oe.png?w=280" alt="" />
                    </Link>
                </div>
                <div className="List">
                    <ul>
                        <Link href={item}>
                            <li>Home</li>
                        </Link>
                        <Link href={'./MBG-Admin/UpdatePassword'}>
                            <li>Passsword</li>
                        </Link>
                        <li onClick={() => {
                            localStorage.removeItem('MBG_ADMINTOKEN');
                            router.push("./MBG-Admin/Login")
                        }}>LogOut</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar