/*
 * @Author: Lee
 * @Date: 2023-02-26 16:32:20
 * @LastEditTime: 2023-03-04 22:10:34
 * @LastEditors: Lee
 */

export function getQueryParams(url: string) {
  const paramArr = url.slice(url.indexOf('?') + 1).split('&')
  const params = <any>{}
  paramArr.map((param) => {
    const [key, val] = param.split('=')
    params[key] = decodeURIComponent(val)
  })
  return params
}

//获取当前环境
export function getEnvironment() {
  //判断当前环境（微信/其他）
  const ua = navigator.userAgent.toLowerCase()
  if (ua?.match(/MicroMessenger/i)) {
    return true
  } else {
    return false
  }
}
