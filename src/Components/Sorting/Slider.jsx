import React from "react";

export default function Slider({ handleChange, type }) {
  const handleInput = (e) => {
    const value = parseInt(e.target.value);
    handleChange(value);
  };

  return (
    <div className="flex flex-col items-center mx-6 w-64">
      <span className="text-white font-semibold mb-2">
        {type === "Count" ? "Bar Count" : "Speed"}
      </span>

      <input
        type="range"
        min={type === "Count" ? 5 : 1}
        max={type === "Count" ? 30 : 5}
        step={type === "Count" ? 5 : 1}
        defaultValue={type === "Count" ? 10 : 1}
        onChange={handleInput}
        className="w-full accent-teal-400 cursor-pointer"
      />

      <div className="text-teal-300 font-bold mt-1 text-sm">
        {type === "Count" ? "5 - 30" : "1 - 5"}
      </div>
    </div>
  );
}
