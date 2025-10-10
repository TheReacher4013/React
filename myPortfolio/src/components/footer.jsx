import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-orange-100 via-rose-100 to-pink-100 text-slate-700 mt-20 px-8 lg:px-20 py-10 transition-all duration-500">

            {/* Top Links */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
                <div className="flex gap-6">
                    <NavLink to="/about-us" className="hover:text-rose-600 transition-colors duration-300">About</NavLink>
                    <NavLink to="/education" className="hover:text-rose-600 transition-colors duration-300">Education</NavLink>
                    <NavLink to="/contact" className="hover:text-rose-600 transition-colors duration-300">Contact</NavLink>
                </div>

                {/* Social / Contact */}
                <div className="flex gap-6">
                    <a
                        href="https://github.com/TheReacher4013"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-rose-600 transition-colors duration-300"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/feed/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-rose-600 transition-colors duration-300"
                    >
                        LinkedIn
                    </a>
                </div>

            </div>

            {/* Contact Info */}
            <div className="text-center text-sm text-slate-600 mb-4">
                <p>Email: <span className="hover:text-rose-600 transition-colors duration-300 cursor-pointer">rushikeshjoshi4013@gmail.com</span></p>
                <p>Phone: <span className="hover:text-rose-600 transition-colors duration-300 cursor-pointer">+91 7758842043</span></p>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-slate-500">
                &copy; 2025 RUSHIKESH KISHOR JOSHI. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
