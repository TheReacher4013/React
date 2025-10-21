import React, { useEffect, useState } from "react";

const GenreFilter = ({ onSelect }) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/genres/anime")
            .then(res => res.json())
            .then(data => setGenres(data.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="flex flex-wrap gap-2 mb-6">
            {genres.map(genre => (
                <button
                    key={genre.mal_id}
                    onClick={() => onSelect(genre.name)}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-blue-500 hover:text-white transition"
                >
                    {genre.name}
                </button>
            ))}
        </div>
    );
};

export default GenreFilter;
