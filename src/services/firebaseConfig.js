import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: procces.env.REACT_APP_API_KEY,
    authDomain: procces.env.REACT_APP_AUTH_DOMAIN,
    projectId: procces.env.REACT_APP_PROJECT_ID,
    storageBucket: procces.env.REACT_APP_STORAGE,
    messagingSenderId: procces.env.REACT_APP_MESSAGING,
    appId: procces.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
