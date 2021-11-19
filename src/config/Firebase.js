import firebase from "firebase/app";
import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore

const firebaseConfig = {
  apiKey: "AIzaSyA05d8DnBkTTls4TLuHNKvP_n8N1BoOjqs",
  authDomain: "enovaenegia.firebaseapp.com",
  projectId: "enovaenegia",
  storageBucket: "enovaenegia.appspot.com",
  messagingSenderId: "531312469072",
  appId: "1:531312469072:web:34abf503807179e87b9d55",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
