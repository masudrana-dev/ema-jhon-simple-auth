// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC04W-d0Zf9uwsLcy6JWr4K8Zsn4kSPhJQ",
    authDomain: "ema-jhon-613d8.firebaseapp.com",
    projectId: "ema-jhon-613d8",
    storageBucket: "ema-jhon-613d8.appspot.com",
    messagingSenderId: "1080603177496",
    appId: "1:1080603177496:web:3ed70668ce447f1fd7896d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth

