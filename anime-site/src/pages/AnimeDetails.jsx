import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimeDetail = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState(null);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime/${id}`)
            .then(res => res.json())
            .then(data => setAnime(data.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!anime) return <p className="p-8">Loading...</p>;

    return (
        <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded">
            <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-80 object-cover rounded" />
            <h1 className="text-3xl font-bold mt-4">{anime.title}</h1>
            <p className="mt-2 text-gray-700">{anime.synopsis}</p>
            <p className="mt-2"><span className="font-bold">Score:</span> {anime.score}</p>
            <p className="mt-1"><span className="font-bold">Episodes:</span> {anime.episodes}</p>
            <p className="mt-1"><span className="font-bold">Status:</span> {anime.status}</p>
        </div>
    );
};

export default AnimeDetail;
