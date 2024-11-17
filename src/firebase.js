import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDLbhLu72BktYA1Kg06SNsg-Le9dkhrp2k",
    authDomain: "medvox-3f750.firebaseapp.com",
    projectId: "medvox-3f750",
    storageBucket: "medvox-3f750.firebasestorage.app",
    messagingSenderId: "375602001802",
    appId: "1:375602001802:web:58df2624b339b4b14eba73",
    measurementId: "G-9M79WWF953"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
