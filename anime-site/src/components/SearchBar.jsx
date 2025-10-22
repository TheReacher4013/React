import React, { useState, useRef } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const timeoutRef = useRef(null); // useRef for debounce

    // 🔹 Called on every key press
    const handleChange = (e) => {
        setQuery(e.target.value);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            onSearch(e.target.value); // call parent after 600ms
        }, 600);
    };

    // 🔹 Optional: Search on button click or Enter key
    const handleSubmit = (e) => {
        e.preventDefault();
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-6 w-full">
            <input
                type="text"
                placeholder="Search Anime..."
                value={query}
                onChange={handleChange}
                className="flex-grow p-2 border border-gray-300 rounded-l"
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700 transition"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
