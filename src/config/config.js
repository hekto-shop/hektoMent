import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBM-eOSyPk_m4t2OHhJYxikhPW_TiKcpJ4",
    authDomain: "ecom-hecto-ment.firebaseapp.com",
    projectId: "ecom-hecto-ment",
    storageBucket: "ecom-hecto-ment.appspot.com",
    messagingSenderId: "571292004603",
    appId: "1:571292004603:web:cf612208d4d3d9c208405e",
    measurementId: "G-CWB446E1PB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export {auth, db , storage  }