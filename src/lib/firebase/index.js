/*
 * @Author: Lee
 * @Date: 2023-08-19 12:38:28
 * @LastEditTime: 2023-08-19 13:01:17
 * @LastEditors: Lee
 */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getMessaging } from 'firebase/messaging'
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
