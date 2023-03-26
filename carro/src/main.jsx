import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAThdC4EMFc8xKTgxO9g7lej9Z2elAro2o",
  authDomain: "carritopasteleria-31301.firebaseapp.com",
  projectId: "carritopasteleria-31301",
  storageBucket: "carritopasteleria-31301.appspot.com",
  messagingSenderId: "1009682660111",
  appId: "1:1009682660111:web:4154e4338f3c87b783dc7a",
  measurementId: "G-FJEHF7QZWF"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
/* usememo react callback */