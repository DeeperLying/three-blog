// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js')

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyCxxSAB1Kl8ezwNoDfOKr4WKqcR-mHiw7U',
  authDomain: 'xiaomaibu-c0234.firebaseapp.com',
  databaseURL: 'https://xiaomaibu-c0234.firebaseio.com',
  projectId: 'xiaomaibu-c0234',
  storageBucket: 'xiaomaibu-c0234.appspot.com',
  messagingSenderId: '403271697888',
  appId: '1:403271697888:web:31a78309ca8531251c5785',
  measurementId: 'G-RPQF46DN67'
})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
