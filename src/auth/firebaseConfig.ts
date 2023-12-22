// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';
import {initializeAuth} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import dotenv from 'dotenv';
// dotenv.config();

// const apiKey = process.env.FIREBASE_API_KEY;
// const authDomain = process.env.FIREBASE_AUTH_DOMAIN;
// const projectId = process.env.FIREBASE_PROJECT_ID;
// const storageBucket = process.env.FIREBASE_STORAGE_BUCKET;
// const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID;
// const appId = process.env.FIREBASE_APP_ID;
// const measurementId = process.env.FIREBASE_MEASUREMENT_ID;

const apiKey = 'AIzaSyBxUkE-z9jGUjRqRQFwl49oQngeSIMOy6c';
const authDomain = 'foodapp-4f6a3.firebaseapp.com';
const projectId = 'foodapp-4f6a3';
const storageBucket = 'foodapp-4f6a3.appspot.com';
const messagingSenderId = '513849025251';
const appId = '1:513849025251:web:afd3d9f3594b193b045bd6';
const measurementId = 'G-DN5TRZLDVV';

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

const reactNativePersistence = (firebaseAuth as any).getReactNativePersistence;

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: reactNativePersistence(ReactNativeAsyncStorage),
});

//export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
