import firebase from "firebase/app";
import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore

const firebaseConfig = {
  apiKey: "AIzaSyD0OEfY0R-x3tM-2iFVd3jnwBrzFYOruBc",
  authDomain: "enovaenergia-d6e83.firebaseapp.com",
  projectId: "enovaenergia-d6e83",
  storageBucket: "enovaenergia-d6e83.appspot.com",
  messagingSenderId: "1052412287659",
  appId: "1:1052412287659:web:61a6ae2c8c140a00d2b5ee",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
