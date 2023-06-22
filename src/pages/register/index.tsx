/*
 * @Author: Lee
 * @Date: 2023-06-11 13:35:05
 * @LastEditTime: 2023-06-22 15:51:44
 * @LastEditors: Lee
 */
import React, { useState } from 'react'
import { Button, Form, Input, Flex, Dialog, Tabs } from 'react-vant'
import { useNavigate } from 'react-router-dom'

import { serviceSendEmailOTP, serviceRegister, serviceRegisterPhone } from 'src/https/register'

import styles from './index.module.scss'

const Register = () => {
  const navigate = useNavigate()
  const [mailForm] = Form.useForm()
  const [phoneForm] = Form.useForm()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isEmailLoading, setIsEmailLoading] = useState<boolean>(false)

  const handleSendMail = () => {
    const email = mailForm.getFieldValue('email')
    if (!/^[1-9][0-9]{4,10}@qq.com$/.test(email)) {
      return
    }

    setIsEmailLoading(true)
    serviceSendEmailOTP({ email })
      .then(({ code }: any) => {
        if (code == 200) {
          Dialog.alert({
            message: '验证码已发送到您的邮箱'
          })
        }
      })
      .finally(() => setIsEmailLoading(false))
  }

  const onFinish = (values: any) => {
    setIsLoading(true)
    serviceRegister({ values })
      .then(({ code }: any) => {
        if (code == 200) {
          Dialog.alert({
            message: '注册成功'
          })
          navigate('/login')
        } else {
          Dialog.alert({
            message: '注册失败'
          })
        }
      })
      .finally(() => setIsLoading(false))
  }

  const onPhoneFinish = (values: any) => {
    setIsLoading(true)
    serviceRegisterPhone({ values })
      .then(({ code }: any) => {
        if (code == 200) {
          Dialog.alert({
            message: '注册成功'
          })
          navigate('/login')
        } else {
          Dialog.alert({
            message: '注册失败'
          })
        }
      })
      .finally(() => setIsLoading(false))
  }

  const handleCommonFooter = () => {
    return (
      <div style={{ margin: '16px 16px 0' }}>
        <Button round nativeType='submit' type='primary' loading={isLoading} block>
          注册
        </Button>
        <Button
          round
          type='default'
          onClick={() => navigate('/login')}
          block
          style={{ marginTop: 15 }}
        >
          登录
        </Button>
      </div>
    )
  }

  return (
    <div>
      <Tabs active={0}>
        <Tabs.TabPane title='邮箱注册'>
          <Form form={mailForm} onFinish={onFinish} footer={handleCommonFooter()}>
            <Form.Item
              name='username'
              label='UserName'
              rules={[{ required: true }]}
              className={styles.field}
            >
              <Input />
            </Form.Item>

            <Flex justify='center' align='center'>
              <Flex.Item span={16}>
                <Form.Item
                  name='email'
                  label='Email'
                  rules={[
                    { required: true },
                    {
                      pattern: /^[1-9][0-9]{4,10}@qq.com$/,
                      message: '请输入正确的QQ邮箱'
                    }
                  ]}
                  intro='目前仅支持QQ邮箱📮'
                >
                  <Input />
                </Form.Item>
              </Flex.Item>
              <Flex.Item span={8}>
                <Button type='primary' onClick={handleSendMail} loading={isEmailLoading}>
                  发送邮件
                </Button>
              </Flex.Item>
            </Flex>

            <Form.Item
              name='code'
              label='code'
              rules={[{ required: true, len: 6 }]}
              className={styles.field}
            >
              <Input type='number' maxLength={6} minLength={6} />
            </Form.Item>

            <Form.Item
              name='password'
              label='PassWord'
              rules={[{ required: true }]}
              className={styles.field}
            >
              <Input type='password' />
            </Form.Item>
          </Form>
        </Tabs.TabPane>
        <Tabs.TabPane title='手机号码注册'>
          <Form form={phoneForm} onFinish={onPhoneFinish} footer={handleCommonFooter()}>
            <Form.Item
              name='username'
              label='UserName'
              rules={[{ required: true }]}
              className={styles.field}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name='phone'
              label='Phone'
              rules={[
                { required: true },
                {
                  pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
                  message: '请输入正确的手机号'
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name='password'
              label='PassWord'
              rules={[{ required: true }]}
              className={styles.field}
            >
              <Input type='password' />
            </Form.Item>
          </Form>
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default Register
