/*
 * @Author: Lee
 * @Date: 2022-12-04 16:57:58
 * @LastEditTime: 2023-06-22 16:37:27
 * @LastEditors: Lee
 */
import React from 'react'
import { Navigate } from 'react-router'

// import Home from 'pages/home/index'
import Login from 'src/pages/login'
import Register from 'src/pages/register'
import Home from 'src/pages/home'

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
    element: <Navigate to='/Login' />
  }
]

export default RouterConfig
