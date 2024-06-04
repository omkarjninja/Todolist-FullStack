// // src/firebase.js
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyC4eH0vYmSEQ8O10ULVzyrraX5kSB6xF9g",
//     authDomain: "trial01-9d09c.firebaseapp.com",
//     projectId: "trial01-9d09c",
//     storageBucket: "trial01-9d09c.appspot.com",
//     messagingSenderId: "933052627835",
//     appId: "1:933052627835:web:370ef98bd9dab4a5f1dbde",
//     measurementId: "G-ES7HFYYP1L"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

// export { auth };


// // src/firebase.js
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyC4eH0vYmSEQ8O10ULVzyrraX5kSB6xF9g",
//   authDomain: "trial01-9d09c.firebaseapp.com",
//   projectId: "trial01-9d09c",
//   storageBucket: "trial01-9d09c.appspot.com",
//   messagingSenderId: "933052627835",
//   appId: "1:933052627835:web:370ef98bd9dab4a5f1dbde",
//   measurementId: "G-ES7HFYYP1L"
// };


// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();



// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4eH0vYmSEQ8O10ULVzyrraX5kSB6xF9g",
  authDomain: "trial01-9d09c.firebaseapp.com",
  projectId: "trial01-9d09c",
  storageBucket: "trial01-9d09c.appspot.com",
  messagingSenderId: "933052627835",
  appId: "1:933052627835:web:370ef98bd9dab4a5f1dbde",
  measurementId: "G-ES7HFYYP1L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
