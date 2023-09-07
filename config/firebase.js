import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBAjAroVYY8wV86_hTUNfyQaCS47HSAgas",

    authDomain: "sahiib.firebaseapp.com",
  
    projectId: "sahiib",
  
    storageBucket: "sahiib.appspot.com",
  
    messagingSenderId: "383331050799",
  
    appId: "1:383331050799:web:fc7dd2e52d36892caf6dda",
  
    measurementId: "G-V0F9XYXB6J"
  
  //   @deprecated is deprecated Constants.manifest
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();