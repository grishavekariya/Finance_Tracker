import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsMkt3c1j4MA_rR6XwBYIMT_i-ItTNbeU",
  authDomain: "financely-b141b.firebaseapp.com",
  projectId: "financely-b141b",
  storageBucket: "financely-b141b.appspot.com",
  messagingSenderId: "963497874822",
  appId: "1:963497874822:web:57ebdfad7df09610324807",
  measurementId: "G-ED58MHGRR9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
