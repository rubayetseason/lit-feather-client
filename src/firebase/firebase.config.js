// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz8bBKik_U5IF2YV9AF9Ctdu8ttGLugOM",
  authDomain: "litfeather-client.firebaseapp.com",
  projectId: "litfeather-client",
  storageBucket: "litfeather-client.appspot.com",
  messagingSenderId: "668139179777",
  appId: "1:668139179777:web:95a211c21e19e4ad64d500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;