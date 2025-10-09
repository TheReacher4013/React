import React from "react";
import { NavLink } from "react-router-dom";
import logoGrey from "../../assets/logo-grey.png";

const navItems = [
    { label: "AboutUs", path: "/about-us" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact", path: "/contact" },
];

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-md border-b border-amber-200">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <NavLink to="/">
                    <img
                        src={logoGrey}
                        alt="Logo"
                        className="w-17 h-14 cursor-pointer hover:opacity-80 transition"
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
                                ? "text-red-800 underline font-bold"
                                : "text-blue-800 hover:text-red-800 hover:underline transition"
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
