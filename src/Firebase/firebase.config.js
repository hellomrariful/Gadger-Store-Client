// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_h_jOsXhcYWjZmQMBg_c0tefdOF0mRyE",
  authDomain: "gadgerbd.firebaseapp.com",
  projectId: "gadgerbd",
  storageBucket: "gadgerbd.appspot.com",
  messagingSenderId: "76206571453",
  appId: "1:76206571453:web:27c2fe62fdb901328f9cd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;