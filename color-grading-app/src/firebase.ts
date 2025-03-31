// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAVdAthZwJrYMvVg-GyAcnwlSn7ggl6ViI",
    authDomain: "lutopia.firebaseapp.com",
    projectId: "lutopia",
    storageBucket: "lutopia.firebasestorage.app",
    messagingSenderId: "1009693723643",
    appId: "1:1009693723643:web:1260797914a8c894ebd95e",
    measurementId: "G-4ZYTQ9BC5X"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
