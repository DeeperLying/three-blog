/*
 * @Author: Lee
 * @Date: 2023-06-22 15:26:30
 * @LastEditTime: 2023-06-23 19:42:12
 * @LastEditors: Lee
 */
import serviceAxios from 'src/lib/http/http'

const serviceGetArticle = (payload: any) => {
  return serviceAxios({
    url: 'getArticle',
    method: 'get',
    params: payload
  })
}

export { serviceGetArticle }
