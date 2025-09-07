import React, { useRef } from "react";
import Heading from "./ui/Heading";

const Testimonials = () => {
    const trackRef = useRef(null);

    const handelScroll = (dir) => {
        console.log("hello");
        const track = trackRef.current;
        console.log(track);
        if (!track) return;

        const card = track.querySelector("article");
        console.log(card);
        if (!card) return;

        const cardWidth = card.getBoundingClientRect().width;
        const gap = 40;
        const totalWidth = cardWidth + gap;
        console.log("total width: ", totalWidth * dir);
        let { scrollLeft } = track;
        console.log(scrollLeft);
        // scrollLeft = totalWidth;
        track.scrollTo({
            left: scrollLeft + totalWidth * dir,
            behavior: "smooth",
        });
    };

    return (
        <section className="py-20 space-y-16">
            <div>
                <Heading span={"Testi"} head={"monials"} />
            </div>
            <div
                className="flex flex-row items-center gap-10 flex-nowrap overflow-x-hidden snap-x snap-mandatory scroll-smooth"
                ref={trackRef}>
                <article className=" w-[350px] aspect-[1/0.7] border border-red-800 shrink-0 snap-start ">
                    1
                </article>
                <article className="w-[350px]  aspect-[1/0.7] border border-blue-500 shrink-0 snap-start ">
                    2
                </article>
                <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 snap-start ">
                    3
                </article>
                <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 snap-start ">
                    4
                </article>
                <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 snap-start">
                    5
                </article>
                <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 snap-start">
                    6
                </article>
                <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 snap-start">
                    7
                </article>
                <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 snap-start">
                    8
                </article>
                <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 snap-start">
                    9
                </article>
                <article className="w-[350px] aspect-[1/0.7] border border-blue-500 shrink-0 snap-start">
                    20
                </article>
            </div>
            <div className="flex justify-center  items-center gap-8">
                <button
                    className="bg-blue-400 p-4 rounded-full"
                    onClick={() => handelScroll(-1)}>
                    &#10094;
                </button>
                <button
                    className="bg-blue-400  p-4 rounded-full"
                    onClick={() => handelScroll(1)}>
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default Testimonials; 