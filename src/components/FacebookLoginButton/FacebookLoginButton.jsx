import React from "react";
import { withFirebase } from "../../firebase-setups";
import "./style.css";

/**
 *
 * @param {*} title - optional. Label of the button
 * @param onSuccess - optional. Your custom function which will be fired after loggin in
 * @param onFailure - optional. your custom function which will be fired when something happens during sigin-in process
 * @param permissions - optional. scopes/permissions
 * @returns a logged user or exception
 */
const FacebookLoginButton = ({
  firebaseStore,
  title = "Login with Facebook",
  onSuccess,
  onFailure,
  permissions = [],
}) => {
  const sigin = async () => {
    try {
      // Sign-in with Firebase
      const firebaseAuthResponse = await firebaseStore.signInWithFacebook(
        permissions
      );
      console.log("You successfully logged in: ", firebaseAuthResponse);
      onSuccess && onSuccess(firebaseAuthResponse);
    } catch (ex) {
      console.error("Firebase: Facebook signin ex: ", ex);
      onFailure && onFailure(ex);
    }
  };

  return (
    <button className="facebook-login-btn" onClick={sigin}>
      {title}
    </button>
  );
};

export default withFirebase(FacebookLoginButton);
