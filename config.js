// import { initializeApp } from 'firebase/app';
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: 'AIzaSyDU_e4XsrDEp4RvzUz99EvJhVTkrJRtG3E',
//   authDomain: 'my-app-react-native-c6114.firebaseapp.com',
//   databaseURL: 'https://my-app-react-native-c6114.firebaseio.com',
//   projectId: 'my-app-react-native-c6114',
//   storageBucket: 'my-app-react-native-c6114.appspot.com',
//   messagingSenderId: '935547738830',
//   appId: '1:935547738830:android:d9351c2ebe891131e70e9f',
//   measurementId: 'G-measurement-id',
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);
//-----------------------------------------------------------------------

// import dotenv from 'dotenv';
import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// dotenv.config();
// const { REACT_APP_FIREBASE_API_KEY,
//   REACT_APP_FIREBASE_AUTH_DOMAIN,
//   REACT_APP_FIREBASE_API_PROJECT_ID,
//   REACT_APP_FIREBASE_API_STORAGE_BUCKET,
//   REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   REACT_APP_FIREBASE_APP_ID } = process.env;
const firebaseConfig = {
  apiKey:"AIzaSyCiJv3C7j-CKatpBa817fMB-JSkMwaAJQw",
  authDomain:"my-app-react-native-c6114.firebaseapp.com",
  projectId: "my-app-react-native-c6114",
  storageBucket: "my-app-react-native-c6114.appspot.com",
  messagingSenderId: "935547738830",
  appId: "1:935547738830:web:949dd36609b66ec1e70e9f",
  measurementId: "G-HWERD5KYRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);