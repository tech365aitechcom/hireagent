// firebaseAuth.js
import app from "@/firebase.config";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const googleLogin = () => {
  return signInWithPopup(auth, googleProvider);
};

export const userLogout = () => {
  return signOut(auth);
};

export const subscribeToAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};
