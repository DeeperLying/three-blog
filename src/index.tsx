/*
 * @Author: Lee
 * @Date: 2023-05-28 12:40:58
 * @LastEditTime: 2023-08-19 13:02:49
 * @LastEditors: Lee
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import '/src/lib/firebase/index.js'
import './firebase-messaging-sw.js'

import App from './App'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  //<React.StrictMode>
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
  //</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
