import admin from 'firebase-admin';
import keyJson from './helpongs-firebase-key.json';

admin.initializeApp({
  credential: admin.credential.cert(),
  databaseURL: "https://helpongs-c9e37-default-rtdb.firebaseio.com"
});

const data = [];
admin.firestore()
  .collection('cities')
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach(doc => console.log(doc.data()));
    snapshot.docs.map((doc) => {
      data.push({
        ...doc.data()
      });
    });
  });

export { data };
