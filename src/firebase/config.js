import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAqAtdpti5h-ggDOV-D_fCQJIMhiD6tKcQ",
  authDomain: "notas-2556c.firebaseapp.com",
  projectId: "notas-2556c",
  storageBucket: "notas-2556c.appspot.com",
  messagingSenderId: "86483647618",
  appId: "1:86483647618:web:699275f5f54d7ce829089b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
