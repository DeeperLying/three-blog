/*
 * @Author: Lee
 * @Date: 2023-08-20 15:28:56
 * @LastEditTime: 2023-08-27 01:21:19
 * @LastEditors: Lee
 */
import serviceAxios from 'src/lib/http/http'

const serviceFetchSendMessage = () => {
  return serviceAxios({
    url: '/firebase/sendMessage',
    method: 'get'
  })
}

const serviceFetchSaveToken = (data: any) => {
  return serviceAxios({
    url: '/firebase/saveToken',
    method: 'post',
    data
  })
}

export { serviceFetchSendMessage, serviceFetchSaveToken }
