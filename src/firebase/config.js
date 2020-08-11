import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDxuSV0h7ZaITyAC8PDacbqZkhD4Og_HRY",
  authDomain: "firegram-ea6b9.firebaseapp.com",
  databaseURL: "https://firegram-ea6b9.firebaseio.com",
  projectId: "firegram-ea6b9",
  storageBucket: "firegram-ea6b9.appspot.com",
  messagingSenderId: "295976946577",
  appId: "1:295976946577:web:09325cb8c798e954436830",
  measurementId: "G-PT152L3Y5C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp=firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore,timestamp };
