"use client";
import { useState, useEffect } from "react";

//API fetching meal ideas
async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const mealData = await fetchMealIdeas(ingredient);
    setMeals(mealData);
  }

  // Fetch meal ideas when ingredient changes
  useEffect(() => {
  async function loadMealIdeas() {
    const mealData = await fetchMealIdeas(ingredient);
    setMeals(mealData);
  }
  loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-orange-100 p-5 rounded-lg w-96">
      <h2 className="text-xl font-bold mb-3">Meal ideas for "{ingredient && `${ingredient}`}"</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} className="mb-3 flex items-center">
            <img src={meal.strMealThumb} alt={meal.strMeal} width={100} className="inline mr-2 rounded" />
            <span>{meal.strMeal}</span>
          </li>
        ))}
        {meals.length === 0 && <p>No meals found.</p>}
      </ul>
    </div>
  );
}