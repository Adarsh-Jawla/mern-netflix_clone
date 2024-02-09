// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdy6aUaCWeC3P49DbkAUhJW7Jdl3kCU3I",
  authDomain: "react-netflix-clone-b35bf.firebaseapp.com",
  projectId: "react-netflix-clone-b35bf",
  storageBucket: "react-netflix-clone-b35bf.appspot.com",
  messagingSenderId: "820762867420",
  appId: "1:820762867420:web:d17622674e5ad1ddc66619",
  measurementId: "G-WDL26CC8X5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);