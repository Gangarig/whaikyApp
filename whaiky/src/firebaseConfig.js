// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8PHlBy4ied1kY7IM7dm-bpDwQKfz5lC8",
  authDomain: "whaiky-538ca.firebaseapp.com",
  projectId: "whaiky-538ca",
  storageBucket: "whaiky-538ca.appspot.com",
  messagingSenderId: "454465463090",
  appId: "1:454465463090:web:b6192fba0a10b285e22d2b",
  measurementId: "G-8ZBDEQJNQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app , auth }