import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // Your Firebase configuration object
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase services
const auth = getAuth(firebase_app);
const db = getFirestore(firebase_app);
const storage = getStorage(firebase_app);
const googleProvider = new GoogleAuthProvider();

// Initialize Analytics
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(firebase_app);
}

export { firebase_app, auth, db, storage, googleProvider, analytics };