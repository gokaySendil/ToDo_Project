// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  setDoc,
  doc,
  updateDoc,
  onSnapshot,
  arrayUnion,
  arrayRemove,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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
export const authSignUp = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    setDoc(doc(db, "users", email), {
      email: email,
      password: password,
      todos: [],
    })
  );
};
export const authLogin = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const authSignOut = async () => {
  return signOut();
};
export const deleteItem = (title) => {
  updateDoc(doc(db, "users", auth.currentUser.email), {
    todos: arrayRemove({ title: title }),
  });
};
export const addnewTodo = (title) => {
  updateDoc(doc(db, "users", auth.currentUser.email), {
    todos: arrayUnion({ title: title }),
  });
};
export const getError = (error_code) => {
  switch (error_code) {
    case "auth/invalid-password":
      return "Password provided is not corrected";
    case "auth/invalid-email":
      return "Email provided is invalid";
    case "auth/user-not-found":
      return "There is no existing user";
    case "auth/email-already-exists":
      return "Email is alreay been used";
    default:
      return error_code;
  }
};
