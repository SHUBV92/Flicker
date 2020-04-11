import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAWFvEMyq4We-3tiLrnrbrmaen_u6gc3vg",
    authDomain: "react-firebase-5d023.firebaseapp.com",
    databaseURL: "https://react-firebase-5d023.firebaseio.com",
    projectId: "react-firebase-5d023",
    storageBucket: "react-firebase-5d023.appspot.com",
    messagingSenderId: "990854518423",
    appId: "1:990854518423:web:be319ef263a3f87c7e3bd2",
    measurementId: "G-5V5M2EE3WK"
};
firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export default firebase;