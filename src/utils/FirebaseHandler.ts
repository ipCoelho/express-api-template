import { initializeApp, getApp, FirebaseApp } from "firebase/app";
import { FirebaseStorage, getStorage, ref, uploadBytes } from "firebase/storage";

class FirebaseHandler {
  protected firebaseConfig: object = {
    apiKey: "AIzaSyBlxB-5oJDDKYwa8KiRrxi6KK_9iVyIQJk",
    authDomain: "helpongs-c9e37.firebaseapp.com",
    databaseURL: "https://helpongs-c9e37-default-rtdb.firebaseio.com",
    projectId: "helpongs-c9e37",
    storageBucket: "helpongs-c9e37.appspot.com",
    messagingSenderId: "13489519639",
    appId: "1:13489519639:web:22a7e9c93b0d6a21a13052",
    measurementId: "G-G1YDNTFYDZ"
  };
  protected firebaseApp: FirebaseApp;
  protected storage: FirebaseStorage;
  protected bucket: string;

  constructor(bucket = "gs://helpongs-c9e37.appspot.com") {
    initializeApp(this.firebaseConfig);
    this.firebaseApp = getApp();
    this.bucket = bucket;    
    this.storage = getStorage(this.firebaseApp, this.bucket);
  }

  async uploadImage(file, contentType = "image/jpeg") {
    const fileReference = ref(this.storage, `help-ongs/media/${file.originalname}`);

    let resolve = false;
    await uploadBytes(fileReference, file.buffer, { contentType: contentType })
      .then((snapshot) => {
        if (snapshot) {
          resolve = true;
        }
      })
      .catch(error => {
        if (error) {
          console.log(`error: `, error);
          resolve = false;
        }
      });
    return resolve;
  }
}


export default FirebaseHandler;