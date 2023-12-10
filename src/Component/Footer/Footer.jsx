import React from 'react'
import "./Footer.css"
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='FooterBody'>
            <div className="FlexBody">
                <Link href={"/Terms-of-service"} className='Link'>
                    <h3>Terms of Service</h3>
                </Link>
                <Link href={"/Privacy-policy"} className='Link'>
                    <h3>Privacy Policy</h3>
                </Link>
            </div>
        </div>
    )
}

export default Footer