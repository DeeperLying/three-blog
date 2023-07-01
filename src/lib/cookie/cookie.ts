/*
 * @Author: Lee
 * @Date: 2023-06-22 13:33:48
 * @LastEditTime: 2023-07-01 17:00:37
 * @LastEditors: Lee
 */

import Cookies from 'js-cookie'

const getCookies = (value: string) => {
  const data = Cookies.get(value)
  if (data) {
    return data
  } else {
    return undefined
  }
}

const getUserInfo = () => {
  const data = Cookies.get('userInfo')
  if (data) {
    return JSON.parse(data)
  } else {
    return undefined
  }
}

export { getCookies, getUserInfo }
