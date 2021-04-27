import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAm-nC09jMtTaWzrg1F3s-JA-IKKPhFaqU",
    authDomain: "clone-9de46.firebaseapp.com",
    projectId: "clone-9de46",
    storageBucket: "clone-9de46.appspot.com",
    messagingSenderId: "297133618854",
    appId: "1:297133618854:web:6b96c11333c08373206667",
    measurementId: "G-1C0W7L07YY"
  });

  const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };