import React, { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-30hpxWisEwNVrvTJKlfjYWpi0zbVyPY",
  authDomain: "jennifergajdos-bomben.firebaseapp.com",
  projectId: "jennifergajdos-bomben",
  storageBucket: "jennifergajdos-bomben.appspot.com",
  messagingSenderId: "175120246560",
  appId: "1:175120246560:web:6bd449ec3766f365df9945",
  measurementId: "G-JD20LRSBQ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
