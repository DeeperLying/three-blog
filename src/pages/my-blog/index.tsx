/*
 * @Author: Lee
 * @Date: 2023-06-23 19:53:51
 * @LastEditTime: 2023-06-24 00:55:11
 * @LastEditors: Lee
 */
import React from 'react'
import { Link } from 'react-router-dom'

const MyBlog = () => {
  return (
    <>
      <Link to={'/create'}>去发表文章</Link>
      <div>功能完善中....</div>
    </>
  )
}

export default MyBlog
