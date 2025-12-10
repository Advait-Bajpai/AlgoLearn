import React from "react";
import { Link } from "react-router-dom";
import About from "../About/About";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-white/10 border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-white">
          Algorithm <span className="text-teal-400">Visualizer</span>
        </Link>

        <div className="flex items-center space-x-6 text-white">
          <Link to="/about" className="hover:text-teal-300 transition-colors">
            About
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
