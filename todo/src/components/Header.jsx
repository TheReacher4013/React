import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-amber-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <div className="w-1/3"></div>
        
        <h1 className="w-1/3 text-center text-2xl font-bold text-teal-800">
          Todo App
        </h1>

        <div className="w-1/3 flex justify-end gap-4">
          <NavLink
            to="/login"
            className="px-4 py-2 bg-teal-800 text-white rounded-lg hover:bg-purple-400 transition"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="px-4 py-2 bg-teal-800 text-white rounded-lg hover:bg-purple-400 transition"
          >
            Register
          </NavLink>
        </div>

      </div>
    </header>
  );
};

export default Header;


