/*
 * @Author: Lee
 * @Date: 2023-08-19 13:00:23
 * @LastEditTime: 2023-08-19 13:00:24
 * @LastEditors: Lee
 */
import { getMessaging, getToken } from 'firebase/messaging'

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging()
getToken(messaging, {
  vapidKey:
    'BKuGA5JNGHq0_1HzGhzp97AKXwMHQiVuj6YakF2Fz5kTT3ztN3IzfXcovEz1clkxo257VY0ZAHQoycrM5_ljJFM'
})
  .then((currentToken) => {
    if (currentToken) {
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
