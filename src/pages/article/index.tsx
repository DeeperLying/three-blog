/*
 * @Author: Lee
 * @Date: 2023-06-23 19:37:40
 * @LastEditTime: 2023-06-24 15:31:01
 * @LastEditors: Lee
 */
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { serviceGetArticle } from 'src/https/article'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm' // 划线、表、任务列表和直接url等的语法扩展
import rehypeRaw from 'rehype-raw' // 解析标签，支持html语法
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter' // 代码高亮
//高亮的主题，还有很多别的主题，可以自行选择
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import 'github-markdown-css'

const Article = (props: any) => {
  const referend = useRef<any>()
  const params = useParams()
  const [article, setArticle] = useState<{ [key: string]: any }>({})

  useEffect(() => {
    if (params?.id) {
      serviceGetArticle({
        id: params.id
      }).then(({ data }: any) => {
        setArticle(data)
      })
    }
  }, [params])

  const markdown =
    '## 只求极致222\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n' +
    '**这是加粗的文字**\n' +
    '*这是倾斜的文字*`\n' +
    '***这是斜体加粗的文字***\n' +
    '~~这是加删除线的文字~~ \n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n' +
    '***\n' +
    '*****\n' +
    '`code html`'

  return (
    <div style={{ padding: 20 }}>
      <div>标题：{article?.title}</div>
      <div>作者：{article?.author}</div>

      <ReactMarkdown
        className='markdown-body'
        // eslint-disable-next-line react/no-children-prop
        children={article.text}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                // eslint-disable-next-line react/no-children-prop
                children={String(children).replace(/\n$/, '')}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                style={tomorrow}
                language={match[1]}
                PreTag='div'
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      />
    </div>
  )
}

export default Article
