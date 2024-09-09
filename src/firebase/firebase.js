// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyB_51QhdHeyFBcWVT1jzBUxsmOMkpQfH3g',
    authDomain: 'auth-react-dc60c.firebaseapp.com',
    projectId: 'auth-react-dc60c',
    storageBucket: 'auth-react-dc60c.appspot.com',
    messagingSenderId: '844359535074',
    appId: '1:844359535074:web:45adf904b1fd99870ed1bb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
