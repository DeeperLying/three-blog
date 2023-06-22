/*
 * @Author: Lee
 * @Date: 2023-02-26 16:09:48
 * @LastEditTime: 2023-02-26 16:52:48
 * @LastEditors: Lee
 */

export function getWxUserAuthCode() {
  const appId = 'wx058da0ae05bcf944'
  const redirect_uri = encodeURIComponent('http://blog.xiaomaibu.pro/login')
  const getWxUserAuthCode = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo#wechat_redirect`
  location.replace(getWxUserAuthCode)
}
