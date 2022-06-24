import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBIoGhxqReRqfwxhW-ge6ZKCZ-dHiG8V20",
  authDomain: "meal-plan-generator-565a3.firebaseapp.com",
  databaseURL: "https://meal-plan-generator-565a3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "meal-plan-generator-565a3",
  storageBucket: "meal-plan-generator-565a3.appspot.com",
  messagingSenderId: "333122745299",
  appId: "1:333122745299:web:4f50c5dee2c7b42e2bf526"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);