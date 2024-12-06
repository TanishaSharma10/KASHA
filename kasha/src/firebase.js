// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYno7d21iDE2OFWsVpjIZgFWP7jW0-G2I",
  authDomain: "kasha-7a400.firebaseapp.com",
  projectId: "kasha-7a400",
  storageBucket: "kasha-7a400.appspot.com",
  messagingSenderId: "801088718186",
  appId: "1:801088718186:web:691db963849b3c54715113",
  measurementId: "G-6TH49RZ5X3"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
