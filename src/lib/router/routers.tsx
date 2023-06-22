/*
 * @Author: Lee
 * @Date: 2022-12-04 16:57:58
 * @LastEditTime: 2023-06-23 00:50:16
 * @LastEditors: Lee
 */
import React from 'react'
import { Navigate } from 'react-router'

// import Home from 'pages/home/index'
import Login from 'pages/login'
import Register from 'pages/register'
import Home from 'pages/home'

const RouterConfig = [
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/',
    element: <Navigate to='/home' />
  }
]

export default RouterConfig
