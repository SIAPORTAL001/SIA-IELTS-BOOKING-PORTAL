// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4GRjFwcPJXKuXAqrj_0uMkWUhCahqO1E",
  authDomain: "sia-ielts-booking-portal.firebaseapp.com",
  projectId: "sia-ielts-booking-portal",
  storageBucket: "sia-ielts-booking-portal.firebasestorage.app",
  messagingSenderId: "202007717578",
  appId: "1:202007717578:web:496bd2c72c530866303633",
  measurementId: "G-FNV9FS90SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
