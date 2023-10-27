import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAme_Ua081lal4dGu7EaKveZ4COZWJ1yMM",
    authDomain: "netflix-clone-yt-2fc03.firebaseapp.com",
    projectId: "netflix-clone-yt-2fc03",
    storageBucket: "netflix-clone-yt-2fc03.appspot.com",
    messagingSenderId: "658494574776",
    appId: "1:658494574776:web:70dcebb4058aa291f8644d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
  
export { app, db, auth };