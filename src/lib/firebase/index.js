/*
 * @Author: Lee
 * @Date: 2023-08-19 12:38:28
 * @LastEditTime: 2023-08-19 16:47:57
 * @LastEditors: Lee
 */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getMessaging, getToken } from 'firebase/messaging'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCxxSAB1Kl8ezwNoDfOKr4WKqcR-mHiw7U',
  authDomain: 'xiaomaibu-c0234.firebaseapp.com',
  projectId: 'xiaomaibu-c0234',
  storageBucket: 'xiaomaibu-c0234.appspot.com',
  messagingSenderId: '403271697888',
  appId: '1:403271697888:web:31a78309ca8531251c5785',
  measurementId: 'G-RPQF46DN67'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const messaging = getMessaging(app)

getToken(messaging, {
  vapidKey:
    'BKuGA5JNGHq0_1HzGhzp97AKXwMHQiVuj6YakF2Fz5kTT3ztN3IzfXcovEz1clkxo257VY0ZAHQoycrM5_ljJFM'
})
  .then((currentToken) => {
    if (currentToken) {
      console.log(currentToken, 'service worker')
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.')
      // ...
    }
  })
  .catch((err) => {
    console.log('An error occurred while retrieving token. ', err)
    // ...
  })

function requestPermission() {
  console.log('Requesting permission...')
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.')
    }
  })
}

requestPermission()
