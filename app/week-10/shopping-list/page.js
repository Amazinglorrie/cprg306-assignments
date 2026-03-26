"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";

import GroceryItemList from "./GroceryItemList";
import NewGroceryItem from "./NewGroceryItem";
import MealIdeas from "./MealIdeas";

import { getItems, addItem } from "../../_services/shopping-list-service";
// If you add delete later:
// import { deleteItem } from "../../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // -----------------------------------------------------
  // Redirect if not logged in
  // -----------------------------------------------------
  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user]);

  if (!user) return null;

  // -----------------------------------------------------
  // Load items from Firestore
  // -----------------------------------------------------
  async function loadItems() {
    const data = await getItems(user.uid);
    setItems(data);
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  // -----------------------------------------------------
  // Add item to Firestore + UI
  // -----------------------------------------------------
  async function handleAddItem(newItem) {
    const id = await addItem(user.uid, newItem);
    const itemWithId = { id, ...newItem };
    setItems((prev) => [...prev, itemWithId]);
  }

  // -----------------------------------------------------
  // Handle selecting an item for Meal Ideas
  // -----------------------------------------------------
  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/\p{Emoji}/gu, "")
      .trim();

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100 px-4 py-10">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-50">
          Shopping List + Meal Ideas
        </h1>

        <div className="flex gap-8 items-start">
          {/* Left side — list */}
          <div className="flex flex-col gap-6 flex-1">
            <NewGroceryItem onAddItem={handleAddItem} />
            <GroceryItemList items={items} onItemSelect={handleItemSelect} />
          </div>

          {/* Right side — meal ideas */}
          <div className="w-72 sticky top-10">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}