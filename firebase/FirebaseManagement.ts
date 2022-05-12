import admin from 'firebase-admin';
import keyJson from './helpongs-firebase-key.json';
import { getApp, initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlxB-5oJDDKYwa8KiRrxi6KK_9iVyIQJk",
  authDomain: "helpongs-c9e37.firebaseapp.com",
  databaseURL: "https://helpongs-c9e37-default-rtdb.firebaseio.com",
  projectId: "helpongs-c9e37",
  storageBucket: "helpongs-c9e37.appspot.com",
  messagingSenderId: "13489519639",
  appId: "1:13489519639:web:22a7e9c93b0d6a21a13052",
  measurementId: "G-G1YDNTFYDZ"
};

const key = {
  projectId: keyJson.project_id,
  clientEmail: keyJson.client_email,
  privateKey: keyJson.private_key
};

admin.initializeApp({
  credential: admin.credential.cert(key),
  databaseURL: "https://helpongs-c9e37-default-rtdb.firebaseio.com"
});

initializeApp(firebaseConfig);
const firebaseApp = getApp();
const storage = getStorage(firebaseApp, "gs://helpongs-c9e37.appspot.com");

const storageRef = ref(storage, "gs://helpongs-c9e37.appspot.com");

const imagesFolderRef = ref(storageRef, "images");
const image = ref(imagesFolderRef, "image.jpeg");

async function getCollection(collection: string) {
  const data = [];
  await admin.firestore()
    .collection(collection)
    .get()
    .then((snapshot) => {
      snapshot.docs.map((doc) => {
        const x = doc.data();
        data.push(x);
      });
    });

  if (data.length > 0) return data; else return false;
}