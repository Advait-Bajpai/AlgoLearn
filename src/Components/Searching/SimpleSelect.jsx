import { useState } from "react";

export default function SimpleSelect({ changeAlgorithm }) {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    const val = parseInt(e.target.value);
    setValue(val);
    changeAlgorithm(val);
  };

  return (
    <select
      className="px-3 py-2 bg-slate-900 text-white rounded-md border border-slate-600 
                 focus:ring-2 focus:ring-teal-300 outline-none"
      value={value}
      onChange={handleChange}
    >
      <option value={0}>Linear Search</option>
      <option value={1}>Binary Search</option>
    </select>
  );
}
