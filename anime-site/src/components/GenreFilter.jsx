import React, { useState } from "react";

const genresList = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Fantasy",
    "Magic",
    "Romance",
    "Sci-Fi",
    "Slice of Life",
];

const GenreFilter = ({ onSelect }) => {
    const [selectedGenre, setSelectedGenre] = useState(null);

    const handleSelect = (genre) => {
        setSelectedGenre(genre);
        onSelect(genre);
    };

    return (
        <div className="flex flex-wrap gap-3 justify-center mt-6">
            {genresList.map((genre, index) => (
                <button
                    key={index}
                    onClick={() => handleSelect(genre)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
            ${selectedGenre === genre
                            ? "bg-amber-400 text-white shadow-md scale-105"
                            : "bg-gray-800 text-gray-300 hover:bg-amber-400 hover:text-white"
                        }`}
                >
                    {genre}
                </button>
            ))}
        </div>
    );
};

export default GenreFilter;

