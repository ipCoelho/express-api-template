import { initializeApp, getApp, FirebaseApp } from "firebase/app";
import { deleteObject, FirebaseStorage, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

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

  async uploadUint8Array(uiArray: Uint8Array, path: string, contentType = "image/jpeg") {
    const fileReference = ref(this.storage, `help-ongs/media/${path}`);

    let resolve = false;
    await uploadBytes(fileReference, uiArray, { contentType: contentType })
      .then((snapshot) => {
        if (snapshot) {
          resolve = true;
        }
      })
      .catch(error => {
        if (error) {
          resolve = false;
        }
      });
    return resolve;
  }

  async getMediaUrl(path: string): Promise<string> {
    const fileReference = ref(this.storage, path);
    const url: string = await getDownloadURL(fileReference);
    
    return url;
  }

  async deleteFile(path: string) {
    const fileReference = ref(this.storage, `help-ongs/media/${path}`);
    let resolve: boolean;
    await deleteObject(fileReference)
      .then(() => {
        resolve = true;
      })
      .catch(error => {
        if (error) {
          resolve = false;
          console.log(`Error on deleting file from bucket: `, error);
        }
      });
      
    return resolve;
  }
}


export default FirebaseHandler;