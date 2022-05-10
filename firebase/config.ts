import { initializeApp } from 'firebase/app';
import admin from 'firebase-admin';
import { getFirestore, collection, getDocs, setDoc } from 'firebase/firestore/lite';

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
const db = getFirestore(app);
const Test = collection(db, "test");


// console.log('type: ', typeof Test, '\nTest: ', Test);

// const x = getDatabase(app);
// console.log(x)

// admin.firestore(app).collection("teste").get().then(res => console.log(res));

async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  // const citySet = await setDoc(citiesCol, {
    // cidade: "jandira"
  // })
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList);
  return cityList;
}
async function main() {
  const cities = await getCities(db);
  console.log(cities);
}

main();

// const test = getCities(db);
// console.log("firebase: \n", test);


