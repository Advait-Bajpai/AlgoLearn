import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({
  comparisonMode,
  handleComparisonModeChange,
  handleChangeAlgorithm,
  handleStart,
  handleRandomize,
  handleReset,
}) => {
  const [algo1, setAlgo1] = useState(0);
  const [algo2, setAlgo2] = useState(0);

  const handleAlgoChange = (pos, value) => {
    if (pos === 0) setAlgo1(value);
    else setAlgo2(value);
    handleChangeAlgorithm(value, pos);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Left: Back + title */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white text-xl font-bold hover:text-teal-300 transition">
            ◀
          </Link>

          <h2 className="text-xl text-white font-semibold tracking-wide">
            Sorting <span className="text-teal-400 font-bold">Visualizer</span>
          </h2>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-4 text-white">

          {/* First algorithm selection */}
          <select
            className="px-2 py-1 bg-slate-900/70 text-white rounded-md border border-slate-600 focus:ring-2 focus:ring-teal-300"
            value={algo1}
            onChange={(e) => handleAlgoChange(0, parseInt(e.target.value))}
          >
            <option value={0}>Bubble Sort</option>
            <option value={1}>Selection Sort</option>
            <option value={2}>Insertion Sort</option>
            <option value={3}>Merge Sort</option>
            <option value={4}>Quick Sort</option>
          </select>

          {/* Tailwind toggle switch */}
          <label className="flex items-center space-x-2 cursor-pointer">
            <span className="text-sm">Compare</span>
            <div className="relative">
              <input
                type="checkbox"
                checked={comparisonMode}
                onChange={handleComparisonModeChange}
                className="sr-only peer"
              />
              <div className="w-12 h-6 bg-gray-500 rounded-full peer-checked:bg-teal-500 transition"></div>
              <div className="absolute w-5 h-5 bg-white rounded-full top-0.5 left-0.5 peer-checked:translate-x-6 transition"></div>
            </div>
          </label>

          {/* Second algorithm selection */}
          <select
            disabled={!comparisonMode}
            className="px-2 py-1 bg-slate-900/70 text-white rounded-md border border-slate-600 disabled:opacity-30 focus:ring-2 focus:ring-teal-300"
            value={algo2}
            onChange={(e) => handleAlgoChange(1, parseInt(e.target.value))}
          >
            <option value={0}>Bubble Sort</option>
            <option value={1}>Selection Sort</option>
            <option value={2}>Insertion Sort</option>
            <option value={3}>Merge Sort</option>
            <option value={4}>Quick Sort</option>
          </select>

          {/* Buttons */}
          <button
            className="px-4 py-2 rounded-md text-sm bg-emerald-500 hover:bg-emerald-600 transition"
            onClick={handleStart}
          >
            Visualize
          </button>

          <button
            className="px-4 py-2 rounded-md text-sm bg-blue-500 hover:bg-blue-600 transition"
            onClick={handleReset}
          >
            Reset
          </button>

          <button
            className="px-4 py-2 rounded-md text-sm bg-amber-500 hover:bg-amber-600 transition"
            onClick={handleRandomize}
          >
            Randomize
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
