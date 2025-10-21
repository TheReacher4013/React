// src/components/SearchBar.jsx
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() !== "") {
            onSearch(query);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-6">
            <input
                type="text"
                placeholder="Search Anime..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-l"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 transition">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
