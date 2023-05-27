import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAiEKd61Ei_S1WJwWq9c7RG8s0gWM_q3_g',
  authDomain: 'test-firebase-next-789f6.firebaseapp.com',
  projectId: 'test-firebase-next-789f6',
  storageBucket: 'test-firebase-next-789f6.appspot.com',
  messagingSenderId: '508754779673',
  appId: '1:508754779673:web:0ed81ae1e6dc3f0b801488',
  measurementId: 'G-Z920BVTK7C'
}

try {
  firebase.initializeApp(firebaseConfig)
} catch (error: any) {
  console.error('Firebase initialization error', error.stack)
}

export const firestore = firebase.firestore()
