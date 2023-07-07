import React from "react";
import { withFirebase } from "../../firebase-setups";

const FacebookLoginButton = ({ firebaseStore }) => {
  const sigin = async () => {
    try {
      // Define your scopes(permissions)
      const permissions = ["instagram_manage_messages", "instagram_basic"];

      // Sign-in with Firebase
      const firebaseAuthResponse = await firebaseStore.signInWithFacebook(
        permissions
      );
      console.log("You successfully logged in: ", firebaseAuthResponse);
    } catch (ex) {
      console.error("Firebase: Facebook signin ex: ", ex);
    }
  };

  return (
    <div onClick={sigin} className="m-y-1">
      <button>Login with Facebook</button>
    </div>
  );
};

export default withFirebase(FacebookLoginButton);
