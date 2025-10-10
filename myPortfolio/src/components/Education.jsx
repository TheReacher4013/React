import React from 'react'

const Education = () => {
  return (
    <section className="px-8 lg:px-20 pt-20 font-mono bg-[#D1ED81] min-h-screen">
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-red-600 uppercase tracking-widest mb-6">
        Education
      </h2>

      {/* Content */}
      <div className="flex border-l-2 border-red-500">
        {/* Left Side - Colleges */}
        <div className="w-1/3 pl-4 flex flex-col gap-8 text-sm font-semibold tracking-wide">
          <p className="text-red-600">Dr. D. Y. Patil Science and Computer Science College, Akurdi</p>
          <p className="text-red-600 mt-15">Pratap College, Amalner</p>
          <p className="text-red-600 mt-17">Jay Yogeshwar College,Amalner</p>
          <p className="text-red-600 mt-15">Lokmanya Vidyalaya, Amalner</p>
        </div>

        {/* Right Side - Details */}
        <div className="w-2/3 pl-10 flex flex-col gap-8 text-sm leading-relaxed">
          {/* Master’s */}
          <div>
            <p className="italic font-bold text-black">Aug 2023 – Jun 2025</p>
            <p className="mt-1 font-semibold">Master of Science (Computer Science)</p>
            <ul className="list-none mt-2 space-y-1">
              <li className="text-black font-bold">+ CGPA: 8.98</li>
            </ul>
          </div>

          {/* Bachelor’s */}
          <div>
            <p className="italic font-bold text-black mt-1">Aug 2020 – Jun 2023</p>
            <p className=" font-semibold ">Bachelor of Science (Computer Science)</p>
            <ul className="list-none mt-2 space-y-1">
              <li className="text-black font-bold">+ CGPA: 8.83</li>
            </ul>
          </div>

          {/* Higher Secondary */}
          <div>
            <p className="italic font-bold text-black mt-2">Aug 2018 – Jun 2020</p>
            <p className=" font-semibold ">Science</p>
            <ul className="list-none mt-2 space-y-1">
              <li className="text-black font-bold">Percentage:63.23 %</li>
            </ul>
          </div>

          {/* Secondary */}
          <div>
            <p className="italic font-bold text-black mt-4">2018</p>
            <p className=" font-semibold ">School</p>
            <ul className="list-none mt-2 space-y-1">
              <li className="text-black font-bold">Percentage: 76.40 %</li>
            </ul>
          </div>   

        </div>
      </div>
    </section>
  )
}

export default Education
