/*
 * @Author: Lee
 * @Date: 2023-06-18 11:45:46
 * @LastEditTime: 2023-06-23 00:50:40
 * @LastEditors: Lee
 */
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from 'react-vant'
import styles from './index.module.scss'

const Head = () => {
  const navigate = useNavigate()
  const accounToken = Cookies.get('token')
  const [userInfo, setUserInfo] = useState<{ [key: string]: any }>({})

  useEffect(() => {
    const info = Cookies.get('userInfo')
    if (info != 'undefined' && typeof info == 'string') {
      setUserInfo(JSON.parse(info))
    } else {
      setUserInfo({})
    }
  }, [])

  return (
    <>
      {accounToken ? (
        <div className={styles.head}>
          <div>已登陆</div>
          <div>用户名:{userInfo?.username}</div>
        </div>
      ) : (
        <>
          <div style={{ textAlign: 'left' }}>
            <Button type='primary' onClick={() => navigate('/login')}>
              登录
            </Button>
            <Button onClick={() => navigate('/register')}>注册</Button>
          </div>
          <Typography.Text>您还未登录</Typography.Text>
        </>
      )}
    </>
  )
}

export default Head
