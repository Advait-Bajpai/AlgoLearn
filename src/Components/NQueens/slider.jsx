import React, { useState } from "react";

export default function DiscreteSlider(props) {
  const {
    default: defaultValue = 0,
    min = 0,
    max = 100,
    step = 1,
    disable = false,
    title = "",
    onCountChange,
  } = props;

  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    const num = Number(e.target.value);
    setValue(num);
    if (onCountChange) {
      onCountChange(num);
    }
  };

  return (
    <div className="mx-4 pt-8 w-52">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        disabled={disable}
        value={value}
        onChange={handleChange}
        className="w-full accent-teal-400 cursor-pointer"
      />
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-slate-200">{title}</span>
        <span className="text-sm text-teal-300 font-semibold">{value}</span>
      </div>
    </div>
  );
}
