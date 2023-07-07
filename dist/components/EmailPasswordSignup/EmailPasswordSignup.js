import React, { useRef } from "react";
import { withFirebase } from "../../firebase-setups";
const EmailPasswordSignup = ({
  firebaseStore
}) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const onSubmit = async e => {
    try {
      e.preventDefault();
      console.log("Form: ", {
        email: emailRef.current,
        password: passwordRef.current
      });
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      if (!email || !password) throw new Error("PLEASE_FILL_ALL_REQUIRED_FIELDS");

      // Sign-in with Firebase
      const firebaseAuthResponse = await firebaseStore.signUp(email, password);
      console.log("You successfully signed up: ", firebaseAuthResponse);
      alert("You successfully signed up with Email/Password");
    } catch (ex) {
      console.error("Firebase: Signin ex: ", ex);
      alert(ex.message);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "m-y-1"
  }, /*#__PURE__*/React.createElement("h3", null, "Signup with email and password"), /*#__PURE__*/React.createElement("form", {
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-y-1"
  }, /*#__PURE__*/React.createElement("input", {
    ref: emailRef,
    type: "email",
    name: "email",
    placeholder: "Please enter your email",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "m-y-1"
  }, /*#__PURE__*/React.createElement("input", {
    ref: passwordRef,
    type: "password",
    name: "password",
    placeholder: "Please enter your pasword",
    required: true
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Signup with Email/Password")));
};
export default withFirebase(EmailPasswordSignup);