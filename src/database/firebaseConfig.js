import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBcDuDpZB5BNNQJRpkjYeetoLZGUghU_8o",
    authDomain: "am-project-1ce60.firebaseapp.com",
    databaseURL: "https://am-project-1ce60-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "am-project-1ce60",
    storageBucket: "am-project-1ce60.appspot.com",
    messagingSenderId: "67381482565",
    appId: "1:67381482565:web:64cf5a832e01142da3bf2c",
    measurementId: "G-G9MDQQENPF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

export {app, auth, database, storage};