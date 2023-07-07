import React from "react";
import { withFirebase } from "../../firebase-setups";
const Header = ({
  authUser,
  firebaseStore
}) => {
  const signOut = () => {
    firebaseStore.signOut();
  };
  if (authUser) {
    return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("nav", {
      id: "user-menu"
    }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, authUser.email), /*#__PURE__*/React.createElement("li", {
      onClick: signOut
    }, "Sign out"))));
  }
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("button", null, "Sigin"));
};
export default withFirebase(Header);