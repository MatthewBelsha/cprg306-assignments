"use client";
import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...itemsData];
    if (sortBy === "name") {
    sortedItems.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    });
  }

  // Use normal if statements for button classes
  let nameButtonClass = "px-3 py-1 rounded-lg ";
  if (sortBy === "name") {
    nameButtonClass += "bg-red-500 text-white border-3 border-red-700";
  } else {
    nameButtonClass += "bg-gray-300 border-3 border-grey-400";
  }

  let categoryButtonClass = "px-3 py-1 rounded-lg ";
  if (sortBy === "category") {
    categoryButtonClass += "bg-red-500 text-white border-3 border-red-700";
  } else {
    categoryButtonClass += "bg-gray-300 border-3 border-grey-400";
  }

  

  return (
    <main className="flex flex-col items-center">
      <div className="flex gap-2 mb-4">
        <button onClick={() => setSortBy("name")} 
        className={nameButtonClass}>
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={categoryButtonClass}>
          Sort by Category
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

