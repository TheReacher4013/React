import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LandingPage = () => {
    const [featured, setFeatured] = useState([]);
    const [trending, setTrending] = useState([]);

    // Fetch top anime for banner and another set for posters
    useEffect(() => {
        const fetchData = async () => {
            try {
                // First Swiper (main big banner)
                const topRes = await fetch("https://api.jikan.moe/v4/top/anime?limit=8");
                const topData = await topRes.json();
                setFeatured(topData.data || []);

                // Second Swiper (poster row) — get next page for variety
                const trendingRes = await fetch("https://api.jikan.moe/v4/top/anime?page=2&limit=15");
                const trendingData = await trendingRes.json();
                setTrending(trendingData.data || []);
            } catch (err) {
                console.error("Error fetching anime:", err);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="relative bg-gray-900 text-white overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 z-0"></div>

            {/* 🎬 MAIN HERO SLIDER */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className="w-full h-[80vh] rounded-b-2xl"
            >
                {featured.map((anime) => (
                    <SwiperSlide key={anime.mal_id}>
                        <div className="relative w-full h-[80vh]">
                            {/* Poster image */}
                            <img
                                src={anime.images.jpg.large_image_url}
                                alt={anime.title}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />

                            {/* Info overlay */}
                            <div className="absolute bottom-16 left-10 max-w-lg z-10">
                                <h2 className="text-4xl font-bold mb-3 drop-shadow-md">
                                    {anime.title}
                                </h2>
                                <p className="text-gray-300 text-sm mb-5 line-clamp-3">
                                    {anime.synopsis?.slice(0, 200)}...
                                </p>

                                {anime.trailer?.url ? (
                                    <a
                                        href={anime.trailer.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition"
                                    >
                                        ▶ Watch Trailer
                                    </a>
                                ) : (
                                    <button
                                        disabled
                                        className="bg-gray-500 text-white px-6 py-2 rounded-lg opacity-50 cursor-not-allowed"
                                    >
                                        No Trailer
                                    </button>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* 🍿 TRENDING ROW */}
            <div className="mt-12 px-8">
                <h3 className="text-2xl font-semibold mb-4">🔥 Trending Now</h3>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={15}
                    slidesPerView={6}
                    navigation
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    className="poster-swiper"
                >
                    {trending.map((anime) => (
                        <SwiperSlide key={anime.mal_id}>
                            <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
                                <div className="w-[160px] h-[230px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={anime.images.jpg.image_url}
                                        alt={anime.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="mt-2 text-center text-sm font-medium truncate">
                                    {anime.title}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default LandingPage;
