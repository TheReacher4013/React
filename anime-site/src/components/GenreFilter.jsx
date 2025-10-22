import React from "react";

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
    return (
        <div className="flex flex-wrap gap-2">
            {genresList.map((genre, index) => (
                <button
                    key={index}
                    onClick={() => onSelect(genre)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                    {genre}
                </button>
            ))}
        </div>
    );
};

export default GenreFilter;
