import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyC04vTfBN5W-V3gDjwRKWf50e6NVipBvHQ",
    authDomain: "sitioapp-56c0d.firebaseapp.com",
    projectId: "sitioapp-56c0d",
    storageBucket: "sitioapp-56c0d.appspot.com",
    messagingSenderId: "785801333678",
    appId: "1:785801333678:web:f9ee04f4b9eb86a317563f",
    measurementId: "G-MCF2BW0X2G"
  };

  if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;