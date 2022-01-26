import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz7uSgYiNL_wUBPi-4lVEUbuyHqFqE0bM",
  authDomain: "tinder-clone-77cff.firebaseapp.com",
  databaseURL: "https://tinder-clone-77cff-default-rtdb.firebaseio.com",
  projectId: "tinder-clone-77cff",
  storageBucket: "tinder-clone-77cff.appspot.com",
  messagingSenderId: "621039725457",
  appId: "1:621039725457:web:4770bdefb7133d3bad8830",
  measurementId: "G-4TW1F75R3H"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;
