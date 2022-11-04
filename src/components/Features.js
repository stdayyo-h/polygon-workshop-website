import React from 'react'
import Lottie from "react-lottie";
import * as animationData from "../assets/lotties/gift.json";
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
        <div className='w-full h-96  flex flex-row justify-between items-start relative'>
            <div className='w-1/2 pt-20 h-full text-4xl font-bold text-violet-700'>
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