import React, { useState, useEffect } from "react";
import "./Bar.css";

const Bars = ({ index, length, color, changeArray }) => {
  const [len, setLen] = useState(length);

  useEffect(() => {
    setLen(length);
  }, [length]);

  const colors = ["#40514e", "#2f89fc", "#30e3ca", "#ff304f"];

  const barStyle = {
    background: colors[color],
    height: `${length}px`,
    transition: "height 0.15s ease",
  };

  const handleChange = (e) => {
    const val = Math.min(200, Math.max(0, parseInt(e.target.value) || 0));
    setLen(val);
    changeArray(index, val);
  };

  return (
    <div className="bar" style={barStyle}>
      <input
        type="number"
        value={len}
        onChange={handleChange}
        className="text"
      />
    </div>
  );
};

export default Bars;
