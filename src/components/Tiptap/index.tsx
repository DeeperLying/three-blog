import 'vditor/dist/index.css'
import React, { useRef, useState } from 'react'
import Vditor from 'vditor'
import { Button, Form, Input, Toast, Uploader } from 'react-vant'
import { serviceSaveArticle } from 'src/https/create'
import { useNavigate } from 'react-router-dom'
import { getUserInfo } from 'src/lib/cookie/cookie'
import { serviceUpFile } from 'src/https/common'

const Tiptap = () => {
  const navigate = useNavigate()
  const userInfo = getUserInfo()
  const { TextArea } = Input
  const [form] = Form.useForm()
  const vditorRef = useRef<any>(null)
  const [vd, setVd] = React.useState<Vditor>()
  const [banner, setBanner] = useState<{ [key: string]: any }>({})

  React.useEffect(() => {
    const vditor = (vditorRef.current = new Vditor('vditor', {
      after: () => {
        setVd(vditor)
      },
      theme: 'classic',
      toolbar: [
        'emoji',
        'headings',
        'bold',
        'italic',
        'strike',
        'link',
        '|',
        'list',
        'ordered-list',
        'check',
        'outdent',
        'indent',
        '|',
        'quote',
        'line',
        'code',
        'inline-code',
        'insert-before',
        'insert-after',
        '|',
        'upload',
        'record',
        'table',
        '|',
        'undo',
        'redo',
        '|',
        'fullscreen',
        'edit-mode',
        {
          name: 'more',
          toolbar: [
            'both',
            'code-theme',
            'content-theme',
            'export',
            'outline',
            'preview',
            'devtools',
            'info',
            'help'
          ]
        }
      ],
      toolbarConfig: {
        hide: false,
        pin: false
      },
      mode: 'sv',
      height: '70vh',
      cache: {
        enable: false
      }
    }))
  }, [])

  const onFinish = (values: any) => {
    values.text = vditorRef.current.getValue()
    values.text_html = vditorRef.current.getHTML()
    values.userId = userInfo.id
    values.author = userInfo.username
    values.banner = banner?.url

    serviceSaveArticle(values)
      .then(({ code }: any) => {
        if (code === 200) {
          Toast.success('文章创建成功, 快去首页看看吧～')
          navigate('/home')
        }
      })
      .catch(() => {
        Toast.fail('创建文件失败,请重新尝试')
      })
  }

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
            setBanner(data)
          }
        })
        .catch(() => {
          Toast.fail('上传文件失败')
        })
      // return包含 url 的一个对象 例如: {url:'https://img.yzcdn.cn/vant/sand.jpg'}
      return { url: process.env.REACT_APP_URL + img.url }
    } catch (error) {
      return { url: `demo_path/${file.name}` }
    }
  }

  return (
    <>
      <Form name='basic' onFinish={onFinish} autoComplete='off' form={form}>
        <Form.Item label='标题' name='title' rules={[{ required: true, message: '请输入标题' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name='uploader'
          label='上传文件'
          rules={[{ required: true, message: '请选择文件' }]}
        >
          <Uploader
            accept='image/*'
            maxSize={5 * 1024 * 1024}
            upload={beforeRead}
            maxCount={1}
            onOversize={() => Toast.info('文件大小不能超过15kb')}
          />
        </Form.Item>
        <span>不能大于5M</span>

        <Form.Item
          label='简介'
          name='introduction'
          rules={[{ required: true, message: '请输入简介' }]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type='primary' nativeType='submit'>
            发布文章
          </Button>
        </Form.Item>
      </Form>
      <div id='vditor' className='vditor' />
    </>
  )
}

export default Tiptap
