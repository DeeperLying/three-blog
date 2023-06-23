/*
 * @Author: Lee
 * @Date: 2022-12-04 16:57:58
 * @LastEditTime: 2023-06-23 19:56:22
 * @LastEditors: Lee
 */
import React from 'react'
import { Navigate } from 'react-router'

// import Home from 'pages/home/index'
import Login from 'pages/login'
import Register from 'pages/register'
import Home from 'pages/home'
import Create from 'pages/create'
import Article from 'pages/article'
import MyBlog from 'pages/my-blog'

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
    path: '/create',
    element: <Create />
  },
  {
    path: '/article/:id',
    element: <Article />
  },
  {
    path: '/my-blog',
    element: <MyBlog />
  },
  {
    path: '/',
    element: <Navigate to='/home' />
  }
]

export default RouterConfig
