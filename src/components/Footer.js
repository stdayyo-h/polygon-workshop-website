import React from 'react'
import ilogo from '../assets/images/ilogo.png'
// import ilogo from '../assets/images/istelogo.png'
import clogo from '../assets/images/codinclublogo.png'

const Footer = () => {
    return (
        <div className=" text-white w-full h-44 
      bg-gradient-to-b from-middle to-bottom
         flex flex-row items-end ">

            <div className=' h-20 mb-8 px-5  flex flex-row justify-between md:justify-start'>
                <img src={ilogo} alt="" className='w-24 h-10 md:h-10 md:w-32   overflow-x-hidden  mt-12  ' />
                <img src={clogo} alt="" className='w-24 h-10 md:h-10 md:w-32   overflow-x-hidden mt-12  ' />
            </div>



        </div>

    )
}

export default Footer