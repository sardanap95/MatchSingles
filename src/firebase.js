import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBOgvqNL5P5QnxhEE-KzHL9F0Fp-URd1P4",
    authDomain: "matchsingles-218f5.firebaseapp.com",
    databaseURL: "https://matchsingles-218f5.firebaseio.com",
    projectId: "matchsingles-218f5",
    storageBucket: "matchsingles-218f5.appspot.com",
    messagingSenderId: "220950339774",
    appId: "1:220950339774:web:bf1ca3897ae5038d463eef",
    measurementId: "G-G9WXP5WT4G",
  };
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const database = firebaseapp.firestore();


  export default database;