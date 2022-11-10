import React from 'react'

const About = () => {
    return (
        <div className=' w-full h-96 bg-top'>
            <div className='divide-y divide-gray-600 ml-5 md:ml-20 pt-24 md:w-1/2'>
                <h1 data-aos="fade-in" className='text-center font-font1 md:text-left text-4xl font-bold text-white '>
                    About
                </h1>
                <p data-aos-duration="200" data-aos="fade-in" className='mt-5 pt-5 text-left text-lg text-white'>
                    Polygon believes in Web3 for all. Polygon is a decentralised Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.
                </p>
            </div>

        </div>
    )
}

export default About