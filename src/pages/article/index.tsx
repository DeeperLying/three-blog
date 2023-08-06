/*
 * @Author: Lee
 * @Date: 2023-06-23 19:37:40
 * @LastEditTime: 2023-08-06 10:34:57
 * @LastEditors: Lee
 */
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { serviceGetArticle } from 'src/https/article'
// article Begin
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm' // 划线、表、任务列表和直接url等的语法扩展
import rehypeRaw from 'rehype-raw' // 解析标签，支持html语法
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter' // 代码高亮
//高亮的主题，还有很多别的主题，可以自行选择
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import 'github-markdown-css'
// End

import CardMedia from '@mui/material/CardMedia'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import Comment from './component/Comment'
import { serviceGetComments } from 'src/https/comment'

import styles from './index.module.scss'

const Article = (props: any) => {
  const referend = useRef<any>()
  const params = useParams()
  const [comments, setComments] = useState<any[]>([])

  const [article, setArticle] = useState<{ [key: string]: any }>({})

  useEffect(() => {
    if (params?.id) {
      serviceGetArticle({
        id: params.id
      })
        .then(({ data }: any) => {
          setArticle(data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [params])

  useEffect(() => {
    handleServiceGetComments()
  }, [params])

  const handleServiceGetComments = () => {
    serviceGetComments({ articleId: params.id })
      .then(({ code, data }: any) => {
        if (code == 200) {
          console.log(data, '=====')
          setComments(data)
        }
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className={styles.main}>
      <div>标题：{article?.title}</div>
      <div>作者：{article?.author}</div>

      {article?.banner && (
        <CardMedia
          sx={{ height: 140 }}
          image={process.env.REACT_APP_URL + article?.banner}
          title='sky 博客'
        />
      )}

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

      <Comment callBack={handleServiceGetComments} />

      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {comments.map((item: any) => (
          <div key={item.id}>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar alt={item.nickname} src={process.env.REACT_APP_URL + item.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={item.nickname}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    ></Typography>
                    {item.content}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant='inset' component='li' />
          </div>
        ))}
      </List>
    </div>
  )
}

export default Article
