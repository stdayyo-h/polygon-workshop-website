import React from 'react'

const About = () => {
    return (
        // <div className=' w-full h-96 bg-top'>
        //     <div className='lg:divide-y divide-gray-600 ml-5 md:ml-20 pt-24 md:w-1/2'>
        //         <h1 data-aos="fade-in" className='text-center font-font1 md:text-left text-4xl font-bold text-white '>
        //             About
        //         </h1>
        //         <p data-aos-duration="200" data-aos="fade-in" className='mt-5 pt-5 lg:text-left text-lg text-white text-justify mr-3'>
        //             Polygon believes in Web3 for all. Polygon is a decentralised Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.
        //         </p>
        //     </div>

        //</div>
        <div className='bg-top text-white flex flex-col w-full'>
            <div className="px-10 my-10 md:ml-10 py-4 flex w-full flex-col items-center justify-around text-white bg-top">
                <div
                    data-aos="fade-up"
                    aos-delay="4000"
                    className="bg-gradient-to-r my-8 text-left flex flex-col items-start from-purpleC to-purpleC2 shadow-lg w-full   rounded-xl "
                >
                    <h7 className="font-font1 font-bold text-4xl mb-2">About</h7>
                    <p className="text-justify">
                        "Equip yourself with the  disruptive technology that  will define our next decade"
                        <br />
                        Coding Club TKMCE presents you 0xcite, one day workshop that will bring the beginners into the Web3 domain.<br /> Speakers from the Polygon Guild Kochi will take you through the fascinating world of Web3.

                    </p>
                </div>
            </div>
            <div className="flex w-full flex-col lg:flex-row items-center justify-around text-white bg-top">
                <div
                    data-aos="fade-up"
                    aos-delay="4000"
                    className="bg-gradient-to-r my-8 text-left flex flex-col items-start from-purpleC to-purpleC2 shadow-lg w-full lg:w-5/12 p-10 rounded-xl md:hover:shadow-md md:hover:shadow-slate-200 "
                >
                    <h7 className="font-bold text-4xl mb-2 font-font1">Polygon Guild Kochi</h7>
                    <p className="text-justify">
                        Polygon Guilds are communities of Web3 enthusiasts, developers,
                        community managers and all the people who use, support and advocate
                        Polygon. Polygon Guilds are playing a major role in driving awareness and
                        education among Web3 enthusiasts including students and developers all
                        around the world. Polygon Guild Kochi is the Kochi chapter of Polygon
                        Guild.
                    </p>
                </div>
                <div
                    data-aos="fade-up"
                    aos-delay="4000"
                    className="bg-gradient-to-r text-left flex flex-col items-start from-purpleC to-purpleC2 shadow-lg w-full lg:w-5/12 p-10 rounded-xl md:hover:shadow-md md:hover:shadow-slate-200"
                >
                    <h7 className="font-bold text-4xl mb-2 font-font1">Coding Club TKMCE</h7>
                    <p className="text-justify">
                        Coding club TKMCE is an initiative to inculcate the culture of programming and development in our institute.
                        We create a platform which allows students to gain assistance and mentorship to enhance their coding ability.
                        We ensure that every student here at TKMCE should have an opportunity to learn how to code and develop a passion for it.
                        Our aim is to impart and instill this culture of learning-by-practice among students and professionals alike.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About