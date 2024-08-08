import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const API = process.env.API;
const firebaseConfig = {
    apiKey: API,
    authDomain: "inventory-management-app-6538d.firebaseapp.com",
    projectId: "inventory-management-app-6538d",
    storageBucket: "inventory-management-app-6538d.appspot.com",
    messagingSenderId: "240910324443",
    appId: "1:240910324443:web:7cd4ed526bfefd5fff72fe",
    measurementId: "G-VH0V8PD1KY"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };