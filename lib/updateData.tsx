import { db } from "@/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  doc,
  updateDoc,
} from "firebase/firestore";

const adsRef = collection(db, "ads");

// Function to update a specific field in a document
export const updateAdField = async (id: string, newValue: any) => {
  const adDocRef = doc(db, "ads", id);

  try {
    // Update the specified field in the document
    await updateDoc(adDocRef, {
      views: newValue,
    });

    console.log("Field updated successfully");
  } catch (error) {
    console.error("Error updating field: ", error);
  }
};
