import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzCfog6DYc4nRjeAIl2uCNNmZh3ICRM0E",
    authDomain: "olx-clone-8d322.firebaseapp.com",
    projectId: "olx-clone-8d322",
    storageBucket: "olx-clone-8d322.appspot.com",
    messagingSenderId: "801608553312",
    appId: "1:801608553312:web:4e2fcaf13727e3c78a4405",
    measurementId: "G-S7B967BVJG"
};


export const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);
export const storage  = getStorage(firebase);