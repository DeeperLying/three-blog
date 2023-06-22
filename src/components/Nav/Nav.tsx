/*
 * @Author: Lee
 * @Date: 2023-03-25 23:43:27
 * @LastEditTime: 2023-03-26 00:07:40
 * @LastEditors: Lee
 */

import React, { useState } from 'react'
import { Toast, NavBar } from 'react-vant'
import { Search } from '@react-vant/icons'

const Nav = () => {
  const [pageHistory] = useState(history.length)

  const handleBackPage = () => {
    console.log(history.length)
    history.back()
  }

  return (
    <NavBar
      title='标题'
      leftText={pageHistory ? '返回' : null}
      onClickLeft={() => handleBackPage()}
      rightText={<Search fontSize={20} />}
      onClickRight={() => Toast('按钮')}
    />
  )
}

export default Nav
