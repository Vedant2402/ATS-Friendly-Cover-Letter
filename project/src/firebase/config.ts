import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXK8GvO-lvGN1ZW1aEvqGDULFVqj8it6Q",
  authDomain: "gen-lang-client-0132198381.firebaseapp.com",
  projectId: "gen-lang-client-0132198381",
  storageBucket: "gen-lang-client-0132198381.firebasestorage.app",
  messagingSenderId: "455946415305",
  appId: "1:455946415305:web:7225e67eccd23b4abd3118",
  measurementId: "G-BT08VVCHJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Analytics
export const analytics = getAnalytics(app);

export default app;