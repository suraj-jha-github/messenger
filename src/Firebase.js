// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAQR3_jUrXlkaCJQLeVJJlwuXVhCyGg2GI",
  authDomain: "messenger-app-77181.firebaseapp.com",
  projectId: "messenger-app-77181",
  storageBucket: "messenger-app-77181.appspot.com",
  messagingSenderId: "790581075678",
  appId: "1:790581075678:web:a46cc8d9c3c0784904ac4f",
  measurementId: "G-XH6LK8G71R"
  });

  const db=firebaseApp.firestore();

  export {db};

