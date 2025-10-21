import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import AnimeCard from "../components/AnimeCard";
import GenreFilter from "../components/GenreFilter";

const Home = () => {
    const [animes, setAnimes] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchAnimes = (searchQuery = "", pageNum = 1) => {
        setLoading(true);
        const url = searchQuery
            ? `https://api.jikan.moe/v4/anime?q=${searchQuery}&limit=20&page=${pageNum}`
            : `https://api.jikan.moe/v4/top/anime?page=${pageNum}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (pageNum === 1) setAnimes(data.data);
                else setAnimes(prev => [...prev, ...data.data]);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchAnimes(query, page);
    }, [page, query]);

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        setPage(1);
    };

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 && !loading) {
            setPage(prev => prev + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading]);

    return (
        <div className="p-8">
            {/*Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <SearchBar onSearch={handleSearch} />
                <GenreFilter onSelect={(genre) => handleSearch(genre)} />
            </div>

            {/*  Anime Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {animes.map((anime) => (
                    <AnimeCard key={anime.mal_id} anime={anime} />
                ))}
            </div>

            {/*  Loading Indicator */}
            {loading && <p className="text-center mt-4">Loading...</p>}
        </div>
    );
};


export default Home;
