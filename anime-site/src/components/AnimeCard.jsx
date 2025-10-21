import React, { useState } from "react";

const AnimeCard = ({ anime }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div
                className="bg-white shadow-lg rounded overflow-hidden hover:scale-105 transform transition cursor-pointer"
                onClick={() => setShowModal(true)}
            >
                <img
                    src={anime.images.jpg.image_url}
                    alt={anime.title}
                    className="w-full h-60 object-cover"
                />
                <div className="p-4">
                    <h2 className="font-bold text-lg">{anime.title}</h2>
                    <p className="text-sm">Score: {anime.score}</p>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded max-w-2xl w-full relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-900"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">{anime.title}</h2>
                        <p className="text-sm mb-4">{anime.synopsis}</p>
                        {anime.trailer?.youtube_id ? (
                            <iframe
                                width="100%"
                                height="315"
                                src={`https://www.youtube.com/embed/${anime.trailer.youtube_id}`}
                                title="Anime Trailer"
                                allowFullScreen
                                className="rounded"
                            ></iframe>
                        ) : (
                            <p className="text-gray-500">Trailer not available</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default AnimeCard;
