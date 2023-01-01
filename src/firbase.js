import Firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmViosH7QgcEdGnG8m4-IZnixpJq86npc",
  authDomain: "konfidence-kulture.firebaseapp.com",
  projectId: "konfidence-kulture",
  storageBucket: "konfidence-kulture.appspot.com",
  messagingSenderId: "261882439639",
  appId: "1:261882439639:web:591cbe590d501103350d92",
  measurementId: "G-NYVY87C9MM",
};

const firebase = Firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };
