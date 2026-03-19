import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbYhmjtzvjM4Bq2Vz2s0_legcPoSksouw",
  authDomain: "cprg306-assignments-552ba.firebaseapp.com",
  projectId: "cprg306-assignments-552ba",
  storageBucket: "cprg306-assignments-552ba.firebasestorage.app",
  messagingSenderId: "204500759633",
  appId: "1:204500759633:web:57983cc15d47bbd164f470"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);