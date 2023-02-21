import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBop0tA_Y4wmeb7DxYFFPnNJDrD0If-95Y",
  authDomain: "cooking-ninja-site-5fe98.firebaseapp.com",
  projectId: "cooking-ninja-site-5fe98",
  storageBucket: "cooking-ninja-site-5fe98.appspot.com",
  messagingSenderId: "288750468191",
  appId: "1:288750468191:web:9beacfde9d76d038e06fea",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
