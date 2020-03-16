import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if(!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyDkaAVP1rkDe1jZlFaDMhrL6KLPcLXHyn0",
    authDomain: "slack-clone-app-2ae11.firebaseapp.com",
    databaseURL: "https://slack-clone-app-2ae11.firebaseio.com",
    projectId: "slack-clone-app-2ae11",
    storageBucket: "slack-clone-app-2ae11.appspot.com",
    messagingSenderId: "484894911852",
    appId: "1:484894911852:web:3738d613d9aece5f489749",
    measurementId: "G-REESQH1TET"
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
  firebase,
  db
}