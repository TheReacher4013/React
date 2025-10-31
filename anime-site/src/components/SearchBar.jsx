import React, { useState, useRef } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const timeoutRef = useRef(null);

    const handleChange = (e) => {
        setQuery(e.target.value);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            onSearch(e.target.value);
        }, 600);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        onSearch(query);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex mb-6 w-full justify-center items-center space-x-2"
        >
            <input
                type="text"
                placeholder="Search Anime..."
                value={query}
                onChange={handleChange}
                className="flex-grow max-w-md p-2 border border-gray-500 rounded bg-gray-800 text-yellow-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
                type="submit"
                className="bg-amber-400 text-white px-4 py-2 rounded hover:bg-fuchsia-600 transition"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
