import React from 'react';

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-orange-100 via-rose-100 to-pink-100 flex items-center justify-center px-6 py-16 transition-all duration-500">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-extrabold text-rose-600 uppercase tracking-widest mb-6 transition-colors duration-300 hover:text-rose-700">
          ABOUT
        </h1>
        <p className="text-slate-700 text-base leading-relaxed font-mono transition-colors duration-300 hover:text-slate-900">
          I’m a <span className="font-semibold text-orange-500 transition-colors duration-300 hover:text-orange-600">Full-Stack Developer</span>
          specializing in the <span className="text-orange-500 font-semibold transition-colors duration-300 hover:text-orange-600">MERN stack</span>,
          focused on building scalable and user-centric web applications. I have hands-on experience in creating dynamic projects
          with seamless front-end and robust back-end functionality. Passionate about solving real-world problems and continuously
          improving my technical expertise. I’ve also enhanced the visual design of my college website by improving
          the overall UI for better user experience.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
