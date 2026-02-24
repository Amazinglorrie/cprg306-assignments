"use client";

import { useState } from "react";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import itemsInfo from "./Items.json";
import "./styles.css";

export default function Page() {
  const [items, setItems] = useState(itemsInfo);

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  return (
    <main className="sl-page">
      <div className="sl-inner">
        <h1 className="sl-title">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}