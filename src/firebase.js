import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBrj28iQ3bmquIJCpOIT00N4toy2aK271s",
  authDomain: "disneyplus-cl-4e315.firebaseapp.com",
  projectId: "disneyplus-cl-4e315",
  storageBucket: "disneyplus-cl-4e315.appspot.com",
  messagingSenderId: "275766691562",
  appId: "1:275766691562:web:d5b27089468a2d0455f993"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
