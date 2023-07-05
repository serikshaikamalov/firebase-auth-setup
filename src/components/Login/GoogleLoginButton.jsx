import React from "react";
import { withFirebase } from "../../firebase-setups";

const GoogleLoginButton = ({ firebaseStore }) => {
  const sigin = async () => {
    try {
      // Sign-in with Firebase
      const firebaseAuthResponse = await firebaseStore.signInWithGoogle();
      console.log("You successfully logged in: ", firebaseAuthResponse);
    } catch (ex) {
      console.error("Firebase: Google signin ex: ", ex);
    }
  };

  return (
    <div onClick={sigin}>
      <button>Login with Google</button>
    </div>
  );
};

export default withFirebase(GoogleLoginButton);
