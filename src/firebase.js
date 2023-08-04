// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx61ElePtRI0ef54NCENLG1n4vfuWhiEs",
  authDomain: "talent-8602d.firebaseapp.com",
  projectId: "talent-8602d",
  storageBucket: "talent-8602d.appspot.com",
  messagingSenderId: "859426760825",
  appId: "1:859426760825:web:05e5fcf0657cfa14d90ca8",
  measurementId: "G-GQ9XM82G0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);