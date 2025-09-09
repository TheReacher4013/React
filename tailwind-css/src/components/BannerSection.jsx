import React from "react";
import Hero from "../assets/hero.png";
import Circle from "./ui/circle";


const BannerSection = () => {
    return (
        <section className="overflow-x-hidden overflow-y-visible relative">
            {/* <Circle
                className={
                    "w-[18rem] h-[18rem] rounded-full bg-blue-50/80 absolute -top-20 -left-30 -z-0"
                } 
             />
            <Circle  
            className={
                "w-[270px] h-[270px] rounded-full bg-blue-50/80 absolute -top-[568px] -left-[157px]"
            } 
            
            /> */}
            <Circle className="absolute top-10 left-10 w-40 h-40 rounded-full bg-amber-700 opacity-40" />
            <Circle className="absolute top-20 right-20 w-32 h-32 rounded-full bg-amber-950 opacity-40" />
            <Circle className="absolute bottom-20 left-32 w-48 h-48 rounded-full bg-pink-900 opacity-40" />
            <Circle className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-blue-900 opacity-30" />
            <Circle className="absolute -bottom-102 -right-52 w-[46rem] h-[46rem] rounded-full border bg-cyan-800 opacity-50" />


            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-full mx-auto lg:max-w-[90%] z-10">
                {/* text content */}
                <div className="flex-1 space-y-4">
                    <h1 className="text-4xl md:text-6xl flex flex-col leading-[100%] font-primary font-semibold">
                        <span>
                            <strong className="font-semibold text-[#0004ff]">
                                Summarize
                            </strong>{" "}
                            Your
                        </span>
                        <span>Notes in Seconds</span>
                    </h1>
                    <p className="text-base md:text-xl max-w-xl">
                        Effortlessly condense your study material and
                        save time for what matters most.
                    </p>
                    <button className="bg-[#0004ff] text-white p-3 lg:p-4 rounded-xl">
                        Summarize my notes
                    </button>
                </div>
                {/* img container */}
                <div className="flex-1">
                    <img
                        src={Hero}
                        alt="Hero Banner"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    );
};

export default BannerSection;


// sir section|

// import React from "react";
// import Hero from "../assets/hero.png";
// import Circle from "./ui/Circle";
// const BannerSection = () => {
//     return (
//         <section className="min-h-screen flex items-center mt-20 lg:mt-0 relative">
//             <Circle
//                 className={
//                     "w-[18rem] h-[18rem] rounded-full bg-blue-50/80 absolute -top-20 -left-30 -z-0"
//                 }
//             />
//             <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
//                 {/* text content */}
//                 <div className="flex-1 space-y-4">
//                     <h1 className="text-4xl md:text-6xl flex flex-col leading-[100%] font-primary font-semibold">
//                         <span>
//                             <strong className="font-semibold text-[#0004ff]">
//                                 Summarize
//                             </strong>{" "}
//                             Your
//                         </span>
//                         <span>Notes in Seconds</span>
//                     </h1>
//                     <p className="text-base md:text-xl max-w-xl">
//                         Effortlessly condense your study material and
//                         save time for what matters most.
//                     </p>
//                     <button className="bg-[#0004ff] text-white p-3 lg:p-4 rounded-xl">
//                         Summarize my notes
//                     </button>
//                 </div>
//                 {/* img container */}
//                 <div className="flex-1">
//                     <img
//                         src={Hero}
//                         alt="Hero Banner"
//                         loading="eager"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default BannerSection;