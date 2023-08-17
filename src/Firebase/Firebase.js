// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_IFT3ACGyTxAnx7pADw6f_zZgor3WtZk",
    authDomain: "talentitos-barcelona.firebaseapp.com",
    projectId: "talentitos-barcelona",
    storageBucket: "talentitos-barcelona.appspot.com",
    messagingSenderId: "161569245180",
    appId: "1:161569245180:web:a30f82feaafa1d28e69479",
    measurementId: "G-3E9GP5JQ7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

