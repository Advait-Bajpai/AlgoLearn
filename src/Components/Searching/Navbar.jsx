import { Link } from "react-router-dom";
import SimpleSelect from "./SimpleSelect";

export default function Navbar({ startSearch, changeAlgorithm, reset, randomize }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Back + Title */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/" 
            className="text-white text-xl font-bold hover:text-teal-300 transition"
          >
            ◀
          </Link>

          <h2 className="text-xl text-white font-semibold tracking-wide">
            Searching <span className="text-teal-400 font-bold">Visualizer</span>
          </h2>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-4">

          <SimpleSelect changeAlgorithm={changeAlgorithm} />

          <button
            className="px-4 py-2 rounded-md text-sm bg-emerald-500 hover:bg-emerald-600 transition text-white"
            onClick={startSearch}
          >
            Visualize
          </button>

          <button
            className="px-4 py-2 rounded-md text-sm bg-blue-500 hover:bg-blue-600 transition text-white"
            onClick={reset}
          >
            Reset
          </button>

          <button
            className="px-4 py-2 rounded-md text-sm bg-amber-500 hover:bg-amber-600 transition text-white"
            onClick={randomize}
          >
            Randomize
          </button>
        </div>
      </div>
    </nav>
  );
}
