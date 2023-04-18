// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBrp_xQ2_Reumaza4CVg9xsNI9F8eJmEg",
  authDomain: "diplom-c7f5a.firebaseapp.com",
  projectId: "diplom-c7f5a",
  storageBucket: "diplom-c7f5a.appspot.com",
  messagingSenderId: "702508752217",
  appId: "1:702508752217:web:e05f2c6b0d52ea3fb3c048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//получить список категорий (коллекция документов)
export const categoryCollection = collection(db, "categories");
export const productCollection = collection(db,'products')