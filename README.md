# Sign-in with Firebase Authentication

You can use this library to easily integrate with Firebase Authorization for your React app.

## Installation

```
npm i firebase-auth-setup
```

# How to use

PS: Before starting please prepare the config file that you can find on your [Firebase account page](https://console.firebase.google.com/). Copy content of the firebase config and put it inside .env.local file(first you will be needed to rename .env.local-sample file to .env.local)

1. Wrap your app component with FirebaseContext.Provider and pass firebase global object with firebaseConfig. In index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FirebaseContext, FirebaseStore } from "./firebase-setups";
import firebaseConfig from "./firebase-config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseContext.Provider value={new FirebaseStore(firebaseConfig)}>
    <App />
  </FirebaseContext.Provider>
);
```

2. To get the actual state of the Firebase object you should wrap your component with withFirebase Hoc. For example:

```js
export default withFirebase(GoogleLoginButton);
```

Now GoogleLoginButton component has props `firebaseStore`

3. On your login button bind with one of the signing methods that are defined in firebase-store.js

```js
import React from "react";
import { withFirebase } from "../../firebase-setups";

const GoogleLoginButton = ({ firebaseStore }) => {
  const sigin = async () => {
    try {
      // Sign-in with Firebase
      const firebaseAuthResponse = await firebaseStore.signInWithGoogle();
      console.log("You successfully logged in: ", firebaseAuthResponse);
    } catch (ex) {
      console.error("Firebase: Google signin ex: ", ex);
    }
  };

  return (
    <div onClick={sigin} className="m-y-1">
      <button>Login with Google</button>
    </div>
  );
};

export default withFirebase(GoogleLoginButton);
```

4. Enjoy!

# Sample

We already prepared a demo. Just run on a terminal:

```js
npm install
npm run start
```
