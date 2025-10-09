import React from 'react'
// import Profile from "../assets/profile.png"
import AboutUs from './AboutUs';
import { NavLink } from 'react-router-dom';


const Hero = () => {
    return (
        <>
        <section className='flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 pt-20'>
            {/* Text Section */}
            <div className='text-center lg:text-left lg:w-1/2'>
                <p className='text-3xl mb-6'>Hi, my name is </p>
                <h1 className='text-5xl lg:text-7xl font-bold mb-4'>RUSHIKESH KISHOR JOSHI</h1>
                <p className='text-2xl mb-6'>full stack developer </p>
                <NavLink to="/contact">
                    <button className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer'>Get in Touch</button>
                </NavLink>
            </div>
            {/* Image Section */}
                {/* <div className='lg:w-1/2 flex justify-center mt-10 lg:mt-0'>
                <img src={Profile} alt="Profile" className='w-50 h-80  ' />
            </div> */}
        </section>
        <AboutUs />
        </>
  );
};

export default Hero;


