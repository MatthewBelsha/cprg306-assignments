"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  // Increment function (max 20)
  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  // Decrement function (min 1)
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex justify-center">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
      </div>
    </div>
  );
}
