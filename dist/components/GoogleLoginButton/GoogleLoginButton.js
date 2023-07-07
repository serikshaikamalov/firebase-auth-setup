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
      onFailure && onFailure();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: sigin,
    className: "m-y-1"
  }, /*#__PURE__*/React.createElement("button", null, title));
};
export default withFirebase(GoogleLoginButton);