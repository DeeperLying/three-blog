/*
 * @Author: Lee
 * @Date: 2023-06-23 19:53:51
 * @LastEditTime: 2023-06-23 19:55:48
 * @LastEditors: Lee
 */
import React from 'react'
import { useNavigate } from 'react-router-dom'

const MyBlog = () => {
  const navigate = useNavigate()
  return (
    <>
      <div onClick={() => navigate('/create')}>发布文章</div>
      <div>功能完善中....</div>
    </>
  )
}

export default MyBlog
