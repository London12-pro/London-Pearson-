// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaTtt_YngVIVbnyA56n5piqKBVosZ0SxA",
    authDomain: "london-s-closet.firebaseapp.com",
    projectId: "london-s-closet",
    storageBucket: "london-s-closet.firebasestorage.app",
    messagingSenderId: "616857057529",
    appId: "1:616857057529:web:c98a8f8e3eb03491064a28",
    measurementId: "G-9H1X181QYB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
