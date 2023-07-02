/*
 * @Author: Lee
 * @Date: 2023-07-02 22:53:51
 * @LastEditTime: 2023-07-02 23:00:09
 * @LastEditors: Lee
 */
import React from 'react'
import { Loading as LoadingAnimation } from 'react-vant'
import styles from './Loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.main}>
      <LoadingAnimation style={{ display: 'inline-flex' }} size='24px' vertical>
        加载中...
      </LoadingAnimation>
    </div>
  )
}

export default Loading
