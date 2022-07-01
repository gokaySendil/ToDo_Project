// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyApBIdFi60pxI6E0z3zQnTAnJTVNXE6vIo",
  authDomain: "to-do-f8278.firebaseapp.com",
  projectId: "to-do-f8278",
  storageBucket: "to-do-f8278.appspot.com",
  messagingSenderId: "435673985935",
  appId: "1:435673985935:web:08ea51d424faa57fa0d1fa",
  measurementId: "G-THPCKLXZNB",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
export const authSignUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    setDoc(doc(db, "users", email), {
      email: email,
      password: password,
      todos: [],
    })
  );
};
