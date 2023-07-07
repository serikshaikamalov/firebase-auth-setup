import { useEffect, useState } from "react";
import GoogleLoginButton from "./components/Login/GoogleLoginButton";
import { withFirebase } from "./firebase-setups";
import Header from "./components/Header/Header";
import "./index.css";
import FacebookLoginButton from "./components/Login/FacebookLoginButton";
import EmailPasswordLogin from "./components/EmailPasswordLogin/EmailPasswordLogin";
import EmailPasswordSignup from "./components/EmailPasswordSignup/EmailPasswordSignup";

function App({ firebaseStore }) {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (firebaseStore) {
      setLoading(true);
      firebaseStore.onAuthStateChanged((_user) => {
        console.log("Firebase Auth Subscription: ", _user);

        if (_user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
        } else {
          // User is signed out
        }

        setAuthUser(_user);
        setLoading(false);
      });
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (authUser) return <Header authUser={authUser} />;

  return (
    <div>
      <h3>Example: How to use Firebase Auth</h3>
      <GoogleLoginButton />
      <FacebookLoginButton />
      <EmailPasswordSignup />
      <EmailPasswordLogin />
    </div>
  );
}

export default withFirebase(App);
