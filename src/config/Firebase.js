import firebase from  'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore

const firebaseConfig = {
  apiKey: "AIzaSyDOximofctnzs6dPkl8zmp_L4mrZmQ76nI",
  authDomain: "enovaenergia-multitarefa.firebaseapp.com",
  projectId: "enovaenergia-multitarefa",
  storageBucket: "enovaenergia-multitarefa.appspot.com",
  messagingSenderId: "725961065739",
  appId: "1:725961065739:web:52d74526476f6c5b384e0e"
};

firebase.initializeApp(firebaseConfig);

 export const firestore = firebase.firestore();


export default firebase;