import React, { useState } from "react";

export default function Slider({ handleChange, type }) {
  const isCount = type === "Count";
  const [value, setValue] = useState(isCount ? 10 : 1);

  const config = isCount
    ? { min: 10, max: 50, step: 5 }
    : { min: 1, max: 5, step: 1 };

  const onSlide = (e) => {
    const val = parseInt(e.target.value, 10);
    setValue(val);
    handleChange(val);
  };

  return (
    <div className="inline-flex flex-col gap-2 px-4 py-3 rounded-2xl bg-slate-900/70 border border-slate-700/60 shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-between w-full">
        <span className="text-xs uppercase tracking-wide text-slate-300">
          {isCount ? "Array Size" : "Speed"}
        </span>
        <span className="text-sm font-semibold text-teal-300">
          {value}
        </span>
      </div>

      <input
        type="range"
        min={config.min}
        max={config.max}
        step={config.step}
        value={value}
        onChange={onSlide}
        className="w-48 accent-teal-400 cursor-pointer"
      />

      <div className="flex justify-between text-[10px] text-slate-400 w-full">
        <span>{config.min}</span>
        <span>{config.max}</span>
      </div>
    </div>
  );
}
