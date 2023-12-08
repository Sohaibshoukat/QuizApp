"use client"
import React, { useState } from 'react'
import "./email.css"
import Link from 'next/link'
import { MdErrorOutline } from "react-icons/md"
import { useRouter } from 'next/navigation';
import { TextField } from '@mui/material'


const Email = () => {

    const router = useRouter()

    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Error, setError] = useState(false)
    const [ErrorName, setErrorName] = useState(false)
    const [ErrorMessage, setErrorMessage] = useState('')
    const [Submitting, setSubmitting] = useState(false)


    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    const SubmitEmail = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(false);
        setErrorName(false);

        if (Email == "" || Email == null) {
            setSubmitting(false);
            setError(true);
            setErrorMessage("Enter Your Email");
            return;
        }

        if (Name == "" || Name == null) {
            setSubmitting(false);
            setErrorName(true);
            setErrorMessage("Enter Your Name");
            return;
        }

        if (!isValidEmail(Email)) {
            setSubmitting(false);
            setError(true);
            setErrorMessage("InCorrect Email");
            return;
        }

        try {
            // Replace this URL with your server endpoint for sending emails
            // const response = await fetch('/api/Email', {
            //     method: "POST",
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify({ Email })
            // })
            // // Handle the response as needed (e.g., show a success message)
            // const data = await response.json();
            // if (data.success) {
            router.push('/quiz');
            // }

        } catch (error) {
            setSubmitting(false);
            setError(true);
            setErrorMessage("Error Occured Try Again Later")
        }
    }

    return (
        <>

            <div className="Data">
                <TextField id="outlined-basic" 
                    className='input' 
                    style={{color:"white"}}
                    label="Enter Your Name" 
                    variant="outlined"
                    value={Name}
                    onChange={(e) => { setName(e.target.value) }} />
                {/* <input
                    type="text"
                    id='Name'
                    placeholder='Enter Your Name'
                    value={Name}
                    onChange={(e) => { setName(e.target.value) }}
                /> */}
                {ErrorName && <h4><MdErrorOutline /> {ErrorMessage}</h4>}
                <TextField id="outlined-basic" className='input' label="Enter Your Email" variant="outlined"
                    value={Email}
                    onChange={(e) => { setEmail(e.target.value) }} />
                {/* <input
                    type="email"
                    id='email'
                    placeholder='l'
                    value={Email}
                    onChange={(e) => { setEmail(e.target.value) }}
                /> */}
                {Error && <h4><MdErrorOutline /> {ErrorMessage}</h4>}
            </div>
            <div className='Link'>
                <button className="NextButton" onClick={SubmitEmail} disable={Submitting} style={{ opacity: Submitting && 0.5 }}>
                    Lets Begin
                </button>
            </div>
        </>
    )
}

export default Email