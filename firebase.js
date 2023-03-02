import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// import firebase from 'firebase'
// import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC7XUqS1Inqa2WB3fF4-2kJGWsXmOUffdg",
    authDomain: "facebook-2-yt-19256.firebaseapp.com",
    projectId: "facebook-2-yt-19256",
    storageBucket: "facebook-2-yt-19256.appspot.com",
    messagingSenderId: "1052788810659",
    appId: "1:1052788810659:web:32094d1b39e442d6ff3016"
  };

//   const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

//   const db = app.firestore();
//   const storage = firebase.storage();

//   export { db, storage }

export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)