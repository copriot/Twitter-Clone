// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCcrXtvYT4HxAkNCBi_c05DNVnsvUbGSo",
  authDomain: "twitter-clone-7b49b.firebaseapp.com",
  projectId: "twitter-clone-7b49b",
  storageBucket: "twitter-clone-7b49b.firebasestorage.app",
  messagingSenderId: "363780166935",
  appId: "1:363780166935:web:99a96a8afb03fe1113d352",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth referansını al
export const auth = getAuth(app);

//google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

//veri tabanının referansını al

export const db = getFirestore(app);

//medya depolama alanı refaransını al
export const storage = getStorage();
