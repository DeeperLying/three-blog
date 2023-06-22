/*
 * @Author: Lee
 * @Date: 2023-06-22 15:26:30
 * @LastEditTime: 2023-06-22 15:55:53
 * @LastEditors: Lee
 */
import serviceAxios from 'src/lib/http/http'

const serviceSendEmailOTP = (payload: any) => {
  return serviceAxios({
    url: '/sendEmail',
    method: 'get',
    params: payload
  })
}

const serviceRegister = (payload: any) => {
  return serviceAxios({
    url: '/register',
    method: 'post',
    data: payload
  })
}

const serviceRegisterPhone = (payload: any) => {
  return serviceAxios({
    url: '/register/phone',
    method: 'post',
    params: payload
  })
}

export { serviceSendEmailOTP, serviceRegister, serviceRegisterPhone }
