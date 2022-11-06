import React from 'react'
import Lottie from "react-lottie";
import * as animationData from "../assets/lotties/gift.json";

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
            <div className='w-1/2 pt-20 h-full text-4xl font-bold text-white'>
                Amazing Goodies Awaiting You !!!
            </div>
            <div className="flex   absolute bottom-20 justify-end w-full ">
                <div className='md:mr-40  -mr-32  '
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
                </div>
            </div>
        </div>
    )
}

export default Features