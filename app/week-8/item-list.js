"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items]; // copy prop

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  // button styles
  const activeClass = "bg-blue-700 text-white border-2 border-blue-900";
  const inactiveClass = "bg-gray-300 text-black";

  return (
    <main className="flex flex-col items-center">
      <div className="flex gap-2 mb-4">
        Sort by:
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded-lg ${
            sortBy === "name" ? activeClass : inactiveClass
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded-lg ${
            sortBy === "category" ? activeClass : inactiveClass
          }`}
        >
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </main>
  );
}
