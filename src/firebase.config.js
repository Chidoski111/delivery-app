import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkwhZiDCvfl-92zBSaihXnFDuH_wBNewo",
  authDomain: "restaurantapp-522bb.firebaseapp.com",
  databaseURL: "https://restaurantapp-522bb-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-522bb",
  storageBucket: "restaurantapp-522bb.appspot.com",
  messagingSenderId: "408675828295",
  appId: "1:408675828295:web:d5d7692c03c26fcc48a762",
  measurementId: "G-0QPW5WBQ97",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
