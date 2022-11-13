import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./FirebaseInit";


const DbInitialization = () => {
  initializeApp(firebaseConfig);
};

export default DbInitialization;

//init firestore

export const db = getFirestore(initializeApp(firebaseConfig));
