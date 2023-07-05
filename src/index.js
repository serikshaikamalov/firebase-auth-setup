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
