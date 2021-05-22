import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: 'AIzaSyAT786tjHvCt9xFUGPMKcKhuBxBR4SGBnU',
    authDomain: 'cherrybomb-1b1c3.firebaseapp.com',
    projectId: 'cherrybomb-1b1c3',
    storageBucket: 'cherrybomb-1b1c3.appspot.com',
    messagingSenderId: '453181308034',
    appId: '1:453181308034:web:0b790cb183aed5e7c5c89b',
    measurementId: 'G-RNZG038W6T',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
