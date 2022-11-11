import React from 'react'
import ilogo from '../assets/images/ilogo.png'
// import ilogo from '../assets/images/istelogo.png'
import clogo from '../assets/images/codinclublogo.png'

const Footer = () => {
    return (
        <div className=" text-white w-full h-44 
      bg-gradient-to-b from-middle to-bottom
         flex flex-row items-end ">

            {/* <div className=' h-20 mb-8 px-5  flex flex-row justify-between md:justify-start'>
                <img src={ilogo} alt="" className='w-20 h-10 md:h-10 md:w-32   overflow-x-hidden  mt-12  ' />
                <img src={clogo} alt="" className='w-24 h-10 md:h-10 md:w-32   overflow-x-hidden mt-12  ' />
            </div> */}
            <div className='text-left ml-2 mb-5 divide-y'>
                <p className=''>Contact Us</p>
                <div className='flex flex-col'>

                    <a href='http://wa.me/918590110324' target="_blank">Muhammed: +91 85901 10324</a>
                    <a href='http://wa.me/919048426677' target="_blank">Angath: +91 9048426677</a>

                </div>

            </div>


        </div>

    )
}

export default Footer