// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK1hoSqDuGThf7IwgoHDqeH0Oq2NnO83c",
  authDomain: "firbase-test-77087.firebaseapp.com",
  projectId: "firbase-test-77087",
  storageBucket: "firbase-test-77087.appspot.com",
  messagingSenderId: "427166216495",
  appId: "1:427166216495:web:ab76e9c222719d8a0f31da",
  measurementId: "G-MJLR1DCZEJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const authentication = getAuth(app);
