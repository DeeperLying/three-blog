/*
 * @Author: Lee
 * @Date: 2023-07-02 02:37:43
 * @LastEditTime: 2023-07-02 10:53:56
 * @LastEditors: Lee
 */
import serviceAxios from 'src/lib/http/http'

const serviceUpFile = (payload: any) => {
  return serviceAxios({
    url: 'upLoad',
    headers: { 'Content-Type': 'multipart/form-data' },
    method: 'post',
    data: payload
  })
}

export { serviceUpFile }
