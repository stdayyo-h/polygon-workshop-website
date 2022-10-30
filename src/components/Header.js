import React from 'react'
import poly from '../assets/images/poly.png'
import ilogo from '../assets/images/istelogo.png'
import clogo from '../assets/images/codinclublogo.png'
import plogo from '../assets/images/logo.png'
import globe from '../assets/images/globe.png'

import Lottie from "react-lottie";
import * as animationData from "../assets/lotties/scroll.json";


const Header = ({ id }) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className='overflow-hidden w-full bg-black h-screen  flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 h-full flex flex-col '>
                <div className='ml-6 h-20  flex flex-row justify-between md:justify-start'>
                    <img src={ilogo} alt="" className='w-10 h-10 md:w-14 md:h-14   overflow-x-hidden  mt-5 ' />
                    <img src={clogo} alt="" className='w-20 md:24 md:h-16 h-12   overflow-x-hidden md:ml-5 mt-5 mr-6' />
                </div>
                <div className='h-fit w-fit p-10 overflow-hidden absolute top-10 right-2'>
                    <img src={poly} alt="" className='opacity-100 mt-3 md:opacity-0  ml-48 w-auto h-auto    overflow-hidden animate-spin-slows  ' />
                </div>

                <div className='h-4/6 ml-8 mt-40 md:ml-20 md:mt-10 flex flex-col justify-center'>
                    <div className='mt-10 flex flex-row items-center '>
                        <img src={plogo} alt="" className='w-8 h-8 md:w-12 md:h-12   overflow-x-hidden  ' />
                        <h1 className='ml-3 mb-1 text-white font-medium text-xl'>
                            polygon / guild
                        </h1>
                    </div>
                    <div data-aos-duration="200" data-aos="fade-up"
                        className='mt-4 text- md:mt-10 flex flex-col items-start text-white'>
                        <h1 className='text-4xl md:text-8xl font-black'>WEB 3.0</h1>
                        <h1 className='text-4xl md:text-8xl font-black'>WORKSHOP</h1>
                    </div>

                </div>
            </div>
            <div className='scale-150  md:visible'>
                <img src={globe} alt="" className=' opacity-0 md:opacity-100 md:visible mt-40 ml-48 w-auto h-auto    overflow-hidden animate-spin-slow  ' />


            </div>


            <div className="flex   absolute items-bottom justify-center w-full bottom-20 md:bottom-10">
                <div
                    onClick={() => { if (id) document.getElementById(id).scrollIntoView({ behavior: "smooth" }) }}
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