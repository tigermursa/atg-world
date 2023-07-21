// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUbuqW4ettiWMc2pSPnqKMSni1q6fb_84",
  authDomain: "atg-world-42fbf.firebaseapp.com",
  projectId: "atg-world-42fbf",
  storageBucket: "atg-world-42fbf.appspot.com",
  messagingSenderId: "166058439063",
  appId: "1:166058439063:web:78c7ea1ccbbe20de5194d2"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export default app;
 