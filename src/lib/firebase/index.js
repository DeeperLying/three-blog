/*
 * @Author: Lee
 * @Date: 2023-08-19 12:38:28
 * @LastEditTime: 2023-08-20 03:11:10
 * @LastEditors: Lee
 */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getMessaging, getToken, onMessage, isSupported } from 'firebase/messaging'
import { useEffect } from 'react'
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

const useInitFirebaseHook = () => {
  // Initialize Firebase
  useEffect(() => {
    let messaging = null
    if (isSupported()) {
      const app = initializeApp(firebaseConfig)
      const analytics = getAnalytics(app)
      messaging = getMessaging(app)
    }

    if (isSupported()) {
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
    }

    function requestPermission() {
      console.log('浏览器notification auth1')
      if ('Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window) {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            console.log('Notification permission granted.')
          }
        })
      }
    }

    requestPermission()

    if (isSupported()) {
      onMessage(messaging, (payload) => {
        console.log('Message received. ', payload)
        if ('Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window) {
          const title = payload.notification.title
          const content = payload.notification.body
          const icon = 'https://blog.xiaomaibu.pro/xiaomaibu.png'
          new Notification(title, {
            body: content,
            icon
          })
        }
        // ...
      })
    }
  }, [])
}

export default useInitFirebaseHook
