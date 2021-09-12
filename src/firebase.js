// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAj_aVKg-Cjzi6cynkcqsFJ4O8aaiZ6z-g",
    authDomain: "internwork-3370a.firebaseapp.com",
    projectId: "internwork-3370a",
    storageBucket: "internwork-3370a.appspot.com",
    messagingSenderId: "699137331986",
    appId: "1:699137331986:web:6ed30d50315746528519cb",
    measurementId: "G-67XXFS0H4V"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()

  export {db,auth}