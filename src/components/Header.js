import React from 'react'
import poly from '../assets/images/poly.png'
import ilogo from '../assets/images/ilogo.png'
import clogo from '../assets/images/cclogo.png'
import plogo from '../assets/images/logo.png'
import globe from '../assets/images/globe.png'

import Lottie from "react-lottie";
import * as animationData from "../assets/lotties/scroll.json";


const Header = ({ id1, id2 }) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className='overflow-hidden w-full h-screen  flex flex-col md:flex-row bg-gradient-to-b from-topmost to-top'>
            <div className='w-full md:w-1/2 h-full flex flex-col '>

                <div className=' h-20 px-6 space-x-12  flex flex-row justify-between md:justify-start'>
                    
                    <img src={clogo} alt="" className='w-32 h-10 md:h-10 md:w-32   overflow-x-hidden mt-12  ' />
                </div>
                <div className='h-fit w-fit p-14 mt-10 overflow-hidden absolute top-14 right-2'>
                    <img src={poly} alt="" className='opacity-100 mt-3 md:opacity-0  ml-48 w-auto h-auto    overflow-hidden animate-spin-slows  ' />
                </div>

                <div className='h-4/6  mt-64 ml-10 md:ml-20 md:mt-10 flex flex-col justify-center'>
                    <div className='mt-10 flex flex-row items-center '>
                        <img src={plogo} alt="" className='w-8 h-8 md:w-12 md:h-12   overflow-x-hidden  ' />
                        <h1 className='ml-3 mb-1 text-yellow-200 font-medium text-xl'>
                            polygon / guild
                        </h1>
                    </div>
                    <div data-aos-duration="200" data-aos="fade-up"
                        className='mt-4 text- md:mt-10 flex flex-col items-start text-white'>
                        <h1 className='text-4xl md:text-8xl font-black font-font1'><span className='text-yellow-200'>0</span>XCITE</h1>
                        <h1 className='text-4xl md:text-4xl font-semibold pt-2 '> The future is here.</h1>
                        <h2 className='text-4xl md:text-2xl font-semibold pt-6 '>Mark your calenders <span className='text-yellow-200 text-4xl'>Nov 19</span></h2>
                        {/* <h1 className='text-4xl md:text-5xl font-black'>WEB 3.0 </h1>
                        <h1 className='text-4xl md:text-5xl font-black'>WORKSHOP </h1> */}
                        <button className='bg-violet-800 rounded-md mt-10  px-2 py-1'
                            onClick={() => { if (id2 !== null) document.getElementById(id2).scrollIntoView({ behavior: "smooth" }) }}
                        >

                            Register Now
                        </button>
                    </div>

                </div>
            </div>
            <div className='scale-125  md:visible'>
                <img src={globe} alt="" className=' opacity-0 md:opacity-100 md:visible mt-40 ml-48 w-auto h-auto    overflow-hidden animate-spin-slow  ' />


            </div>


            <div className="flex hidden md:block absolute items-bottom justify-center w-full bottom-20 md:bottom-10">
                <div
                    onClick={() => { if (id1) document.getElementById(id1).scrollIntoView({ behavior: "smooth" }) }}
                >

                    <Lottie
                        isClickToPauseDisabled={true}
                        options={defaultOptions}
                        height={50}
                        width={50}
                        isStopped={false}
                        isPaused={false}
                    />
                </div>
            </div>
        </div>

    )
}

export default Header