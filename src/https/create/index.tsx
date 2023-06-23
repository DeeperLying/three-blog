/*
 * @Author: Lee
 * @Date: 2023-06-22 15:26:30
 * @LastEditTime: 2023-06-23 18:47:06
 * @LastEditors: Lee
 */
import serviceAxios from 'src/lib/http/http'

const serviceSaveArticle = (payload: any) => {
  return serviceAxios({
    url: 'saveArticle',
    method: 'post',
    data: payload
  })
}

export { serviceSaveArticle }
