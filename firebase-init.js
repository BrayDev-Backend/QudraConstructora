import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBB3v8m5I5I4tdjjDXJovKkzSpratc8yrA",
  authDomain: "qudra-blog.firebaseapp.com",
  projectId: "qudra-blog",
  storageBucket: "qudra-blog.firebasestorage.app",
  messagingSenderId: "152587114848",
  appId: "1:152587114848:web:80130c59ce6cc581032605",
  measurementId: "G-DKV6J8XJFM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

isSupported().then((ok) => {
  if (ok) getAnalytics(app);
});

export { db };
