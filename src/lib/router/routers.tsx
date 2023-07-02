/*
 * @Author: Lee
 * @Date: 2022-12-04 16:57:58
 * @LastEditTime: 2023-07-02 21:58:55
 * @LastEditors: Lee
 */
import React, { lazy } from 'react'
import { Navigate } from 'react-router'

// import Home from 'pages/home/index'
//import Login from 'pages/login'
// import Register from 'pages/register'
// import Home from 'pages/home'
// import Create from 'pages/create'
// import Article from 'pages/article'
// import MyBlog from 'pages/my-blog'

const Login = lazy(() => import('pages/login'))
const Register = lazy(() => import('pages/register'))
const Create = lazy(() => import('pages/create'))
const Article = lazy(() => import('pages/article'))
const MyBlog = lazy(() => import('pages/my-blog'))
const Home = lazy(() => import('pages/home'))

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
