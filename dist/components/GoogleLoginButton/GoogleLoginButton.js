import React from "react";
import { withFirebase } from "../../firebase-setups";
import "./GoogleLoginButton.css";
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