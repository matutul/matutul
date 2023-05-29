import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCb3s_VNmSrlYBd_L1KX_H3PxZNrlCGpF0",
  authDomain: "ashrafujjaman-tutul.firebaseapp.com",
  projectId: "ashrafujjaman-tutul",
  storageBucket: "ashrafujjaman-tutul.appspot.com",
  messagingSenderId: "934140677848",
  appId: "1:934140677848:web:8a6dce97b40af2d2c651ad",
  measurementId: "G-BE95Y44DFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);