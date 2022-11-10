import React from 'react'
import Lottie from "react-lottie";
import * as animationData from "../assets/lotties/gift.json";
import goodies from '../assets/images/goodies.png'
import poster from '../assets/images/poster.jpeg'



const Features = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    
    return (
        <div className='w-screen h-96  flex flex-row justify-between items-start relative bg-gradient-to-b from-top to-middle'>
            <div className='divide-y divide-gray-600  '>
                <div data-aos="fade-in" className='pr-10 pt-[100px] h-full text-4xl font-bold text-white font-font1 pb-5 text-right'>
                    Win exciting goodies!

                </div>
                 <div>
                    <img data-aos="fade-in" src={goodies} className='h-64 w-64 mt-4 animate-wiggle'></img> 
                    {/* <div className='md:mr-40  -mr-32  '
                // onClick={() => { if (id) document.getElementById(id).scrollIntoView({ behavior: "smooth" }) }}
                >

                    <Lottie
                        isClickToPauseDisabled={true}
                        options={defaultOptions}
                        height={450}
                        width={450}
                        isStopped={false}
                        isPaused={false}

                    />
                </div>  */}
                </div> 
            </div>
            
            <div className="flex  absolute bottom-20 justify-end w-full ">
                 
                {/* <img src='./assets/images/goodies.png'></img> */}
            </div>
        </div>
    )
}

export default Features