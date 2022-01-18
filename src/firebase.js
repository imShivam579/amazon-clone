import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuK6LY3VbEUprQAA-jrnr4rWs6qPE080U",
  authDomain: "clone-dd3bb.firebaseapp.com",
  projectId: "clone-dd3bb",
  storageBucket: "clone-dd3bb.appspot.com",
  messagingSenderId: "940101709152",
  appId: "1:940101709152:web:6018be66807d55aece4205",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebase.auth();

export { database, auth };
