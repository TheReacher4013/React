import React, { useState, useEffect } from "react";
import AnimeCard from "../components/AnimeCard";

const TopAnime = () => {
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [page, setPage] = useState(1);

    // Fetch top anime from Jikan API
    const fetchTopAnimes = async (pageNum = 1) => {
        setLoading(true);
        setErrorMsg("");

        try {
            const res = await fetch(`https://api.jikan.moe/v4/seasons/upcoming?page=${pageNum}`);

            if (res.status === 429) {
                console.warn(" Too many requests — retrying once in 3 seconds...");
                setErrorMsg("Rate limit reached. Retrying...");
                await new Promise((r) => setTimeout(r, 3000));
                return fetchTopAnimes(pageNum);
            }

            if (!res.ok) throw new Error(`API Error: ${res.status}`);

            const data = await res.json();

            if (data && Array.isArray(data.data)) {
                setAnimes((prev) => {
                    const combined = pageNum === 1 ? data.data : [...prev, ...data.data];
                    //  Remove duplicates by mal_id
                    const unique = combined.filter(
                        (v, i, arr) => arr.findIndex((a) => a.mal_id === v.mal_id) === i
                    );
                    return unique;
                });
            } else {
                setErrorMsg("No anime found.");
            }
        } catch (err) {
            console.error("Fetch error:", err.message);
            setErrorMsg("Failed to load top anime. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    // Fetch when component mounts or page changes
    useEffect(() => {
        fetchTopAnimes(page);
    }, [page]);

    // Infinite Scroll for pagination
    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 && !loading) {
            setTimeout(() => setPage((prev) => prev + 1), 600);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading]);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-6">🔥Top Anime</h1>

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

            {loading && <p className="text-center mt-4 text-gray-500">Loading...</p>}
        </div>
    );
};

export default TopAnime;
