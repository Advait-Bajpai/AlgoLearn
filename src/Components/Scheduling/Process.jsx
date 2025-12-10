import React, { useState } from "react";

export default function Process({
  index,
  processName,
  arrivalTime,
  executionTime,
  serviceTime,
  priority,
  handleDelete,
  changePriority,
}) {
  const [pri, setPri] = useState(priority ?? 0);

  const handlePriorityChange = (e) => {
    const val = parseInt(e.target.value) || 0;
    setPri(val);
    changePriority(index, val);
  };

  return (
    <tr className="border-b border-slate-700 hover:bg-slate-800/40 transition">
      <td className="px-4 py-2">{processName}</td>
      <td className="px-4 py-2">{arrivalTime}</td>
      <td className="px-4 py-2">{executionTime}</td>
      <td className="px-4 py-2">{serviceTime}</td>

      {priority !== null && (
        <td className="px-4 py-2">
          <input
            type="number"
            value={pri}
            onChange={handlePriorityChange}
            className="w-20 px-2 py-1 bg-slate-900 border border-slate-600 rounded-md text-white text-center focus:ring-2 focus:ring-teal-400 outline-none"
          />
        </td>
      )}

      <td className="px-4 py-2">
        <button
          onClick={() => handleDelete(index)}
          className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
