/*
 * @Author: Lee
 * @Date: 2022-12-11 18:09:47
 * @LastEditTime: 2023-06-22 16:01:35
 * @LastEditors: Lee
 */

import React, { useEffect } from 'react'
import { Button, Input, Form, Toast, Tabs } from 'react-vant'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import { getQueryParams } from 'src/utils/public'
import { serviceGetWxUserAuthInfo, serviceLogin, serviceLoginPhone } from 'src/https/login'

export default function Login() {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [phoneForm] = Form.useForm()

  useEffect(() => {
    const querys = getQueryParams(window.location.search)
    if (querys?.code) {
      serviceGetWxUserAuthInfo({ code: querys?.code })
        .then(({ code, data }: any) => {
          if (code === 200 && Object.keys(data)?.length) {
            Cookies.set('token', data.token)
            Cookies.set('userInfo', JSON.stringify(data.userInfo))
            navigate('/user-center')
          }
        })
        .catch(() => {
          Toast('Login fail')
        })
    }
  }, [])

  const handleReqeustUserInfoSuccess = (token: string, data: any, code: number) => {
    if (code == 200) {
      Cookies.set('token', token)
      Cookies.set('userInfo', JSON.stringify(data))
      location.href = location.origin
    } else {
      Toast.fail('用户名或者密码不对')
    }
  }

  const onFinish = (values: any) => {
    serviceLogin({ ...values }).then(({ token, data, code }: any) => {
      handleReqeustUserInfoSuccess(token, data, code)
    })
  }

  const onPhoneFinish = (values: any) => {
    serviceLoginPhone({ ...values }).then(async ({ token, data, code }: any) => {
      handleReqeustUserInfoSuccess(token, data, code)
    })
  }

  const handleCommonFooter = () => {
    return (
      <div style={{ margin: '16px 16px 0' }}>
        <Button round nativeType='submit' type='primary' block>
          登录
        </Button>
        <Button
          round
          type='default'
          onClick={() => navigate('/register')}
          block
          style={{ marginTop: 15 }}
        >
          注册
        </Button>
      </div>
    )
  }

  return (
    <>
      <Tabs active={0}>
        <Tabs.TabPane title='邮箱登录'>
          <Form form={form} onFinish={onFinish} footer={handleCommonFooter()}>
            <Form.Item
              rules={[{ required: true, message: '请填写Email' }]}
              name='email'
              label='Email'
            >
              <Input placeholder='请输入用户名' />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: '请填写密码' }]}
              name='password'
              label='密码'
            >
              <Input placeholder='请输入密码' />
            </Form.Item>
          </Form>
        </Tabs.TabPane>

        <Tabs.TabPane title='手机登录'>
          <Form form={phoneForm} onFinish={onPhoneFinish} footer={handleCommonFooter()}>
            <Form.Item
              rules={[{ required: true, message: '请填写Phone' }]}
              name='phone'
              label='Phone'
            >
              <Input placeholder='请输入Phone' />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: '请填写密码' }]}
              name='password'
              label='密码'
            >
              <Input placeholder='请输入密码' />
            </Form.Item>
          </Form>
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}
