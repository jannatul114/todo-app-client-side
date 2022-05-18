// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfFlOh2pceTZIH_0Cl_XEnCrIpw7QXJHM",
    authDomain: "todo-app-client-side.firebaseapp.com",
    projectId: "todo-app-client-side",
    storageBucket: "todo-app-client-side.appspot.com",
    messagingSenderId: "667537248795",
    appId: "1:667537248795:web:7d790348ec032dc3cedebe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;