// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkPxaGdhgabvEyBbY1az5u9zT0kZTTr2c",
  authDomain: "sports-f24ba.firebaseapp.com",
  projectId: "sports-f24ba",
  storageBucket: "sports-f24ba.appspot.com",
  messagingSenderId: "835674945347",
  appId: "1:835674945347:web:79a49da16eaf00873061f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider()