
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAz6qUduz0rzBs9N_X_wwo1hyrsOhSioPE",
  authDomain: "fir-course-55005.firebaseapp.com",
  projectId: "fir-course-55005",
  storageBucket: "fir-course-55005.appspot.com",
  messagingSenderId: "599759169046",
  appId: "1:599759169046:web:8561f3a71ece5aa18f3737",
  measurementId: "G-S7JZSEHV0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);

