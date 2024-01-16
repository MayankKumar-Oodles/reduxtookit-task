import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAc1gKFF0Rnszq6_giB1dgBkZ47H5WWLKg",
    authDomain: "fir-crud-64899.firebaseapp.com",
    projectId: "fir-crud-64899",
    storageBucket: "fir-crud-64899.appspot.com",
    messagingSenderId: "58868157613",
    appId: "1:58868157613:web:667c7477602542a6d9ca24"
  };

const app = initializeApp(firebaseConfig);

export const db =getFirestore(app);