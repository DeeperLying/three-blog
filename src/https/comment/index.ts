/*
 * @Author: Lee
 * @Date: 2023-08-05 15:24:35
 * @LastEditTime: 2023-08-06 16:31:48
 * @LastEditors: Lee
 */
import serviceAxios from 'src/lib/http/http'

const serviceCommentSave = (payload: any) => {
  return serviceAxios({
    url: 'comment/save',
    method: 'post',
    data: payload
  })
}

const serviceGetComments = (payload: any) => {
  return serviceAxios({
    url: 'comment/getComments',
    method: 'get',
    params: payload
  })
}

const serviceGetCommentChildren = (payload: any) => {
  return serviceAxios({
    url: 'comment/getCommentChildren',
    method: 'get',
    params: payload
  })
}

export { serviceCommentSave, serviceGetComments, serviceGetCommentChildren }
