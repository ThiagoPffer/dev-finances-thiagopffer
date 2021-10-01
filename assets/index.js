import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-analytics.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCgT_b6rBmoBE-kfY7a_l-tDhrPtIKAI0",
    authDomain: "dev-finances-thiagopffer.firebaseapp.com",
    projectId: "dev-finances-thiagopffer",
    databaseURL: "https://dev-finances-thiagopffer-default-rtdb.firebaseio.com",
    storageBucket: "dev-finances-thiagopffer.appspot.com",
    messagingSenderId: "1013727403158",
    appId: "1:1013727403158:web:3bea1ea202549dc075b6b7",
    measurementId: "G-0D7Y78HHZ4"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);