/*
 * @Author: Lee
 * @Date: 2022-12-03 20:59:01
 * @LastEditTime: 2023-06-22 16:03:28
 * @LastEditors: Lee
 */
import React, { ReactElement } from 'react'
import { useRoutes } from 'react-router'
// import wx from 'weixin-js-sdk'

import Layout from 'src/components/Layout/Layout'

import './App.css'

import RouterConfig from 'src/lib/router/routers'
// import { getWxUserAuthCode } from './utils/wx_auth'

function App(): ReactElement {
  // useEffect(() => {
  //   if (!wx.ready()) {
  //     wx.config({
  //       debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  //       appId: 'wx058da0ae05bcf944', // 必填，公众号的唯一标识
  //       timestamp: '1677338755', // 必填，生成签名的时间戳
  //       nonceStr: 'test', // 必填，生成签名的随机串
  //       signature: '71775ec422243d28d96740897db248cea0de5d3f', // 必填，签名
  //       jsApiList: ['getLocation'] // 必填，需要使用的JS接口列表
  //     })
  //   }
  // }, [])

  const element = useRoutes(RouterConfig)
  return (
    <div className='App'>
      <Layout>{element}</Layout>
    </div>
  )
}

export default App
