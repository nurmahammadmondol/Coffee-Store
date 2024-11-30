// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCpSCREt7-WSKB5J3BKwDlbthKGgekUiXg',
  authDomain: 'coffee-store-e0e15.firebaseapp.com',
  projectId: 'coffee-store-e0e15',
  storageBucket: 'coffee-store-e0e15.firebasestorage.app',
  messagingSenderId: '475151642733',
  appId: '1:475151642733:web:f8ea72e6269c857f830f64',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
