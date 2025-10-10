import React from "react";
import { NavLink } from "react-router-dom";
import logoGrey from "../../assets/logo-grey.png";

const navItems = [
    { label: "AboutUs", path: "/about-us" },
    { label: "Education", path: "/education" },
    { label: "Contact", path: "/contact" },
];

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-10 py-4 
                    bg-gradient-to-r from-teal-500 via-sky-400 to-blue-500
                    shadow-lg shadow-blue-300/50 text-white">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <NavLink to="/">
                    <img
                        src={logoGrey}
                        alt="Logo"
                        className="w-17 h-14 cursor-pointer transition-transform duration-300 hover:scale-105 hover:brightness-110"
                    />
                </NavLink>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
                {navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive
                                ? "text-white font-semibold underline transition-all duration-300"
                                : "text-gray-200 hover:text-white hover:underline transition-colors duration-300"
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
