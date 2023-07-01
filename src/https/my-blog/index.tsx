/*
 * @Author: Lee
 * @Date: 2023-06-22 15:26:30
 * @LastEditTime: 2023-06-23 19:04:11
 * @LastEditors: Lee
 */
import serviceAxios from 'src/lib/http/http'

const serviceGetUserArticleList = (payload: any) => {
  return serviceAxios({
    url: 'getUserArticleList',
    method: 'get',
    params: payload
  })
}

export { serviceGetUserArticleList }
