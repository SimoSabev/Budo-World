// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyD6Ot1J8AnoWObKuZ8qL_eg2XYUFw67AVo",

  authDomain: "budo-world-noit.firebaseapp.com",

  projectId: "budo-world-noit",

  storageBucket: "budo-world-noit.appspot.com",

  messagingSenderId: "182736631347",

  appId: "1:182736631347:web:c472b9727162cf4c06d546",

  measurementId: "G-HS8KLRTFVW"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);