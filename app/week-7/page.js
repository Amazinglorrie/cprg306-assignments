"use client";

import { useState } from "react";
import GroceryItemList from "./GroceryItemList";
import NewGroceryItem from "./NewGroceryItem";
import itemsInfo from "./grocery-items.json";

export default function Page() {
  const [items, setItems] = useState(itemsInfo);

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100 px-4 py-10">
      <div className="max-w-md mx-auto flex flex-col gap-8">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50">
          Shopping List
        </h1>
        <NewGroceryItem onAddItem={handleAddItem} />
        <GroceryItemList items={items} />
      </div>
    </main>
  );
}
