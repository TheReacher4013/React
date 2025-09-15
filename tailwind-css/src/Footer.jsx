import React from "react";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaEnvelope,
} from "react-icons/fa";
import Owl from "../assets/owl.png";


const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-8">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

                {/* Left Section */}
                <div>
                    <div className="flex items-start space-x-3 mb-3">
                        <img src={Owl} alt="Logo" className="w-10 h-10 object-contain"/>  
                    </div>
                    <h2 className="text-xl font-bold text-indigo-600 mb-2">
                        
                        <span className="text-blue-600">Study</span>
                        <span className="text-black">Hive</span>
                        <span className="text-black">AI</span>
                    </h2>
                    {/* const content = [{icon: Owl}]; */}

                    <p className="text-sm leading-relaxed">
                        A smart AI-powered platform designed to enhance learning by
                        providing personalized study plans, real-time assistance, and
                        collaboration tools to help students excel efficiently and
                        effectively.
                    </p>
                </div>

                {/* Middle Section */}
                <div className="flex flex-col md:items-center">
                    <h3 className="font-semibold mb-3">Pages</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/" className="hover:text-indigo-500">Home</a></li>
                        <li><a href="/careers" className="hover:text-indigo-500">Careers</a></li>
                        <li><a href="/blog" className="hover:text-indigo-500">Blog</a></li>
                        <li><a href="/about" className="hover:text-indigo-500">About Us</a></li>
                        <li><a href="/terms" className="hover:text-indigo-500">Terms of Use</a></li>
                        <li><a href="/contact" className="hover:text-indigo-500">Contact Us</a></li>
                    </ul>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-4">
                        <a href="#"><FaFacebook className="text-xl hover:text-indigo-500" /></a>
                        <a href="#"><FaTwitter className="text-xl hover:text-indigo-500" /></a>
                        <a href="#"><FaInstagram className="text-xl hover:text-indigo-500" /></a>
                        <a href="#"><FaEnvelope className="text-xl hover:text-indigo-500" /></a>
                    </div>
                </div>

                {/* Right Section (Map) */}
                <div>
                    <h3 className="font-semibold mb-3">Maps Location</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160994702!2d72.74109980657274!3d19.08219783908912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630b2aa0c5f%3A0x2d0b7d2d49f2f5f4!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1631534665579!5m2!1sen!2sin"
                        width="100%"
                        height="150"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center text-sm text-gray-500 mt-6 border-t pt-4">
                Copyright ® 2022 prodesigner All rights Received
            </div>
        </footer>
    );
};

export default Footer;
