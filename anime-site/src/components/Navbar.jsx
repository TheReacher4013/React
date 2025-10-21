import React from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
    return (
        <nav className="bg-black text-white flex justify-between items-center p-4">
            <h1 className="font-bold text-xl">AnimeWorld</h1>
            <div className="flex gap-4">
                <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>Home</NavLink>
                <NavLink to="/top" className={({ isActive }) => isActive ? "underline" : ""}>Top Anime</NavLink>
                <DarkModeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
