import React from "react";
import "./style.css";
import { withFirebase } from "../../firebase-setups";

/**
 *
 * @param {*} title - optional. Label of the button
 * @param onSuccess - optional. Your custom function which will be fired after loggin in
 * @param onFailure - optional. your custom function which will be fired when something happens during sigin-in process
 * @param permissions - optional. scopes/permissions
 * @returns a logged user or exception
 */
const GoogleLoginButton = ({
  firebaseStore,
  title = "Login with Google",
  onSuccess,
  onFailure
}) => {
  const sigin = async () => {
    try {
      // Sign-in with Firebase
      const firebaseAuthResponse = await firebaseStore.signInWithGoogle();
      console.log("You successfully logged in: ", firebaseAuthResponse);
      onSuccess && onSuccess(firebaseAuthResponse);
    } catch (ex) {
      console.error("Firebase: Google signin ex: ", ex);
      onFailure && onFailure(ex);
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: sigin,
    className: "google-login-btn"
  }, title);
};
export default withFirebase(GoogleLoginButton);