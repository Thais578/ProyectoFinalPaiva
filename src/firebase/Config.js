import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB77bca1i8Vum-qmui_XXSyuVWH7NrjL9o",
  authDomain: "beanbox-8e6ab.firebaseapp.com",
  projectId: "beanbox-8e6ab",
  storageBucket: "beanbox-8e6ab.firebasestorage.app",
  messagingSenderId: "169725379131",
  appId: "1:169725379131:web:ee7ad91fe7252501e9521e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);