import { db } from "../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


// -----------------------------------------------------
// Get all items for a specific user
// -----------------------------------------------------
export async function getItems(userId) {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const q = query(itemsRef);

    const snapshot = await getDocs(q);

    const items = [];
    snapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}

// -----------------------------------------------------
// Add a new item for a specific user
// -----------------------------------------------------
export async function addItem(userId, item) {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
}