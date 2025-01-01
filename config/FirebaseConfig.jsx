// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "marketplace-d4a8c.firebaseapp.com",
  projectId: "marketplace-d4a8c",
  storageBucket: "marketplace-d4a8c.firebasestorage.app",
  messagingSenderId: "276345605648",
  appId: "1:276345605648:web:3b2b233547dc981d510495",
  measurementId: "G-P9H109CX0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export { auth, createUserWithEmailAndPassword };
