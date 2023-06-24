/*
 * @Author: Lee
 * @Date: 2023-06-24 16:00:16
 * @LastEditTime: 2023-06-24 17:06:07
 * @LastEditors: Lee
 */
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Cookies from 'js-cookie'
import classNames from 'classnames'
import { Popup, PopupPosition, Image } from 'react-vant'
import { Link } from 'react-router-dom'

const Head = () => {
  const accounToken = Cookies.get('token')
  const [state, setState] = useState<PopupPosition>('')
  const [userInfo, setUserInfo] = useState<{ [key: string]: any }>({})

  useEffect(() => {
    const info = Cookies.get('userInfo')
    if (info != 'undefined' && typeof info == 'string') {
      setUserInfo(JSON.parse(info))
    } else {
      setUserInfo({})
    }
  }, [])

  const onClose = () => setState('')

  return (
    <>
      <header
        className={styles.full_page}
        id='page-header'
        style={{ backgroundImage: "url('https://i.loli.net/2021/02/07/HEhPAp6UQbLi7kZ.jpg')" }}
      >
        <nav id='nav' className={classNames([styles.nav])}>
          <span className={styles.nav_username}>{userInfo?.username}</span>
          <div className={styles.nav_menus} onClick={() => setState('right')}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
      <Popup
        visible={state === 'right'}
        style={{ width: '70%', height: '100%' }}
        position='right'
        onClose={onClose}
      >
        <div className={styles.popup_content}>
          <>
            {accounToken ? (
              <div>
                <Image
                  round
                  width='120'
                  height='120'
                  src='https://gw.alicdn.com/bao/uploaded/i3/3249194751/O1CN01JgJdfN1ky0XN3ovNv_!!2-item_pic.png_300x300q90.jpg_.webp'
                />
                <span className={styles.popup_username}>用户名：{userInfo?.username}</span>
              </div>
            ) : (
              <Link to={'/login'}>去登录...</Link>
            )}
          </>
        </div>
      </Popup>
    </>
  )
}

export default Head
