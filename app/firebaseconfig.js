// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAde41v4o5WsSVJu7-rsu4zb-auh9UfQEs",
  authDomain: "nd-project-425309.firebaseapp.com",
  projectId: "nd-project-425309",
  storageBucket: "nd-project-425309.appspot.com",
  messagingSenderId: "933050491416",
  appId: "1:933050491416:web:041dd385d1507d2cde196d",
  measurementId: "G-Z6W5KRK72K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db};