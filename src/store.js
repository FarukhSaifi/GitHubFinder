import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
// Reducer
//@todo

const firebaseConfig = {
  apiKey: "AIzaSyCqVKY9jDRxM3qkLMgcHAqmVnNxNcadcpM",
  authDomain: "reactdash-38979.firebaseapp.com",
  databaseURL: "https://reactdash-38979.firebaseio.com",
  projectId: "reactdash-38979",
  storageBucket: "reactdash-38979.appspot.com",
  messagingSenderId: "503588692738",
  appId: "1:503588692738:web:b1f4e65b7bee52fbc5d81b",
  measurementId: "G-BC71DE7VCN"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
// const firestore = firebase.firestore(); // <- needed if using firestore

// Add reactReduxFIrebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), //Firebase instance as first argument
  reduxFirestore(firebase) // needed if using firestore
)(createStore);
// const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(
//   createStore
// );
// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});
// Create store with reducers and initial state
const initialState = {};

// Create Store
const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(reactReduxFirebase(firebase), reduxDevTool)
);

export default store;
