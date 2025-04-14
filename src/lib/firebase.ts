"use client";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1m_tLjOb6leSVdKy3d3opzhlBL3NnVAA",
    authDomain: "legal-compass.firebaseapp.com",
    projectId: "legal-compass",
    storageBucket: "legal-compass.firebasestorage.app",
    messagingSenderId: "1056458077242",
    appId: "1:1056458077242:web:80e48b3329e4876620f103",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

let app: any = null; // Initialize app outside the conditional block

// Check if Firebase config values are present
const hasFirebaseConfig =
  firebaseConfig.apiKey &&
  firebaseConfig.authDomain &&
  firebaseConfig.projectId &&
  firebaseConfig.storageBucket &&
  firebaseConfig.messagingSenderId &&
  firebaseConfig.appId &&
  firebaseConfig.measurementId;


// Initialize Firebase only if config values are present and app is not already initialized
if (!app && hasFirebaseConfig) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    console.log('Firebase app initialized successfully!');
  } catch (error: any) {
    console.error('Failed to initialize Firebase app:', error);
  }
}

export {app};

export const analytics = () => {
  if (typeof window !== 'undefined' && app) {
    return getAnalytics(app);
  } else {
    return null;
  }
};


