"use client";

import { useState } from "react";

const CATEGORIES = [
  "Produce",
  "Dairy",
  "Bakery",
  "Meat",
  "Frozen",
  "Canned Goods",
  "Dry Goods",
  "Beverages",
  "Snacks",
  "Household",
  "Other",
];

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState(CATEGORIES[0]);

  function handleSubmit() {
    if (!name.trim()) return;

    onAddItem({
      id: Math.random().toString(36).slice(2, 9),
      name,
      quantity,
      category,
    });

    setName("");
    setQuantity(1);
    setCategory(CATEGORIES[0]);
  }

  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const increment = () => setQuantity((q) => Math.min(20, q + 1));

  return (
    <div className="rounded-2xl bg-zinc-800/80 border border-zinc-700/60 p-5 flex flex-col gap-4 shadow-xl shadow-black/30">
     
      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-zinc-400 uppercase tracking-widest font-medium">
          Item name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=" "
          className="bg-zinc-900/80 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-100 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/30 transition-all"
        />
      </div>

      {/* Quantity */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-zinc-400 uppercase tracking-widest font-medium">
          Quantity
          <p className="ml-2 normal-case text-zinc-600">(1–20)</p>
        </label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity <= 1}
            className="w-9 h-9 rounded-lg bg-zinc-700 hover:bg-zinc-600 disabled:opacity-40 disabled:cursor-not-allowed text-zinc-100 text-lg font-bold transition-colors"
          >
            −
          </button>
          <p className="w-6 text-center text-zinc-100 font-semibold tabular-nums">
            {quantity}
          </p>
          <button
            type="button"
            onClick={increment}
            disabled={quantity >= 20}
            className="w-9 h-9 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed text-zinc-900 text-lg font-bold transition-colors shadow-md shadow-emerald-900/30"
          >
            +
          </button>
        </div>
      </div>

     
      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-zinc-400 uppercase tracking-widest font-medium">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-zinc-900/80 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-100 text-sm focus:outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/30 transition-all appearance-none cursor-pointer"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!name.trim()}
        className="mt-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed text-zinc-900 font-bold text-sm uppercase tracking-widest transition-all duration-200 shadow-lg shadow-emerald-900/30 active:scale-[0.98]"
      >
        Add Item
      </button>
    </div>
  );
}