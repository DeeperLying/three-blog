/*
 * @Author: Lee
 * @Date: 2023-03-25 23:41:37
 * @LastEditTime: 2023-06-24 16:04:57
 * @LastEditors: Lee
 */
import React, { JSXElementConstructor, ReactElement } from 'react'
import { Menu } from 'src/components/Menu'
import Head from '../Head'

type propsType = ReactElement<any, string | JSXElementConstructor<any>> | null

const Layout = (props: { children: propsType }) => {
  const { children } = props
  return (
    <div>
      <Head />
      {children}
      <Menu />
    </div>
  )
}

export default Layout
