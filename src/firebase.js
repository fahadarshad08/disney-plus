
import firebase from "./firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDN4-plDAbXEqG3puD1kETRueNaAvjgV04",
    authDomain: "disneypluss-clone-fae06.firebaseapp.com",
    projectId: "disneypluss-clone-fae06",
    storageBucket: "disneypluss-clone-fae06.appspot.com",
    messagingSenderId: "619713458547",
    appId: "1:619713458547:web:f19287446461a48f96d506",
    measurementId: "G-8W5NWJXZ67"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

 