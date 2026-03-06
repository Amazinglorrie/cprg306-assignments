"use client";

import { useState } from "react";
import GroceryItem from "./GroceryItem";

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
    <section className="flex flex-col gap-4">
    
      <div className="flex items-center gap-2">
        <p className="text-sm text-gray-400 font-medium">Sort by:</p>
        {buttons.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setSortBy(value)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-200 ${
              sortBy === value
                ? "bg-emerald-500 text-gray-900 shadow-md shadow-emerald-900/30"
                : "bg-gray-700 text-gray-400 hover:bg-zinc-600 hover:text-zinc-100"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Empty state */}
      {items.length === 0 ? (
        <p className="py-10 text-center text-sm text-zinc-500 italic">
          Your list is empty — add an item above!
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {sorted.map((item) => (
            <GroceryItem
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