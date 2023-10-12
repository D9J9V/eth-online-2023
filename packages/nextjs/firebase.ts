import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWsKF37TNVI5pGk59h8h-iPaUA12clZTc",
  authDomain: "chatgpt-messenger-3cd8b.firebaseapp.com",
  projectId: "chatgpt-messenger-3cd8b",
  storageBucket: "chatgpt-messenger-3cd8b.appspot.com",
  messagingSenderId: "671780668017",
  appId: "1:671780668017:web:6770ab2fce3df30509d1d0",
};

// Initialize Firebase for Next (singleton pattern)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
