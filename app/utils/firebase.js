import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBhlO77D5eOmALGwLV8ssKFyPnvUwhxb6I",
    authDomain: "notes-proyect.firebaseapp.com",
    projectId: "notes-proyect",
    storageBucket: "notes-proyect.appspot.com",
    messagingSenderId: "248816507258",
    appId: "1:248816507258:web:79c48f7bb8c5f073d41ec3"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);


