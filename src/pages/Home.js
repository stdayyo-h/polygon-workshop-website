import React from 'react'
import About from '../components/About'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

import Register from '../components/Register'
const Home = () => {
    return (
        <div className='overflow-hidden max-w-screen '>
            <Header id1={"comp_id"} id2={"reg_id"} />

            <div className='flex flex-row'>
                    <div id='comp_id'>
                    <About />
                    </div>
                    <Features />
            </div>
<<<<<<< HEAD
            
=======
            <Features />

>>>>>>> 265cd8c4287d6b9d932438106c0e60e1aa4b0dc3
            <Register />
            <Footer />
        </div>
    )
}

export default Home