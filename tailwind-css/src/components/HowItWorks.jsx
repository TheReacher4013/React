
import React from 'react'
import vide from "../assets/how.mp4"
import Heading from './ui/Heading';

import uploadIcon from "../assets/cloud.png";
import bookIcon from "../assets/book.png";
import reviewIcon from "../assets/cake.png";

const content = [
    {
        num: "01",
        title: "Upload Notes",
        icon: uploadIcon,
        Concept: "A student dragging a document into app or clicking the upload button to add their notes.",
    },
    {
        num: "02",
        title: "Automatic Summarization",
        icon: bookIcon,
        Concept:"Notes transforming into shorter, clearer text, with important phrases or bullet points popping up.",
    },
    {
        num: "03",
        title: "Review Key Points",
        icon: reviewIcon,
        Concept: "A student dragging a document into the app or clicking the upload button to add their notes.",
    },
]

const HowItWorks = () => {
    return (
        <section className='py-20 space-y-16'>
            <div>
                <Heading span={"How"} head={"It Works"} />
            </div>

            <div className='flex gap-6 justify-center items-center max-w-[90%] mx-auto'>
                <div className='flex-1 space-y-8 relative'>
                    {content.map((item, index) => (
                        <div key={index} className='flex gap-4 items-start pr-6 relative'>
                            <div className="flex flex-col items-center relative">
                                <span className='w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10'>
                                    {item.num}
                                </span>
                                {index !== content.length - 1 && (
                                    <div className="w-[2px] bg-black flex-1 mt-1"></div>
                                )}
                            </div>
                            <div>
        
                                <h3 className='flex items-center gap-2 text-lg font-semibold text-blue-600'>
                                    {item.title}
                                    <img src={item.icon} alt={item.title} className="w-6 h-6" />
                                </h3>
                                <p className='text-gray-600 text-sm mt-1'>
                                    <strong>Concept: </strong>
                                    <br />
                                    {item.Concept}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
                <div className='shrink-0 flex-1'>
                    <video autoPlay muted loop controls className="rounded-lg shadow-lg">
                        <source src={vide} type='video/mp4' />
                    </video>
                </div>

            </div>
        </section>
    );
}

export default HowItWorks;
