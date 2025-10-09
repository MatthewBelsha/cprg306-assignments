"use client";

import { useState } from "react";

export default function NewItem() {
  // needs a input box with a name , quantity changer and a dropdown with the grocery options
  // to add new items and use an alert to notify the user that the item has been added to the list
  //reset the quantity to 1 after adding the item
  // the alert should say "Added [quantity] of [name] [category]"
  // the input box should have a placeholder "Item Name"
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Increment function (max 20)
  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  // Decrement function (min 1)
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  //dropdown menu for item category
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

  // form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Item Added: ${name}, Quantity: ${quantity} , Category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("Produce");
    //reset the form fields
    e.target.reset();
  };

  return (
    <div className="mx-auto flex justify-center: space-between text-blue-800 bg-[#cae8ff] gap-3 flex-col w-95 p-4 rounded-lg">
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-2 rounded-lg px-4 py-2"
      />

      <div className="flex space-x-2 justify-center">
        <button
          className="bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-800 transition"
          onClick={decrement}
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
          className="bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-800 transition"
          onClick={increment}
          //when quantity is 20 grey out the button
          disabled={quantity === 20}
          style={{ opacity: quantity === 20 ? 0.5 : 1 }}
        >
          +
        </button>

        <select
          className="border-2 rounded-lg px-4 py-2"
          // map function to iterate through the options in for the dropdown menu
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {dropdownOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button
        // when clicked alert the user with the item name, quantity and category
        className="bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800 transition"
        onClick={(event) => handleSubmit(event)}
      >
        Add Item
      </button>
    </div>
  );
}
