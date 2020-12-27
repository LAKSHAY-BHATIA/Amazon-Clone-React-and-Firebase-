import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuGD-M-hBRD8_UF3apP-7141dyBSsZ36w",
    authDomain: "clone-ccb3f.firebaseapp.com",
    projectId: "clone-ccb3f",
    storageBucket: "clone-ccb3f.appspot.com",
    messagingSenderId: "181737479162",
    appId: "1:181737479162:web:bc901fadc3bcc0fbb9a243",
    measurementId: "G-TPV4MER7SC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db,auth};
  