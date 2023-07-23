/*
 * @Author: Lee
 * @Date: 2023-06-24 16:00:16
 * @LastEditTime: 2023-07-23 21:57:31
 * @LastEditors: Lee
 */
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Popup, PopupPosition, Image } from 'react-vant'

import UploadFile from '../Upload'
import { serviceUpdateLoadInfo } from 'src/https/user'

import styles from './index.module.scss'

const Head = () => {
  const accounToken = Cookies.get('token')
  const [state, setState] = useState<PopupPosition>('')
  const [userInfo, setUserInfo] = useState<{ [key: string]: any }>({})
  const [avatar, setAvatar] = useState<string | undefined>()

  const handleUploadAvatar = (url: string) => {
    serviceUpdateLoadInfo({ headimgurl: url, id: userInfo.id })
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    const info = Cookies.get('userInfo')
    if (info != 'undefined' && typeof info == 'string') {
      const objInfo = JSON.parse(info)
      setUserInfo(objInfo)
      setAvatar(process.env.REACT_APP_URL + objInfo.headimgurl)
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
              <div className={styles.popup_content_avatar}>
                <div className={styles.popup_content_upload}>
                  <UploadFile callBack={handleUploadAvatar} defaultValue={avatar} />
                </div>
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
