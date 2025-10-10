import React from 'react';

const Education = () => {
  return (
    <section className="px-8 lg:px-20 pt-20 font-mono bg-gradient-to-r from-orange-100 via-rose-100 to-pink-100 min-h-screen transition-all duration-500">
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-rose-600 uppercase tracking-widest mb-6 transition-colors duration-300 hover:text-rose-700">
        Education
      </h2>

      {/* Content */}
      <div className="flex border-l-2 border-rose-300">
        {/* Left Side - Colleges */}
        <div className="w-1/3 pl-4 flex flex-col gap-8 text-sm font-extrabold tracking-wide">
          <p className="text-orange-600 transition-colors duration-300 hover:text-orange-700">
            Dr. D. Y. Patil Science and Computer Science College, Akurdi
          </p>
          <p className="text-orange-600 mt-15 transition-colors duration-300 hover:text-orange-700">
            Pratap College, Amalner
          </p>
          <p className="text-orange-600 mt-17 transition-colors duration-300 hover:text-orange-700">
            Jay Yogeshwar College, Amalner
          </p>
          <p className="text-orange-600 mt-15 transition-colors duration-300 hover:text-orange-700">
            Lokmanya Vidyalaya, Amalner
          </p>
        </div>

        {/* Right Side - Details */}
        <div className="w-2/3 pl-10 flex flex-col gap-8 text-sm leading-relaxed">
          {/* Master’s */}
          <div>
            <p className="font-extrabold text-rose-700 transition-colors duration-300 hover:text-rose-800">
              Aug 2023 – Jun 2025
            </p>
            <p className="mt-1 font-extrabold text-slate-800 transition-colors duration-300 hover:text-slate-900">
              Master of Science (Computer Science)
            </p>
            <ul className="list-none mt-2 space-y-1">
              <li className="text-slate-700 font-bold transition-colors duration-300 hover:text-slate-900">
                + CGPA: 8.98
              </li>
            </ul>
          </div>

          {/* Bachelor’s */}
          <div>
            <p className="font-extrabold text-rose-700 mt-1 transition-colors duration-300 hover:text-rose-800">
              Aug 2020 – Jun 2023
            </p>
            <p className="font-extrabold text-slate-800 transition-colors duration-300 hover:text-slate-900">
              Bachelor of Science (Computer Science)
            </p>
            <ul className="list-none mt-2 space-y-1">
              <li className="text-slate-700 font-bold transition-colors duration-300 hover:text-slate-900">
                + CGPA: 8.83
              </li>
            </ul>
          </div>

          {/* Higher Secondary */}
          <div>
            <p className="font-extrabold text-rose-700 mt-2 transition-colors duration-300 hover:text-rose-800">
              Aug 2018 – Jun 2020
            </p>
            <p className="font-extrabold text-slate-800 transition-colors duration-300 hover:text-slate-900">
              Science
            </p>
            <ul className="list-none mt-2 space-y-1">
              <li className="text-slate-700 font-bold transition-colors duration-300 hover:text-slate-900">
                Percentage: 63.23 %
              </li>
            </ul>
          </div>

          {/* Secondary */}
          <div>
            <p className="font-extrabold text-rose-700 mt-4 transition-colors duration-300 hover:text-rose-800">
              2018
            </p>
            <p className="font-extrabold text-slate-800 transition-colors duration-300 hover:text-slate-900">
              School
            </p>
            <ul className="list-none mt-2 space-y-1">
              <li className="text-slate-700 font-bold transition-colors duration-300 hover:text-slate-900">
                Percentage: 76.40 %
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
