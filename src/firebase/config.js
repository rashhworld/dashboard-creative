import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-EtV6_IyvRo3ZcEpA9HEFTJ3VZdha0BA",
  authDomain: "dashboard-creative-upaay.firebaseapp.com",
  projectId: "dashboard-creative-upaay",
  storageBucket: "dashboard-creative-upaay.firebasestorage.app",
  messagingSenderId: "143744619062",
  appId: "1:143744619062:web:51a7bebe0e554ba48abe97"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
