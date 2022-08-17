import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6J4Pc57PhX7JIQKJg7P00W7-HuiRHD54",
  authDomain: "react-proyecto-183cd.firebaseapp.com",
  projectId: "react-proyecto-183cd",
  storageBucket: "react-proyecto-183cd.appspot.com",
  messagingSenderId: "703394839287",
  appId: "1:703394839287:web:bf9723a31c255bd24e71f2"
};

firebase.initializeApp(firebaseConfig);

export const baseDeDato = firebase.firestore();
export default firebase;
