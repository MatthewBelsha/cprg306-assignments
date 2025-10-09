"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  // Increment function (max 20)
  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  // Decrement function (min 1)
  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // needs a input box with a name , quantity changer and a dropdown with the grocery options
  // to add new items and use an alert to notify the user that the item has been added to the list
  //reset the quantity to 1 after adding the item
  // the alert should say "Added [quantity] of [name] [category]"
  // the input box should have a placeholder "Item Name"
  const [name, setName] = useState("");

  const dropdownOptions = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other",
  ];

  return (
    <div className="flex justify-center">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 rounded-lg px-4 py-2"
        />
        <button
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          onClick={() => alert(`Added ${quantity} of ${name} to the list!`)}
        >
          Add Item
        </button>
        <button
          className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition"
          onClick={decrement}
        >
          -
        </button>
        <span className="w-12 h-12 flex items-center justify-center border-4 border-red-600 rounded-lg font-semibold text-red-600 bg-white">
          {quantity}
        </span>
        <button
          className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition"
          onClick={increment}
        >
          +
        </button>
        <select className="border-2 rounded-lg px-4 py-2">
          {dropdownOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
