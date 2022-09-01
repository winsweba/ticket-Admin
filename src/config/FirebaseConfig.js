
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyBdLcrL6qel8rIsAEEDkSDqm2j5OjE8LM8",
  authDomain: "ticket-reservation-demo.firebaseapp.com",
  projectId: "ticket-reservation-demo",
  storageBucket: "ticket-reservation-demo.appspot.com",
  messagingSenderId: "518523835618",
  appId: "1:518523835618:web:5ae98fbcc877fc79503abb",
  measurementId: "G-TE0JEMXL5V"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);