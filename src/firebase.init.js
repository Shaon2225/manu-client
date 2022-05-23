// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1_9ZaoNHCspmW1bymVM3VTR-UMXrA-mw",
  authDomain: "voltlab-ed936.firebaseapp.com",
  projectId: "voltlab-ed936",
  storageBucket: "voltlab-ed936.appspot.com",
  messagingSenderId: "518419430453",
  appId: "1:518419430453:web:75137f2505a0bbad05c57c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
