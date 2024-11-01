// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC3EgSpNviovsy3mBQFzEua56t4QOjdoqI',
  authDomain: 'sprint7-starwars.firebaseapp.com',
  projectId: 'sprint7-starwars',
  storageBucket: 'sprint7-starwars.appspot.com',
  messagingSenderId: '736581128835',
  appId: '1:736581128835:web:2877bfbcefd1e2f504c1b6',
  measurementId: 'G-L7FNQ716N1'
}

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig)
export const authFirebase = getAuth(appFirebase)