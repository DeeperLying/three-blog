/*
 * @Author: Lee
 * @Date: 2023-06-22 15:26:30
 * @LastEditTime: 2023-06-22 16:01:17
 * @LastEditors: Lee
 */
import serviceAxios from 'src/lib/http/http'

const serviceGetWxUserAuthInfo = (payload: any) => {
  return serviceAxios({
    url: 'getWxUserAuthInfo',
    method: 'get',
    params: payload
  })
}

const serviceLogin = (payload: any) => {
  return serviceAxios({
    url: 'login',
    method: 'post',
    data: payload
  })
}

const serviceLoginPhone = (payload: any) => {
  return serviceAxios({
    url: 'login/phone',
    method: 'post',
    data: payload
  })
}

export { serviceGetWxUserAuthInfo, serviceLogin, serviceLoginPhone }
