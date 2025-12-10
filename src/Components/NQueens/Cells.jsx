import React from "react";
import Cell from "./Cell";
import "./style.css";

export default function Cells({ board }) {
  const size = board.length || 0;

  return (
    <div className="w-full flex justify-center">
      <div
        className="board"
        style={{ "--board-size": size }}
      >
        {board.flat().map((cell, index) => (
          <Cell key={index} cell={cell} />
        ))}
      </div>
    </div>
  );
}
