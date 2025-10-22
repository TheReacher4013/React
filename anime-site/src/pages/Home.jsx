import React, { useState, useEffect } from "react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";
import AnimeCard from "../components/AnimeCard";
import LandingPage from "./LandingPage";

const Home = () => {
    const [animes, setAnimes] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    // Debounce query to avoid too many requests
    useEffect(() => {
        const delay = setTimeout(() => setDebouncedQuery(query), 800);
        return () => clearTimeout(delay);
    }, [query]);

    // Fetch top anime
    const fetchAnimes = async (searchQuery = "", pageNum = 1) => {
        setLoading(true);
        setErrorMsg("");

        const url = searchQuery
            ? `https://api.jikan.moe/v4/anime?q=${searchQuery}&limit=20&page=${pageNum}`
            : `https://api.jikan.moe/v4/top/anime?page=${pageNum}`;

        try {
            const res = await fetch(url);

            if (res.status === 429) {
                console.warn("⚠️ Too many requests — retrying once in 3 seconds...");
                setErrorMsg("Rate limit reached. Retrying...");
                await new Promise(r => setTimeout(r, 3000));
                return fetchAnimes(searchQuery, pageNum);
            }

            if (!res.ok) throw new Error(`API error: ${res.status}`);

            const data = await res.json();

            if (data && Array.isArray(data.data)) {
                if (pageNum === 1) setAnimes(data.data);
                else setAnimes(prev => [...prev, ...data.data]);
            } else {
                setErrorMsg("No anime found for this search.");
            }
        } catch (err) {
            console.error("Fetch error:", err.message);
            setErrorMsg("Failed to load data. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    // Run fetch when debouncedQuery or page changes
    useEffect(() => {
        fetchAnimes(debouncedQuery, page);
    }, [debouncedQuery, page]);

    // Handle search input
    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        setPage(1);
    };

    // Infinite scroll
    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 && !loading) {
            setTimeout(() => setPage(prev => prev + 1), 600);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading]);

//     return (
//         <>
//         <div className="p-8">
//             {/* Search + Genre Filter */}
//             <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
//                 <SearchBar onSearch={handleSearch} />
//                 <GenreFilter onSelect={genre => handleSearch(genre)} />
//             </div>

//             {/* Error Message */}
//             {errorMsg && (
//                 <p className="text-center text-red-500 mb-4 font-semibold">{errorMsg}</p>
//             )}

//             {/* Anime Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {Array.isArray(animes) && animes.length > 0 ? (
//                     animes.map(anime => (
//                         <AnimeCard key={anime.mal_id} anime={anime} />
//                     ))
//                 ) : (
//                     !loading && <p className="text-center col-span-full text-gray-400">No anime found.</p>
//                 )}
//             </div>

//             {/* Loading Indicator */}
//             {loading && <p className="text-center mt-4 text-black500">Loading...</p>}
//         </div>
//         <LandingPage />
//         </>
//     );
// };

    return (
        <>
            {/* 🔹 Landing Page at Top */}
            <LandingPage />

            <div className="p-8">
                {/* Search + Genre Filter */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                    <SearchBar onSearch={handleSearch} />
                    <GenreFilter onSelect={(genre) => handleSearch(genre)} />
                </div>

                {/* Error Message */}
                {errorMsg && (
                    <p className="text-center text-red-500 mb-4 font-semibold">{errorMsg}</p>
                )}

                {/* Anime Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.isArray(animes) && animes.length > 0 ? (
                        animes.map((anime) => <AnimeCard key={anime.mal_id} anime={anime} />)
                    ) : (
                        !loading && (
                            <p className="text-center col-span-full text-gray-400">
                                No anime found.
                            </p>
                        )
                    )}
                </div>

                {/* Loading Indicator */}
                {loading && <p className="text-center mt-4 text-gray-500">Loading...</p>}
            </div>
        </>
    );

};
export default Home;
