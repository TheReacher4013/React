import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimeDetails = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchAnime = async () => {
            setLoading(true);
            setError("");
            try {
                const res = await fetch(`https://kitsu.io/api/edge/anime/${id}`);
                if (!res.ok) throw new Error("Anime not found");
                const data = await res.json();
                setAnime(data.data);
            } catch (err) {
                console.error(err);
                setError("Failed to load anime details.");
            } finally {
                setLoading(false);
            }
        };
        fetchAnime();
    }, [id]);

    if (loading) return <p className="text-center mt-8">Loading...</p>;
    if (error) return <p className="text-center mt-8 text-amber-600">{error}</p>;
    if (!anime) return null;

    const trailer = anime.attributes.youtubeVideoId
        ? `https://www.youtube.com/embed/${anime.attributes.youtubeVideoId}`
        : null;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{anime.attributes.canonicalTitle}</h1>
            <img
                src={anime.attributes.posterImage?.small}
                alt={anime.attributes.canonicalTitle}
                className="mb-4 rounded"
            />
            <p className="mb-4">{anime.attributes.synopsis}</p>
            <p className="mb-4 font-semibold">Episodes: {anime.attributes.episodeCount || "N/A"}</p>
            {trailer ? (
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        src={trailer}
                        title="Anime Trailer"
                        frameBorder="0"
                        allowFullScreen
                        className="w-full h-64 sm:h-80 md:h-96 rounded"
                    />
                </div>
            ) : (
                <p className="text-green-400">Trailer not available.</p>
            )}
        </div>
    );
};

export default AnimeDetails;
