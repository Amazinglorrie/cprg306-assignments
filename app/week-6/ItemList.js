"use client";

import { useState } from "react";
import Item from "./Items";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sorted = [...items].sort((a, b) =>
    a[sortBy].toString().localeCompare(b[sortBy].toString())
  );

  const buttons = [
    { label: "Name", value: "name" },
    { label: "Category", value: "category" },
  ];

  return (
    <section className="item-list-section">
      <div className="sort-bar">
        <span className="sort-label">Sort by:</span>
        {buttons.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setSortBy(value)}
            className={`sort-btn${sortBy === value ? " sort-btn--active" : ""}`}
          >
            {label}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <p className="empty-msg">Your list is empty — add an item above!</p>
      ) : (
        <ul className="item-cards">
          {sorted.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </section>
  );
}