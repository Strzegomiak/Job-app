// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBSpAs6VPkYnzvNlrsemvJuRStbtbjNY8",
  authDomain: "job-app-88989.firebaseapp.com",
  projectId: "job-app-88989",
  storageBucket: "job-app-88989.appspot.com",
  messagingSenderId: "761960432724",
  appId: "1:761960432724:web:1bf6cd5fe9ee45886f19c1",
  measurementId: "G-T579CR6N9J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
