import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

//retrieve all items for a user
export async function getItems(userId) {
  if (!userId) return [];

  const items = [];

  // Reference: users/{userId}/items
  const itemsRef = collection(db, "users", userId, "items");
  const q = query(itemsRef);

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return items;
}


//add a new item for a user
export async function addItem(userId, item) {
  if (!userId) return null;

  const itemsRef = collection(db, "users", userId, "items");

  const docRef = await addDoc(itemsRef, item);

  return docRef.id;
}