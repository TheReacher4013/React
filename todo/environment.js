// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDteqzSA92aQMmgyVVcQFJf25GhaPpRVQI",
    authDomain: "todo-bc6ba.firebaseapp.com",
    projectId: "todo-bc6ba",
    storageBucket: "todo-bc6ba.firebasestorage.app",
    messagingSenderId: "519199791734",
    appId: "1:519199791734:web:fed631026c6402b1391d57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;