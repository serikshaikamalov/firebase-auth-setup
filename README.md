# Sign-in with Firebase Authentication

You can use this library to easily integrate with Firebase Authorization for your React app.

<img width="395" alt="Screenshot 2023-07-07 at 17 26 55" src="https://github.com/serikshaikamalov/firebase-auth-setup/assets/11631958/d71aa5a2-cba8-467a-9c2c-9027f07bc00d">

## Installation

```
npm i firebase-auth-setup
```

## How to use

PS: Before starting please prepare the config file that you can find on your [Firebase account page](https://console.firebase.google.com/). Copy content of the firebase config and put it inside .env.local file(first you will be needed to rename .env.local-sample file to .env.local)

1. Wrap your app component with FirebaseContext.Provider and pass firebase global object with firebaseConfig. In index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  FirebaseContext,
  FirebaseStore,
} from "firebase-auth-setup/dist/firebase-setups";

import firebaseConfig from "./firebase-config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseContext.Provider value={new FirebaseStore(firebaseConfig)}>
    <App />
  </FirebaseContext.Provider>
);
```

2. Import social media buttons from `firebase-auth-setup/dist/components`

```js
import {
  GoogleLoginButton,
  FacebookLoginButton,
} from "firebase-auth-setup/dist/components";
```

Use them on your react component:

```js
<GoogleLoginButton
    title="Login with Google"
    onSuccess={onSuccessLogin}
    onFailure={onLoginFailure}
/>
<FacebookLoginButton
    title="Login with Facebook"
    onSuccess={onSuccessLogin}
    onFailure={onLoginFailure}
    />
```

You can easily predefine props by passing title, onSuccess, onFailure handlers. All props are OPTIONAL
Here:
title - title of a button
onSuccess - your custom function that will be fired after loggin in
onFailure - your custom function which will be fired when something happens during sigin-in process

## Demo

We already prepared a demo. Just run on a terminal:

```js
npm install
npm run start
```

## Where can you reach me?

To stay connected follow me on Github: [Serik](https://github.com/serikshaikamalov)
