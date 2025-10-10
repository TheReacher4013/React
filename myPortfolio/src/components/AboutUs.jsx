import React from 'react'

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-[#D1ED81] flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl ">
        <h1 className="text-3xl font-extrabold text-red-600 uppercase tracking-widest mb-6">
          ABOUT
        </h1>
        <p className="text-gray-700 text-base leading-relaxed font-mono">
          I’m a <span className="font-semibold text-black">Full-Stack Developer</span> specializing in the
          <span className="text-green-700 font-semibold"> MERN stack</span>, focused on building scalable and
          user-centric web applications. I have hands-on experience in creating dynamic projects with seamless
          front-end and robust back-end functionality. Passionate about solving real-world problems and continuously
          improving my technical expertise. I’ve also enhanced the visual design of my college website by improving
          the overall UI for better user experience.
        </p>
      </div>
    </section>
  )
}

export default AboutUs
