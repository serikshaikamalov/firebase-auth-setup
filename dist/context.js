function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// import React from "react";

// Context
const FirebaseContext = React.createContext(null);

// HOC
const withFirebase = Component => props => /*#__PURE__*/React.createElement(FirebaseContext.Consumer, null, firebaseStore => /*#__PURE__*/React.createElement(Component, _extends({}, props, {
  firebaseStore: firebaseStore
})));
export { withFirebase, FirebaseContext };