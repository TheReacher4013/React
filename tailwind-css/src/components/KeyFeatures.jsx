import React from 'react'
import Heading from './ui/Heading'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'

const items=[
  {
    id:1,
    icon:icon1,
    heading:"Automatic Note Summarizaton",
    para: "Efforting Note Talking Effortless Learning."
  },
  {
    id: 2,
    icon: icon2,
    heading: "Key Term Extraction",
    para: "Unleash the Power of Your Text."
  },
  {
    id: 3,
    icon: icon3,
    heading: "Quick Quiz Generation",
    para: "Create engaging quizzes in seconds."
  },
  {
    id: 4,
    icon: icon4,
    heading: "AI-Powered Citation Generator",
    para: "Generate accurate citations in APA, MLA, and more effortlessly"
  },
  {
    id: 5,
    icon: icon5,
    heading: "Collaborative Whiteboard",
    para: "Brainstorm ideas and collaborate in real-time with peers online"
  },
  {
    id: 6,
    icon: icon6,
    heading: "E-Library Integration",
    para: "Access an extensive collection of e-books and journals"
  },


];

const KeyFeatures = () => {
  return (
    // <div>KeyFeatures</div>
    <section className="min-h-screen space-y-12 "> 
        <div className=''>
            <Heading span = "Key" head="features" />
        </div>
        <div className="max-w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5
         md:gap-10 lg:gap-x-30 lg-gap-y-25">
          {
            items.map((item)=>(
              <div key={item.id}
               className="shadow-xl shadow-[#D1D1FF79] py-5 px-6 rounded-xl flex flex-col justify-center items-center gap-6 drop-shadow-2xl">
                <img src={item.icon} alt={item.heading}/>
                <h2 className="text-3xl font-semibold text-[#0004ff] text-center">{item.heading}</h2>
                <p className='text-2xl text-center px-6'>{item.para}
                </p>
                <button className='mb-4 bg-[#0004ff]
                 text-white py-3 px-6 rounded-xl cursor-pointer'>Start Now</button>
                </div>
            ))
          }
        </div>

     </section>
  )
}

export default KeyFeatures