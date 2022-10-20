import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDloq2ILiQYLIIQacrLJvDSCs_xKQiQY7U',
    authDomain: 'react-comision-34775.firebaseapp.com',
    projectId: 'react-comision-34775',
    storageBucket: 'react-comision-34775.appspot.com',
    messagingSenderId: '435051624763',
    appId: '1:435051624763:web:96f472e5624da1780f1f1e',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
