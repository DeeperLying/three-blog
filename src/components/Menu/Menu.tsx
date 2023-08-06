/*
 * @Author: Lee
 * @Date: 2023-03-25 23:37:44
 * @LastEditTime: 2023-06-23 19:56:55
 * @LastEditors: Lee
 */

import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { Tabbar } from 'react-vant'
import { HomeO, Search } from '@react-vant/icons'

const Menu = () => {
  return (
    <>
      <div style={{ width: 100, height: 50 }}></div>
      <div className='demo-tabbar'>
        <Tabbar fixed={true}>
          <Tabbar.Item icon={<HomeO />}>
            <Link to={'/'}>博客首页</Link>
          </Tabbar.Item>
          <Tabbar.Item icon={<Search />}>
            <Link to={'/my-blog'}>我的博客</Link>
          </Tabbar.Item>
        </Tabbar>
      </div>
    </>
  )
}

export default memo(Menu)
