"use client"
import Navbar from '@/Component/Navbar/Navbar'
import React, { useEffect, useState } from 'react'
import "./password.css"
import { MdErrorOutline } from 'react-icons/md'

const page = () => {

    const [oldpassword, setoldpassword] = useState('')
    const [newpassword, setnewpassword] = useState('')
    const [Error, setError] = useState(false);
    const [ErrorOldPassword, setErrorOldPassword] = useState(false);
    const [ErrorNewPassword, setErrorNewPassword] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState('');
    const [Login, setLogin] = useState(false)
    

    useEffect(() => {
        if (!localStorage.getItem("MBG_ADMINTOKEN")) {
            router.push("./MBG-Admin/Login")
        }
    }, [])

    const submitForm = async () => {
        setLogin(true);
        setError(false);
        setErrorOldPassword(false)
        setErrorNewPassword(false)
        if (oldpassword == null || oldpassword == "") {
            setLogin(false);
            setErrorOldPassword(true);
            setErrorMessage("Enter Old Password");
            return;
        }
        if (newpassword == null || newpassword == "") {
            setErrorNewPassword(true);
            setLogin(false);
            setErrorMessage("Enter New Password");
            return;
        }
        try {
            const response = await fetch('/api/Admin', {
                method: "PUT",
                headers: {
                    'content-type': 'application/json',
                    'MBG_ADMINTOKEN': localStorage.getItem('MBG_ADMINTOKEN')
                },
                body: JSON.stringify(
                    { oldpassword, newpassword }
                )
            })
            const data = await response.json();
            if (data.success) {
                setLogin(false);
                setoldpassword('');
                setnewpassword('');
                localStorage.setItem("MBG_ADMINTOKEN", data.AuthToken)
            } else {
                setLogin(false);
                setError(true);
                setErrorMessage("Password You enter is Inccorrect")
            }
        } catch (error) {
            setError(true);
            setLogin(false);
            setErrorMessage("Error Occured")
        }
    }

    return (
        <div className='PasswordBody'>
            <Navbar item={"./"}/>
            <div className="UpdatePassword">
                {Error && <h4><MdErrorOutline /> {ErrorMessage}</h4>}

                <div className='Input'>
                    <label htmlFor="oldpassword">Old Password</label>
                    <input
                        type="text"
                        placeholder="oldpassword"
                        id="oldpassword"
                        value={oldpassword}
                        onChange={(e) => { setoldpassword(e.target.value) }}
                    />
                    {ErrorOldPassword && <h4><MdErrorOutline /> {ErrorMessage}</h4>}
                </div>

                <div className='Input'>
                    <label htmlFor="newpassword">New Password</label>
                    <input
                        type="text"
                        placeholder="newpassword"
                        id="newpassword"
                        value={newpassword}
                        onChange={(e) => { setnewpassword(e.target.value) }}
                    />
                    {ErrorNewPassword && <h4><MdErrorOutline /> {ErrorMessage}</h4>}
                </div>

                <button className='BtnLog' onClick={submitForm} disabled={Login}>{!Login ? 'Change Password' : 'Changing'}</button>
            </div>
        </div>
    )
}

export default page