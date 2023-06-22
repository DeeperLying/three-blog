/*
 * @Author: Lee
 * @Date: 2023-03-25 23:41:37
 * @LastEditTime: 2023-06-18 11:49:20
 * @LastEditors: Lee
 */
import React, { JSXElementConstructor, ReactElement } from 'react'
import { Menu, Head } from 'src/components/Menu'

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
