// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqnf7bX5vsRAqcc-pcR7rdVxX89rjhRUQ",
  authDomain: "bloggad-1add5.firebaseapp.com",
  projectId: "bloggad-1add5",
  storageBucket: "bloggad-1add5.appspot.com",
  messagingSenderId: "977515873085",
  appId: "1:977515873085:web:5266e81aac1308c24dfb54"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };