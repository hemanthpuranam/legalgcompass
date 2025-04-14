"use client";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAToKyQ5_MmrimQr2JaPC8ikxpGaUGUpBY",
  authDomain: "urlawyer-50368.firebaseapp.com",
  projectId: "urlawyer-50368",
  storageBucket: "urlawyer-50368.firebasestorage.app",
  messagingSenderId: "84810542536",
  appId: "1:84810542536:web:e6b9193fe9cbbb8b23a4fd",
  measurementId: "G-YPEYHNFEB2"
};

let app: any = null; // Initialize app outside the conditional block
let analyticsInstance: any = null;
let auth: any = null;

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
    if (getApps().length === 0) {
      app = initializeApp(firebaseConfig);
      console.log('Firebase app initialized successfully!');
    } else {
      app = getApp();
    }
    analyticsInstance = getAnalytics(app);
    auth = getAuth(app);
  } catch (error: any) {
    console.error('Failed to initialize Firebase app:', error);
  }
}

export {app, auth};

export const analytics = () => {
  if (typeof window !== 'undefined' && app) {
    return analyticsInstance;
  } else {
    return null;
  }
};
