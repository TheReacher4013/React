import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="ml-4 px-3 py-1 bg-yellow-400  text-black rounded-md transition"
        >
            {dark ? "Light Mode" : "Dark Mode"}
        </button>
    );
};

export default DarkModeToggle;
