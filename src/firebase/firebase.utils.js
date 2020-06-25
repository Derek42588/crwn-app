import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import keys from '../config/keys'

// const config = {
//   apiKey: 'AIzaSyA4aAJKz8danzxw8YBKVx1Bi7VhAcEE6Pg',
//   authDomain: 'crown-db-5fabc.firebaseapp.com',
//   databaseURL: 'https://crown-db-5fabc.firebaseio.com',
//   projectId: 'crown-db-5fabc',
//   storageBucket: 'crown-db-5fabc.appspot.com',
//   messagingSenderId: '475844385638',
//   appId: '1:475844385638:web:58c66ca4a489933b20c6a7',
//   measurementId: 'G-5S8M0XXVR4',
// };


// firebase.initializeApp(config);
firebase.initializeApp({
  apiKey: keys.FIREBASE_API_KEY,
  authDomain: keys.FIREBASE_AUTH_DOMAIN,
  databaseURL: keys.FIREBASE_DATABASE_URL,
  projectId: keys.FIREBASE_PROJECT_ID,
  storageBucket: keys.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: keys.FIREBASE_MESSAGING_SENDER_ID,
  appId: keys.FIREBASE_APP_ID,
  measurementId: keys.FIREBASE_MEASUREMENT_ID,
})
  
// // );

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const twitterProvider = new firebase.auth.TwitterAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();


 
export const createUserWithEmailAndPassword = (email, password) => {
this.auth.createUserWithEmailAndPassword(email, password);
}

export const handleSignInWithEmailAndPassword = (email, password) => {
  
  auth.signInWithEmailAndPassword(email, password)
  .catch(function(error) {
    console.log(error)
  })
  }

export const handleSignOut = () => this.auth.signOut();

export const handlePasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
 
export const hanldePasswordUpdate = (password) => {
  this.auth.currentUser.updatePassword(password);
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;

}

// attempting to figure out how to 1) allow sign ins from any of these methods and 2) catch the error and redirect the user if they've
// already signed up using one of their other accounts.
// is this common functionality?  

// googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  auth
  .signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  .catch(function(error) {
    console.log(error)
  })
}

export const signInWithFacebook = () => {
  auth
  .signInWithRedirect(new firebase.auth.FacebookAuthProvider())
  .catch(function(error) {
    if (error.code === 'auth/account-exists-with-different-credential') {
      // The provider account's email address.
      var email = error.email;
      // Get sign-in methods for this email.
      auth.fetchSignInMethodsForEmail(email).then(function(methods) {
        console.log(methods)
        if (methods[0] === 'google.com') {
          console.log(error)
        }
      })
    }
    return error
  })
}

export const signInWithTwitter = () => auth.signInWithRedirect(twitterProvider)
export const signInWithGithub = () => auth.signInWithRedirect(githubProvider)

export default firebase;