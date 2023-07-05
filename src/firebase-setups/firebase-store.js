import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
} from "firebase/auth";

export class FirebaseStore {
  constructor(firebaseConfig) {
    this.firebase = initializeApp(firebaseConfig);
    this.auth = getAuth();
  }

  onAuthStateChanged = (subscribeToFirebaseAuthUser) => {
    return onAuthStateChanged(this.auth, subscribeToFirebaseAuthUser);
  };

  signIn = (email, password) =>
    signInWithEmailAndPassword(this.auth, email, password);

  signUp = (email, password) =>
    createUserWithEmailAndPassword(this.auth, email, password);

  signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const firebaseAuthResponse = await signInWithPopup(this.auth, provider);
    return firebaseAuthResponse;
  };

  resetPassword = (email) => sendPasswordResetEmail(this.auth, email);
  updatePassword = (password) =>
    updatePassword(this.auth.currentUser, password);

  signOut = () => signOut(this.auth);
}
