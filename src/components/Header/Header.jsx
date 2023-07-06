import React from "react";
import { withFirebase } from "../../firebase-setups";

const Header = ({ authUser, firebaseStore }) => {
  const signOut = () => {
    firebaseStore.signOut();
  };
  if (authUser) {
    return (
      <header>
        <nav id="user-menu">
          <ul>
            <li>{authUser.email}</li>
            <li onClick={signOut}>Sign out</li>
          </ul>
        </nav>
      </header>
    );
  }

  return (
    <header>
      <button>Sigin</button>
    </header>
  );
};

export default withFirebase(Header);
