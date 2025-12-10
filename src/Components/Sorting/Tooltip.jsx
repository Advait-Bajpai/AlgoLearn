import React from "react";

const getTooltip = (algorithm) => {
  switch (algorithm) {
    case 0:
      return (
        <>
          <h3 className="font-bold mb-1">Bubble Sort</h3>
          <p className="text-sm leading-tight">
            Repeatedly compares adjacent elements and swaps them if needed.
            Largest elements move to the end each pass.
          </p>
          <p className="mt-2 text-sm font-semibold">Time: O(n²)</p>
        </>
      );
    case 1:
      return (
        <>
          <h3 className="font-bold mb-1">Selection Sort</h3>
          <p className="text-sm">Repeatedly selects smallest element and places it toward front.</p>
          <p className="mt-2 text-sm font-semibold">Time: O(n²)</p>
        </>
      );
    case 2:
      return (
        <>
          <h3 className="font-bold mb-1">Insertion Sort</h3>
          <p className="text-sm">Builds sorted array by inserting elements into correct position.</p>
          <p className="mt-2 text-sm font-semibold">Time: O(n²)</p>
        </>
      );
    case 3:
      return (
        <>
          <h3 className="font-bold mb-1">Merge Sort</h3>
          <p className="text-sm">Divide-and-Conquer, splits, sorts, and merges.</p>
          <p className="mt-2 text-sm font-semibold">Time: O(n log n)</p>
        </>
      );
    case 4:
      return (
        <>
          <h3 className="font-bold mb-1">Quick Sort</h3>
          <p className="text-sm">Uses pivot to partition smaller and larger values.</p>
          <p className="mt-2 text-sm font-semibold">Avg: O(n log n)</p>
        </>
      );
    default:
      return <p>No data</p>;
  }
};

export default function InfoTooltip({ algorithm }) {
  return (
    <div className="relative group inline-block">
      {/* icon button */}
      <button className="text-white text-xl font-bold bg-indigo-600 hover:bg-indigo-700 rounded-full w-7 h-7 flex items-center justify-center transition">
        i
      </button>

      {/* Tooltip bubble */}
      <div className="absolute hidden group-hover:block w-72 bg-white text-black p-4 rounded-lg shadow-lg border border-gray-300 left-1/2 -translate-x-1/2 mt-2 z-50">
        {getTooltip(algorithm)}
      </div>
    </div>
  );
}
