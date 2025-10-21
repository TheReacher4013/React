import React, { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";

const TopAnime = () => {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/top/anime")
            .then(res => res.json())
            .then(data => setAnimes(data.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {animes.map(anime => (
                <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
        </div>
    );
};

export default TopAnime;