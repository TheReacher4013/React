import React, { useState, useEffect } from "react";

const AnimeCard = ({ anime }) => {
    const [showModal, setShowModal] = useState(false);
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch detailed data (with trailer)
    const fetchDetails = async (id) => {
        setLoading(true);
        try {
            const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
            const data = await res.json();
            setDetails(data.data);
        } catch (err) {
            console.error("Error fetching details:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (showModal) fetchDetails(anime.mal_id);
    }, [showModal]);

    return (
        <>
            {/* Card */}
            <div
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                   shadow-lg rounded overflow-hidden hover:scale-105 transform transition 
                   cursor-pointer"
                onClick={() => setShowModal(true)}
            >
                <img
                    src={anime?.images?.jpg?.image_url}
                    alt={anime?.title || "Unknown"}
                    className="w-full h-60 object-cover"
                />
                <div className="p-4">
                    <h2 className="font-bold text-lg">{anime.title}</h2>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 
                          p-6 rounded max-w-2xl w-full relative shadow-2xl border border-gray-600/40">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-2 text-2xl font-bold text-gray-600 dark:text-gray-300 
                         hover:text-black dark:hover:text-white"
                        >
                            &times;
                        </button>

                        {!loading && details ? (
                            <>
                                <h2 className="text-2xl font-bold mb-4">{details.title}</h2>
                                <p className="text-sm mb-4 leading-relaxed">
                                    {details.synopsis || "No synopsis available."}
                                </p>

                                {details.trailer?.youtube_id ? (
                                    <iframe
                                        width="100%"
                                        height="315"
                                        src={`https://www.youtube.com/embed/${details.trailer.youtube_id}`}
                                        title="Anime Trailer"
                                        allowFullScreen
                                        className="rounded-md shadow-md"
                                    ></iframe>
                                ) : (
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Trailer not available
                                    </p>
                                )}
                            </>
                        ) : (
                            <p className="text-center text-gray-700 dark:text-gray-300">
                                Loading details...
                            </p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default AnimeCard;
