"use client"

import Navbar from '@/Component/Navbar/Navbar'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [Emails, setEmails] = useState([])
    const [NoData, setNoData] = useState(false)
    const [Error, setError] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState('');

    const router = useRouter();



    useEffect(() => {
        if (!localStorage.getItem("MBG_ADMINTOKEN")) {
            router.push("./MBG-Admin/Login")
        }
    }, [])

    const GetEmail = async () => {
        try {
            const response = await fetch('/api/Email', {
                method: "GET",
                headers: {
                    'content-type': 'application/json',
                    'MBG_ADMINTOKEN': localStorage.getItem('MBG_ADMINTOKEN')
                },
            })
            const data = await response.json();
            if (data.success) {
                if (data.Emails.length == 0) {
                    setNoData(true)
                } else {
                    setEmails(data.Emails);
                }
            } else {
                setError(true);
                setErrorMessage(data.Message)
            }

        } catch (error) {
            setError(true);
            setErrorMessage("UnKnown Error Occured")
        }
    }
    useEffect(() => {
        GetEmail()
    }, [])


    return (
        <div className='MainSectionAdmin'>
            <Navbar item={"./MBG-Admin"}/>
            <div className="EmailBody">
                {NoData
                    ? <h1>No Emails Collected Till Know</h1>
                    : <table>
                        <thead>
                            <tr>
                                <th>Sr.</th>
                                <th>Emails</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Emails.map((item, index) => {
                                return (
                                    <tr>
                                        <td style={{textAlign:"center"}}>{index + 1}</td>
                                        <td>{item.Email}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>}
            </div>
        </div>
    )
}

export default page