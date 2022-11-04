// Import the functions you need from the SDKs you need
// import firebase from "firebase";
//import firebase from "firebase";
// import * as firebase from "firebase/app";
// import 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0qqqQOiJnoU97SSZzXi1ODZa_EIDyLH0",
    authDomain: "tiktokdemo-3ba61.firebaseapp.com",
    projectId: "tiktokdemo-3ba61",
    storageBucket: "tiktokdemo-3ba61.appspot.com",
    messagingSenderId: "704806969691",
    appId: "1:704806969691:web:ae20e9ce3bc5195a9d7a7e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
export default db;