import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBPRFz80Jo_w_2Q_NwT1QaNVnewpdZxZ6E',
  authDomain: 'react-redux-ecom.firebaseapp.com',
  databaseURL: 'https://react-redux-ecom.firebaseio.com',
  projectId: 'react-redux-ecom',
  storageBucket: 'react-redux-ecom.appspot.com',
  messagingSenderId: '982848326075',
  appId: '1:982848326075:web:eee69f68580a7afdb91c9e',
};

firebase.initializeApp(config);

// we need userRef thus we return it
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
