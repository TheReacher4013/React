import React from 'react'
// import Profile from "../assets/profile.png"
import { NavLink } from 'react-router-dom';
import AboutUs from './AboutUs';
import Education from './Education';
import Footer from './footer';

const Hero = () => {
    return (
        <>
            <section className='flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 pt-20 min-h-screen 
                            bg-gradient-to-r from-orange-100 via-rose-100 to-pink-100 transition-all duration-500'>
                {/* Text Section */}
                <div className='text-center lg:text-left lg:w-1/2'>
                    <p className='text-3xl mb-6 text-rose-600 font-semibold transition-colors duration-300 hover:text-rose-700'>
                        Hi, my name is
                    </p>
                    <h1 className='text-5xl lg:text-7xl font-bold mb-4 text-orange-600 transition-colors duration-300 hover:text-orange-700'>
                        RUSHIKESH KISHOR JOSHI
                    </h1>
                    <p className='text-2xl mb-6 text-slate-700 transition-colors duration-300 hover:text-slate-900'>
                        I am a full stack developer
                    </p>
                    <NavLink to="/contact">
                        <button className='bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors duration-300 cursor-pointer'>
                            Get in Touch
                        </button>
                    </NavLink>
                </div>

                {/* Image Section */}
                {/* <div className='lg:w-1/2 flex justify-center mt-10 lg:mt-0'>
                <img src={Profile} alt="Profile" className='w-50 h-80' />
            </div> */}
            </section>
            <AboutUs />
            <Education />
            <Footer />
        </>
    );
};

export default Hero;
