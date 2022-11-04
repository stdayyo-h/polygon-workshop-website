import React from 'react'
import ilogo from '../assets/images/istelogo.png'
import clogo from '../assets/images/codinclublogo.png'

const Footer = () => {
    return (
        <div className="mt-14  text-white w-full md:h-28 bg-black flex flex-row justify-between px-10">
            <div>
                <div className='ml-6 h-20  flex flex-row justify-between '>
                    <img src={ilogo} alt="" className='w-10 h-10 md:w-14 md:h-14   overflow-x-hidden  mt-5 ' />
                    <img src={clogo} alt="" className='w-20 md:24 md:h-16 h-12   overflow-x-hidden md:ml-5 mt-5 mr-6' />
                </div>
            </div>
            <div className='  flex flex-col  '>
                <h1 >
                    Get in Touch
                </h1>
                <a href=''>+91 12345</a>
                <a href=''>+91 12345</a>
                <a href=''>+91 12345</a>
            </div>

        </div>
    )
}

export default Footer