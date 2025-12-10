import { useState } from "react";
import SimpleSelect from "./SimpleSelect";
import { Link } from "react-router-dom";

export default function Navbar({
  visualize,
  addRow,
  changeAlgorithm,
  algorithm,
  changeQuantum,
}) {
  const [quantum, setQuantum] = useState(1);

  const handleChangeAlgorithm = (value) => {
    changeAlgorithm(value);
  };

  const handleChangeQuantum = (e) => {
    let v = e.target.value;
    if (v === "") {
      setQuantum(1);
      changeQuantum(1);
      return;
    }
    const q = parseInt(v);
    if (!isNaN(q)) {
      setQuantum(q);
      changeQuantum(q);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-white/10 px-6 h-20 flex items-center justify-between">

      {/* Back + Title */}
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white text-xl font-bold hover:text-indigo-300">
          ◀
        </Link>

        <h1 className="text-white text-xl font-semibold tracking-wide">
          Scheduling <span className="text-indigo-400 font-bold">Visualizer</span>
        </h1>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-4">

        <SimpleSelect changeAlgorithm={handleChangeAlgorithm} />

        <button
          className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md"
          onClick={visualize}
        >
          Generate Gantt Chart
        </button>

        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          onClick={addRow}
        >
          Add Process
        </button>

        {/* Quantum Input */}
        <div className="flex items-center space-x-2">
          <span className="text-white">Quantum:</span>
          <input
            className="w-20 px-2 py-1 bg-slate-800 border border-slate-600 text-white rounded-md"
            value={quantum}
            onChange={handleChangeQuantum}
            disabled={algorithm !== 3}
          />
        </div>
      </div>
    </nav>
  );
}
