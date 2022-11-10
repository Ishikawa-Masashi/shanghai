import { FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

function getFirebaseApp(): FirebaseApp {
  const apps = getApps();
  if (apps.length > 0) {
    return apps[0];
  }
  return initializeApp({
    apiKey: 'AIzaSyA9Q_e-HLj8wx_gLRqX19_Fvrh4NCCqbBI',
    authDomain: 'shanghai-b2fed.firebaseapp.com',
    projectId: 'shanghai-b2fed',
    storageBucket: 'shanghai-b2fed.appspot.com',
    messagingSenderId: '56680215497',
    appId: '1:56680215497:web:cc304ac4bc4b046a50ae18',
    measurementId: 'G-KEE4R2XRR0',
  });
}

const firebaseApp = getFirebaseApp();
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
