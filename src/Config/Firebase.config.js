// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC994LbAyhVFpLjKCXHb9Ns5kGI4P73ygg",
  authDomain: "medcarehub-52d59.firebaseapp.com",
  projectId: "medcarehub-52d59",
  storageBucket: "medcarehub-52d59.appspot.com",
  messagingSenderId: "606610522486",
  appId: "1:606610522486:web:d96ff6505aa5e4a1397a57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth