import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ImgMediaCard({ card }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (e) => {
    e.preventDefault(); // so click on icon doesn’t trigger navigation
    setExpanded((prev) => !prev);
  };

  return (
    <div className="transition-transform duration-200 hover:scale-105">
      <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg w-[320px]">
        {/* Image + link */}
        <Link to={card.route}>
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-48 object-cover"
          />
        </Link>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900">
          <h3 className="text-white font-semibold text-lg">{card.title}</h3>

          <button
            onClick={handleExpandClick}
            className="text-slate-300 hover:text-teal-300 transition-transform"
          >
            <span
              className={`inline-block transform transition-transform ${
                expanded ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </button>
        </div>

        {/* Collapsible description */}
        {expanded && (
          <div className="px-4 py-3 bg-slate-900 border-t border-slate-700">
            <p className="text-slate-300 text-sm">{card.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
