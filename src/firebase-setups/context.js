// import React from "react";

// Context
const FirebaseContext = React.createContext(null);

// HOC
const withFirebase = (Component) => (props) =>
  (
    <FirebaseContext.Consumer>
      {(firebaseStore) => <Component {...props} firebaseStore={firebaseStore} />}
    </FirebaseContext.Consumer>
  );

export { withFirebase, FirebaseContext };
