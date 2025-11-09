import React from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
    return (
        <nav className="bg-black text-white flex flex-col sm:flex-row justify-between items-center px-6 py-3 shadow-md sticky top-0 z-50 mb-6">
            {/* Logo */}
            <h1 className="font-extrabold text-2xl tracking-wide cursor-pointer mb-2 sm:mb-0">
                Anime<span className="text-red-500">World</span>
            </h1>

            {/* Navigation Links */}
            <div className="flex items-center gap-4 sm:gap-6">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `hover:text-red-400 transition ${isActive ? "text-amber-200 underline underline-offset-4" : ""}`
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/top"
                    className={({ isActive }) =>
                        `hover:text-red-400 transition ${isActive ? "text-amber-200 underline underline-offset-4" : ""}`
                    }
                >
                    Top Anime
                </NavLink>

                {/* Dark Mode Toggle */}
                <div className="ml-2 sm:ml-4">
                    <DarkModeToggle />
                </div>
            </div>
        </nav>
    );
 };

 export default Navbar;