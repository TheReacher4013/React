import React from "react";
import { NavLink } from "react-router-dom";
import Rushikesh from "../assets/Rushikesh.pdf";

const ContactForm = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-white text-center">
          LET'S BUILD A THING
        </h1>

        {/* Form */}
        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="FIRST NAME *"
              className="border border-pink-200 bg-white/20 text-white placeholder-white px-4 py-3 w-full rounded-md outline-none focus:border-white focus:ring-2 focus:ring-pink-300 transition-all duration-300"
              required
            />
            <input
              type="text"
              placeholder="LAST NAME *"
              className="border border-pink-200 bg-white/20 text-white placeholder-white px-4 py-3 w-full rounded-md outline-none focus:border-white focus:ring-2 focus:ring-pink-300 transition-all duration-300"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="EMAIL *"
              className="border border-pink-200 bg-white/20 text-white placeholder-white px-4 py-3 w-full rounded-md outline-none focus:border-white focus:ring-2 focus:ring-pink-300 transition-all duration-300"
              required
            />
            <input
              type="tel"
              placeholder="PHONE"
              className="border border-pink-200 bg-white/20 text-white placeholder-white px-4 py-3 w-full rounded-md outline-none focus:border-white focus:ring-2 focus:ring-pink-300 transition-all duration-300"
            />
          </div>

          <input
            type="text"
            placeholder="SUBJECT *"
            className="w-full p-3 rounded-lg text-white placeholder-gray-100 
               bg-gradient-to-r from-purple-500 to-pink-500 
               border border-pink-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
            required
          />

          <textarea
            placeholder="MESSAGE *"
            rows="5"
            className="border border-pink-200 bg-white/20 text-white placeholder-white px-4 py-3 w-full rounded-md outline-none focus:border-white focus:ring-2 focus:ring-pink-300 resize-none transition-all duration-300"
            required
          ></textarea>

          <button
            type="submit"
            className="block mx-auto mt-6 border border-white text-purple-600 bg-white hover:bg-pink-100 px-8 py-3 font-semibold rounded-lg tracking-widest transition-all duration-300"
          >
            SEND IT
          </button>
        </form>

        {/* Footer Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            DOWNLOAD RESUME.
          </h2>
          <NavLink to={Rushikesh} target="_blank" download>
            <button className="border border-white px-6 py-3 rounded-lg bg-white/20 hover:bg-white hover:text-purple-700 transition-all duration-300">
              DOWNLOAD
            </button>
          </NavLink>

          <div className="mt-10 text-sm space-y-1 text-gray-200">
            <a
              href="https://github.com/TheReacher4013"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-600 transition-colors duration-300"
            >
              GitHub
            </a>
          <br />
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

        <footer className="mt-10 text-center text-sm text-gray-300">
          © 2025 RUSHIKESH KISHOR JOSHI. ALL RIGHTS RESERVED.
        </footer>
      </div>
    </section>
  );
};

export default ContactForm;
