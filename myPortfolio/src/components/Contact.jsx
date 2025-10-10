import React from "react";
import { NavLink } from "react-router-dom";
import Rushikesh from "../assets/Rushikesh.pdf"

const ContactForm = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-white text-gray-900">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900">
          LET'S BUILD A THING
        </h1>

        {/* Form */}
        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="FIRST NAME *"
              className="border border-gray-400 px-4 py-3 w-full outline-none focus:border-black"
              required
            />
            <input
              type="text"
              placeholder="LAST NAME *"
              className="border border-gray-400 px-4 py-3 w-full outline-none focus:border-black"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="EMAIL *"
              className="border border-gray-400 px-4 py-3 w-full outline-none focus:border-black"
              required
            />
            <input
              type="tel"
              placeholder="PHONE"
              className="border border-gray-400 px-4 py-3 w-full outline-none focus:border-black"
            />
          </div>

          <input
            type="text"
            placeholder="SUBJECT *"
            className="border border-gray-400 px-4 py-3 w-full outline-none focus:border-black"
            required
          />

          <textarea
            placeholder="MESSAGE *"
            rows="5"
            className="border border-gray-400 px-4 py-3 w-full outline-none focus:border-black resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="block mt-4 border border-gray-500 text-gray-700 hover:bg-gray-100 px-8 py-3 font-semibold tracking-widest"
          >
            SEND IT
          </button>
        </form>

        {/* Footer Section */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            DOWNLOAD RESUME.
          </h2>
          <NavLink to={Rushikesh} target="_blank" download>
            <button className="border border-gray-600 px-6 py-3 hover:bg-gray-500">
              DOWNLOAD
            </button>
          </NavLink>

          <div className="mt-10 text-right text-sm space-y-1 text-gray-600">
            <p>GITHUB</p>
            <p>+ TWITTER</p>
            <p>+ LINKEDIN</p>
            <p>+ CHARITY</p>
            <p>+ SOURCE</p>
          </div>
        </div>

        <footer className="mt-10 text-center text-sm text-gray-500">
          @ 2025 RUSHIKESH KISHOR JOSHI. ALL RIGHTS RESERVED.
        </footer>
      </div>
    </section>
  );
};

export default ContactForm;
