'use client'
import React, { useEffect, useState } from 'react'
import useResult from '@/Context/ResultContext';
import { CiFaceFrown, CiFaceMeh, CiFaceSmile } from "react-icons/ci";
import "./result.css"
import Link from 'next/link';
import ReactConfetti from 'react-confetti';

const Result = () => {
  const { correctPercentage } = useResult();

  const [windowDimension, setWindowDimension] = useState(null);
  const [Start, setStart] = useState(false)

  const detectSize = () => {
      setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
  }, [])
  

  useEffect(() => {
      window.addEventListener('resize', detectSize);

      return () => {
        window.removeEventListener('resize', detectSize);
      }
  }, [windowDimension])

  useEffect(() => {
    setStart(true);
    // setTimeout(() => {
    //   setStart(false)
    // }, 7000);
  }, [])

  return (
    <>
      <div className="MainSection">
        <div className="InnerBody">
          <div className="ScoreBoard">
            {correctPercentage >= 60 ?
              <CiFaceSmile className='Icon' /> :
              correctPercentage === 50 ?
                <CiFaceMeh className='Icon' /> :
                <CiFaceFrown className='Icon' />}
            <h1>{correctPercentage}%</h1>
          </div>
          <div className="LowerSec">
            <h2>Congratulations and Thank You for Taking the Super Agent Quiz!</h2>
            <p>We understand that success is the cornerstone of our industry and we're here to support you every step by the way</p>
            <p>If you have any question, need further assitence, or simply want to connect with our community of like-minded professionals, don't hesitate to reach out</p>
            <p style={{marginTop:"20px"}}>Than you for being of our caring omunity</p>
            {/* <div className="btnGroup">
              <a href="https://www.mybenefitsguardian.com/" target='_blank'>
                <button className='BtnLearnMore'>Learn More</button>
              </a>
              <Link href={'/quiz'}>
                <button className='BtnReatake'>Retake Quiz</button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      {correctPercentage >= 50 && Start && windowDimension!==null && (
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
          tweenDuration={2000}
        />
      )}
    </>
  )
}

export default Result;
