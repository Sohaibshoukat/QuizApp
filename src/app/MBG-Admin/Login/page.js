"use client"
import React, { useState } from 'react'
import "./login.css"
import { MdErrorOutline } from 'react-icons/md'
import { useRouter } from 'next/navigation'

const page = () => {

  const router = useRouter()

  const [UserName, setUserName] = useState('')
  const [Password, setPassword] = useState('')
  const [Error, setError] = useState(false);
  const [ErrorUserName, setErrorUserName] = useState(false);
  const [ErrorPassword, setErrorPassword] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('');
  const [Login, setLogin] = useState(false)

  const submitForm = async () => {
    setLogin(true);
    setError(false);
    setErrorUserName(false)
    setErrorPassword(false)
    if (UserName == null || UserName == "") {
      setLogin(false);
      setErrorUserName(true);
      setErrorMessage("Enter UserName");
      return;
    }
    if (Password == null || Password == "") {
      setErrorPassword(true);
      setLogin(false);
      setErrorMessage("Enter Password");
      return;
    }
    try {
      const response = await fetch('/api/Admin', {
        method: "POST",
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(
          { UserName, Password }
        )
      })
      const data = await response.json();
      if(data.success){
        setPassword('');
        setUserName('');
        localStorage.setItem("MBG_ADMINTOKEN",data.AuthToken)
        router.push("./")
      }else{
        setLogin(false);
        setError(true);
        setErrorMessage("UserName Or Password is InCorrect")
      }
    } catch (error) {
      setError(true);
      setLogin(false);
      setErrorMessage("Error Occured")
    }
  }
  return (
    <div className="LoginBody">
      <div className="LoginForm">
        <h3>Admin Login</h3>

        {Error && <h4><MdErrorOutline /> {ErrorMessage}</h4>}

        <div className='Input'>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="UserName" id="UserName" value={UserName} onChange={(e) => { setUserName(e.target.value) }} />
          {ErrorUserName && <h4><MdErrorOutline /> {ErrorMessage}</h4>}
        </div>

        <div className='Input'>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" value={Password} onChange={(e) => { setPassword(e.target.value) }} />
          {ErrorPassword && <h4><MdErrorOutline /> {ErrorMessage}</h4>}
        </div>
        <button className='BtnLog' onClick={submitForm} disabled={Login}>
          {!Login ? 'Log In' : "Checking"}</button>
      </div>

    </div>
  )
}

export default page