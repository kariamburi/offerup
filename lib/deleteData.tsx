import { db, storage } from "@/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

const adsRef = collection(db, "ads");

export const deleteDocById = async (id: string) => {
  const adsDocRef = doc(db, "ads", id);

  try {
    // Retrieve the document from the Firestore collection
    const adsDocSnap = await getDoc(adsDocRef);
    if (!adsDocSnap.exists()) {
      throw new Error("Document does not exist");
    }

    // Extract the URLs of the stored images from the document
    const imageData = adsDocSnap.data();
    const imageUrls: string[] = imageData.imagesUrl;

    // Delete the document from the Firestore collection
    await deleteDoc(adsDocRef);

    // Delete the stored images
    await Promise.all(
      imageUrls.map(async (url) => {
        const imageRef = ref(storage, url);
        await deleteObject(imageRef);
      })
    );

    return { error: false, message: "Successfully Deleted" };
  } catch (error: any) {
    return { error: true, message: error.message };
  }
};
