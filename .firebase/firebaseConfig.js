// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDDPrfeyMdYaOSbWBbpVbJqI7MZFKV2X_8",
  authDomain: "innovation-research-group.firebaseapp.com",
  projectId: "innovation-research-group",
  storageBucket: "innovation-research-group.appspot.com",
  messagingSenderId: "296546669978",
  appId: "1:296546669978:web:446955b2865a48fdaa1623",
  measurementId: "G-TV6H21D7WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage =getStorage(app);