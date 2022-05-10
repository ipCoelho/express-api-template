import { initializeApp } from 'firebase/app';
import firestore from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBlxB-5oJDDKYwa8KiRrxi6KK_9iVyIQJk",
  authDomain: "helpongs-c9e37.firebaseapp.com",
  projectId: "helpongs-c9e37",
  storageBucket: "helpongs-c9e37.appspot.com",
  messagingSenderId: "13489519639",
  appId: "1:13489519639:web:22a7e9c93b0d6a21a13052",
  measurementId: "G-G1YDNTFYDZ"
};

const app = initializeApp(firebaseConfig);
const db = firestore.getFirestore(app);

export default async function getCollection(collectionName: string) {
  const collectionData = firestore.collection(db, collectionName);
  const colSnapshot = await firestore.getDocs(collectionData);
  const collectionList = colSnapshot.docs.map(doc => doc.data());
  return collectionList;
}


