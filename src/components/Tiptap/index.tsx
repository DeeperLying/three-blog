import 'vditor/dist/index.css'
import React, { useRef } from 'react'
import Vditor from 'vditor'
import { Button, Form, Input, Toast } from 'react-vant'
import { serviceSaveArticle } from 'src/https/create'
import { useNavigate } from 'react-router-dom'

const Tiptap = () => {
  const navigate = useNavigate()
  const { TextArea } = Input
  const [form] = Form.useForm()
  const vditorRef = useRef<any>(null)
  const [vd, setVd] = React.useState<Vditor>()

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
      height: '70vh'
    }))
  }, [])

  const onFinish = (values: any) => {
    console.log(vditorRef.current.getValue())
    values.text = vditorRef.current.getValue()
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

  return (
    <>
      <Form name='basic' onFinish={onFinish} autoComplete='off' form={form}>
        <Form.Item
          label='标题'
          name='title'
          rules={[{ required: true, message: 'Please input your 标题!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='作者'
          name='author'
          rules={[{ required: true, message: 'Please input your 作者!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='简介'
          name='introduction'
          rules={[{ required: true, message: 'Please input your 作者!' }]}
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
