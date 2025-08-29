import React from "react";

const Heading = ({ span, head }) => {
    return (
        <div className="relative ">
            <hr className="absolute w-full h-auto top-1/2 border-2 border-[#0004ff] " />
            <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold bg-white/90 backdrop-blur-2xl w-max mx-auto leading-[100%] px-4 z-10">
                <span className="text-[#0004ff]">{span}</span>
                <span>{head}</span>
            </h2>
        </div>
    );
};
 
export default Heading;      