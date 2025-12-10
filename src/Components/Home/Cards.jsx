import React, { useEffect, useState } from "react";
import ImgMediaCard from "./Card/Card";
import { getDetails } from "./carddetails";

export default function Cards() {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setCards(getDetails());
  }, []);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="cards-container py-12 bg-slate-900">
      {/* Search bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search"
          value={filter}
          onChange={handleChange}
          className="w-full max-w-md px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      {/* Cards grid */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {filteredCards.map((card) => (
          <ImgMediaCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
