// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGa5Pu4epI0yICUsyDnsTXg4XkhORO9_Q",
  authDomain: "react-cursos-792aa.firebaseapp.com",
  projectId: "react-cursos-792aa",
  storageBucket: "react-cursos-792aa.appspot.com",
  messagingSenderId: "437695199837",
  appId: "1:437695199837:web:48f627f25045ec5623abb4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );

export const FirebaseAuth = getAuth( FirebaseApp );

//CloudBase-FireStore o RealTimeDataBase

export const FiresbaseDB = getFirestore( FirebaseApp );
