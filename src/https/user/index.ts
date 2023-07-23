/*
 * @Author: Lee
 * @Date: 2023-07-22 23:28:51
 * @LastEditTime: 2023-07-22 23:30:02
 * @LastEditors: Lee
 */
import serviceAxios from 'src/lib/http/http'

const serviceUpdateLoadInfo = (payload: any) => {
  return serviceAxios({
    url: '/updateUserInfo',
    method: 'post',
    data: payload
  })
}

export { serviceUpdateLoadInfo }
