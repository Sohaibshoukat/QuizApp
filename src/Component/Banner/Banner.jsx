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
                <h1>Hey there, Agents! Think You're the Crème de la Crème? Take the 
Quiz to See if You’reThe Super Agent Your Clients Need!</h1>
                <p>Enter your email to start the quiz and see how you stack up 
against other agents!</p>
                {/* <Link href={'./data'}>
                <button className="startbtn">Get Started</button>
                </Link> */}
                <Email/>
                </div>
            </div>
        </div>
    )
}

export default Banner