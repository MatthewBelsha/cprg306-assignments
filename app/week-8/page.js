"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  // item handler
  const handleAddItem = (newItem) => {
    //spread operator to add new item to existing items
    //reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="p-2 m-3 text-center text-3xl font-bold">Shopping List & Meal Ideas</h1>

      {/*passes on add item*/}
      <div>
        <NewItem onAddItem={handleAddItem} />
      </div>

      {/*current items*/}
      <div className="space-y-4 p-4 rounded-lg">
        <ItemList items={items} />
      </div>
      <div className="space-y-4 p-4 rounded-lg">
        <MealIdeas />
      </div>
    </main>
  );
}
