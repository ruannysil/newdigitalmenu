import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmehyI5ZFm_1eR2lFmpEEZndizAeEiWmU",
  authDomain: "new-cardapio.firebaseapp.com",
  projectId: "new-cardapio",
  storageBucket: "new-cardapio.appspot.com",
  messagingSenderId: "739876503269",
  appId: "1:739876503269:web:8aca7c8bbab85f69c51e0c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)


export {db, auth};