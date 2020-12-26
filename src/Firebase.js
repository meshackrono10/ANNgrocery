import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCyDMzRiN7rsmj4seV-kgQOMw7gISw5v4M",
  authDomain: "intagram-clone-2e748.firebaseapp.com",
  databaseURL: "https://intagram-clone-2e748-default-rtdb.firebaseio.com",
  projectId: "intagram-clone-2e748",
  storageBucket: "intagram-clone-2e748.appspot.com",
  messagingSenderId: "937288525382",
  appId: "1:937288525382:web:eef853397bd4eb90c04c47",
  measurementId: "G-7WDQLZFC60",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth };
