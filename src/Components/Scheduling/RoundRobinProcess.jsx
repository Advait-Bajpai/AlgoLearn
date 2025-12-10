import React from "react";

export default function RoundRobinProcess({
  index,
  processName,
  arrivalTime,
  executionTime,
  handleDelete,
}) {
  return (
    <tr className="border-b border-slate-700 hover:bg-slate-800/40 transition">
      <td className="px-4 py-2">{processName}</td>
      <td className="px-4 py-2">{arrivalTime}</td>
      <td className="px-4 py-2">{executionTime}</td>

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
