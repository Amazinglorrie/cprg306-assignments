"use client";

import { useState } from "react";

const CATEGORIES = [
  "Bakery",
  "Canned Goods",
  "Dairy",
  "Dry Goods",
  "Frozen",
  "Household",
  "Meat",
  "Produce",
  "Snacks",
  "Other",
];

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    const id = crypto.randomUUID();
    const item = { id, name: name.trim(), quantity, category };
    onAddItem(item);

    // reset form
    setName("");
    setQuantity(1);
    setCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="item-name">Item name</label>
          <input
            id="item-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}

            required
          />
        </div>

        <div className="form-group form-group--sm">
          <label htmlFor="item-qty">Qty</label>
          <input
            id="item-qty"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="item-cat">Category</label>
          <select
            id="item-cat"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="add-btn">
          Add
        </button>
      </div>
    </form>
  );
}