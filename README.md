# Sign-in with Firebase Authentication

You can use this library to easily integrate with Firebase Authorization for your React app.

# How to use

1. Before starting please prepare the config file that you find on your Firebase account page.
2. Wrap your app component with FirebaseContext.Provider and pass firebase global object to the children.
3. To get the actual state of Firebase object you should wrap your component with withFirebase Hoc
4. On your login button bind with one of the signing methods that are defined in firebase-store.js
5. Enjoy!

# Sample

We already prepared a demo. Just run on a terminal:

```js
npm install
npm run start
```
