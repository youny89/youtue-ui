import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "colne-5e08a.firebaseapp.com",
  projectId: "colne-5e08a",
  storageBucket: "colne-5e08a.appspot.com",
  messagingSenderId: "666256279651",
  appId: "1:666256279651:web:12c3d66f6c9be4fe58d056",
  measurementId: "G-7KZN4W8JP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();
export default app;
