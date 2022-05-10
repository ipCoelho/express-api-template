import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert("./helpongs-firebase-key.json"),
  databaseURL: "https://helpongs-c9e37-default-rtdb.firebaseio.com"
});

let data;
admin.firestore()
  .collection('cities')
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach(doc => console.log(doc.data()));
    data = snapshot.docs.map((doc) => {
      return doc.data();
    });
  });

export { data };
