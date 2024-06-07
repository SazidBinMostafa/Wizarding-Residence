// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMZQNcdZc3mGgI8Bp9QO9fj9EsJTCIE3Y",
  authDomain: "wizardingresidence.firebaseapp.com",
  projectId: "wizardingresidence",
  storageBucket: "wizardingresidence.appspot.com",
  messagingSenderId: "874801835838",
  appId: "1:874801835838:web:c2c4297f19bad6fd0f466f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;