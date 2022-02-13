import firebase from 'firebase';

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs53JRgSifdTghrFjBEfN4mBJ5dU6b_NM",
  authDomain: "medicine-app-8e1b9.firebaseapp.com",
  databaseURL: "https://medicine-app-8e1b9-default-rtdb.firebaseio.com",
  projectId: "medicine-app-8e1b9",
  storageBucket: "medicine-app-8e1b9.appspot.com",
  messagingSenderId: "121672949396",
  appId: "1:121672949396:web:5da2165dd5bcd515645e81",
  measurementId: "G-NLX416MCPR"
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();