"use client";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import ItemList from "./item-list";
import NewItem from "./new-item";
import { getItems, addItem } from "../_services/shopping-list-service";
import MealIdeas from "./meal-ideas";

//Clean ingredient names (emoji, commas, weight)
function cleanIngredient(str) {
  let name = str.split(",")[0].trim(); //comma
  name = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF]|[\u2011-\u26FF]|[\uFE00-\uFE0F]|\u24C2|\uD83D[\uDC00-\uDE4F])/g, ""); //emojis
  return name.replace(/\s+/g, " ").trim(); //spaces
}

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  //user auth
  const { user } = useUserAuth();
  const router = useRouter();


  //if not logged in, redirect to landing page
  useEffect(() => {
    if (!user) router.push("/week-10");
  }, [user, router]);


  //load shopping list
  const loadItems = async () => {
    if (!user) return;
      const list = await getItems(user.uid);
      setItems(list);
    }

  //load items once user logs in
  useEffect(() => {
    if (user) loadItems();
  }, [user]);

  if (!user) {
    return (
      <main className="flex justify-center items-center h-screen text-gray-700">
        <p>Redirecting to login...</p>
      </main>
    );
  }

  // add item to Firestore and update state
  const handleAddItem = async (item) => {
    const id = await addItem(user.uid, item);
    const newItem = { ...item, id };
    setItems((prev) => [...prev, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleaned = cleanIngredient(item.name);
    setSelectedItemName(cleaned);
  };

  return (
    <main className="flex flex-row items-start justify-center gap-8">
  {/*Shopping List*/}
  <div className="space-y-4 p-4 rounded-lg">
    <h1 className="p-2 m-3 text-center text-3xl font-bold">Shopping List & Meal Ideas</h1>
    <NewItem onAddItem={handleAddItem} />
    <ItemList items={items} onItemSelect={handleItemSelect} />
  </div>

  {/*Meal Deal*/}
  <div className="space-y-4 p-4 rounded-lg">
    <MealIdeas ingredient={selectedItemName} />
  </div>
    </main>
  );
}
