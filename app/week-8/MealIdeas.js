"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const results = await fetchMealIdeas(ingredient);
    setMeals(results);
  }

  useEffect(() => {
    if (ingredient) loadMealIdeas();
  }, [ingredient]);

  return (
    <section className="rounded-2xl bg-zinc-800/80 border border-zinc-700/60 p-5 flex flex-col gap-4 shadow-xl shadow-black/30">
      <h2 className="text-lg font-bold tracking-tight text-zinc-50">
        Meal Ideas{" "}
        {ingredient && (
          <span className="text-emerald-400 capitalize">({ingredient})</span>
        )}
      </h2>

      {!ingredient ? (
        <p className="text-sm text-zinc-500 italic">
          Choose an item to see ideas...
        </p>
      ) : meals.length === 0 ? (
        <p className="text-sm text-zinc-500 italic">
          No meal ideas found for "{ingredient}".
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-700/50"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <p className="text-sm text-zinc-100 font-medium">{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}