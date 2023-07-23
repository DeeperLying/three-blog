/*
 * @Author: Lee
 * @Date: 2023-07-22 22:47:33
 * @LastEditTime: 2023-07-23 21:54:30
 * @LastEditors: Lee
 */
import React from 'react'
import { Uploader, Toast } from 'react-vant'
import { serviceUpFile } from 'src/https/common'

type pagePropsType = {
  defaultValue?: string | undefined
  callBack: (filePage: string) => void
}

const UploadFile = ({ callBack, defaultValue }: pagePropsType) => {
  const beforeRead = async (file: File) => {
    try {
      const formData = new FormData()
      formData.set('file', file)
      let img: any
      await serviceUpFile(formData)
        .then(({ code, data }: any) => {
          if (code == 200) {
            console.log(data, 'data')
            img = data
            callBack(img.url)
            // setBanner(data)
          }
        })
        .catch(() => {
          Toast.fail('上传文件失败')
        })
      // return包含 url 的一个对象 例如: {url:'https://img.yzcdn.cn/vant/sand.jpg'}
      return { url: process.env.REACT_APP_URL + img.url }
    } catch (error) {
      console.log(error)
      return { url: `demo_path/${file.name}` }
    }
  }

  return (
    <Uploader
      defaultValue={[{ url: defaultValue }]}
      accept='image/*'
      maxSize={5 * 1024 * 1024}
      upload={beforeRead}
      maxCount={1}
      onOversize={() => Toast.info('文件大小不能超过15kb')}
    />
  )
}

export default UploadFile
