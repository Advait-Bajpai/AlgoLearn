import React, { useState, useEffect } from "react";

export default function Number({ value, index, setArray, color }) {
  const [number, setNumber] = useState(value);

  const colors = ["#40514e", "#2f89fc", "#30e3ca", "#ff304f"];

  useEffect(() => {
    setNumber(value);
  }, [value]);

  const handleChange = (e) => {
    let val = e.target.value;

    if (val === "") {
      setNumber("");
      setArray(0, index); // or skip updating parent here if you prefer
      return;
    }

    let parsed = parseInt(val, 10);
    if (isNaN(parsed)) parsed = 0;

    // optional: clamp
    if (parsed > 999) parsed = 999;
    if (parsed < 0) parsed = 0;

    setNumber(parsed);
    setArray(parsed, index);
  };

  return (
    <div
      className="number-capsule"
      style={{ background: colors[color] }}
    >
      <input
        className="number"
        type="number"
        value={number}
        onChange={handleChange}
      />
    </div>
  );
}
