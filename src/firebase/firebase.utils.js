import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBPRFz80Jo_w_2Q_NwT1QaNVnewpdZxZ6E",
  authDomain: "react-redux-ecom.firebaseapp.com",
  databaseURL: "https://react-redux-ecom.firebaseio.com",
  projectId: "react-redux-ecom",
  storageBucket: "react-redux-ecom.appspot.com",
  messagingSenderId: "982848326075",
  appId: "1:982848326075:web:eee69f68580a7afdb91c9e",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
