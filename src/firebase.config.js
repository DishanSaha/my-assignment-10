// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVRsbcE2CBYe_IJaEP0GTZndbjXec2qLc",
    authDomain: "sebajatra.firebaseapp.com",
    projectId: "sebajatra",
    storageBucket: "sebajatra.firebasestorage.app",
    messagingSenderId: "183073439207",
    appId: "1:183073439207:web:fe7c073237a9b00f05d142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);