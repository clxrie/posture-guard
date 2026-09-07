import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDK71B7Jrw6fyvAH1-MwZJH_O4BHNFlDuU",
  authDomain: "posture-guard-e4eb6.firebaseapp.com",
  databaseURL: "https://posture-guard-e4eb6-default-rtdb.firebaseio.com",
  projectId: "posture-guard-e4eb6",
  storageBucket: "posture-guard-e4eb6.firebasestorage.app",
  messagingSenderId: "188848975344",
  appId: "1:188848975344:web:ccfd1a5f194b9958cf4135",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);