/*
 * @Author: Lee
 * @Date: 2023-03-25 23:37:44
 * @LastEditTime: 2023-05-14 11:57:51
 * @LastEditors: Lee
 */

import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { Tabbar } from 'react-vant'
import { HomeO, Search, FlowerO, ManagerO } from '@react-vant/icons'

const Menu = () => {
  return (
    <>
      <div style={{ width: 100, height: 70 }}></div>
      <div className='demo-tabbar'>
        <Tabbar fixed={true}>
          <Tabbar.Item icon={<HomeO />}>
            <Link to={'/'}>首页</Link>
          </Tabbar.Item>
          <Tabbar.Item icon={<Search />}>
            <Link to={'/chat'}>ChatGpt</Link>
          </Tabbar.Item>
          <Tabbar.Item icon={<FlowerO />}>
            <Link to={'/ai-image'}>Ai绘画</Link>
          </Tabbar.Item>
          <Tabbar.Item icon={<ManagerO />}>
            <Link to={'/user-center'}>个人中心</Link>
          </Tabbar.Item>
        </Tabbar>
      </div>
    </>
  )
}

export default memo(Menu)
