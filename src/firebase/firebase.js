import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAWeXK2HE-Dc63i82yXrj2yqAVkzf7Nn7E",
  authDomain: "restaurant-99683.firebaseapp.com",
  databaseURL: "https://restaurant-99683.firebaseio.com",
  projectId: "restaurant-99683",
  storageBucket: "restaurant-99683.appspot.com",
  messagingSenderId: "774438379360",
  appId: "1:774438379360:web:a2d2938013d1f936378805"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
