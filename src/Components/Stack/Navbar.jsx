import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ push, pop, popAll }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    let val = e.target.value;

    if (val.trim() === "") {
      val = 0;
    } else {
      val = parseInt(val, 10);
      if (val > 999) val = 999;
      if (isNaN(val)) val = 0;
    }

    setValue(val);
  };

  const handlePush = () => {
    push(value);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: back + title */}
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-white text-xl font-bold hover:text-teal-300 transition"
          >
            ◀
          </Link>

          <h2 className="text-xl text-white font-semibold tracking-wide">
            Stack <span className="text-teal-400 font-bold">Visualizer</span>
          </h2>
        </div>

        {/* Right: input + buttons */}
        <div className="flex items-center space-x-4 text-white">
          <input
            id="stack-input"
            type="number"
            value={value}
            onChange={handleChange}
            placeholder="Enter a number"
            className="w-40 px-3 py-2 rounded-md bg-slate-900/60 border border-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <button
            className="px-4 py-2 rounded-md text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 transition"
            onClick={handlePush}
          >
            Push
          </button>

          <button
            className="px-4 py-2 rounded-md text-sm font-semibold bg-rose-500 hover:bg-rose-600 transition"
            onClick={pop}
          >
            Pop
          </button>

          <button
            className="px-4 py-2 rounded-md text-sm font-semibold bg-amber-500 hover:bg-amber-600 transition"
            onClick={popAll}
          >
            Pop All
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
