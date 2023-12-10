'use client'
import React, { useEffect, useState } from 'react'
import "./style.css"
import Link from 'next/link';
import Email from '../Email/email';


const Banner = () => {
  const [screenWidth, setScreenWidth] = useState(null);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.outerWidth);
      const handleResize = () => {
        setScreenWidth(window.outerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="Head">
      <div className="HeadText">
        <div className='InnerText'>
          <h1>Hey there, Agents! </h1>
          <h2>Think You're the Crème de la Crème?</h2>
          <p>Take the Quiz to See if You’re The Super Agent Your Clients Need!</p>
          <Email />
        </div>
      </div>
    </div>
  )
}

export default Banner