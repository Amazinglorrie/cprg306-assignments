"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);
    alert(
      `Added: ${item.name}, Quantity: ${item.quantity}, Category: ${item.category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg p-8 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Week 5 — New Item</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Item Name */}
        <div>
          <label className="block text-base font-medium mb-2 text-gray-700">
            Item Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="e.g., milk, 4 L"
            className="w-full p-3 text-gray-800 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-base font-medium mb-2 text-gray-700">
            Quantity (1–20)
          </label>
          <div className="mb-3">
            <span className="text-sm text-gray-600">Current: </span>
            <span className="text-base font-semibold text-gray-800">{quantity}</span>
          </div>
          <div className="flex gap-3 mb-2">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity <= 1}
              className="w-12 h-12 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed text-xl font-medium text-gray-700"
            >
              −
            </button>
            <button
              type="button"
              onClick={increment}
              disabled={quantity >= 20}
              className="w-12 h-12 rounded-md bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xl font-medium"
            >
              +
            </button>
          </div>
          <p className="text-sm text-gray-600">Allowed range: 1–20</p>
        </div>

        {/* Category */}
        <div>
          <label className="block text-base font-medium mb-2 text-gray-700">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 text-gray-800 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>


        <button
          type="submit"
          className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}