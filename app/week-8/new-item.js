"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      quantity,
      category: category.toLowerCase(),
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex flex-col gap-3 bg-[#cae8ff] text-blue-800 w-96 p-4 rounded-lg"
    >
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-2 rounded-lg px-4 py-2"
      />

      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          className="bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg"
          //when quantity is 1 grey out the button
          disabled={quantity === 1}
          style={{ opacity: quantity === 1 ? 0.5 : 1 }}
        >
          -
        </button>
        <span className="w-16 h-12 flex items-center justify-center border-4 border-blue-700 rounded-lg font-semibold text-blue-700 bg-white">
          {quantity}
        </span>
        <button
          type="button"
          onClick={() => quantity < 20 && setQuantity(quantity + 1)}
          className="bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg"
          //when quantity is 1 grey out the button
          disabled={quantity === 20}
          style={{ opacity: quantity === 20 ? 0.5 : 1 }}
        >
          +
        </button>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border-2 rounded-lg px-4 py-2"
        >
          {dropdownOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Add Item
      </button>
    </form>
  );
}
