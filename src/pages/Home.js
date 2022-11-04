import React from 'react'
import About from '../components/About'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Register from '../components/Register'
const Home = () => {
    return (
        <div className='w-full max-w-screen'>
            <Header id={"comp_id"} />

            <div id='comp_id'>
                <About />
            </div>
            <Features />
            <Register />
            <Footer />
        </div>
    )
}

export default Home