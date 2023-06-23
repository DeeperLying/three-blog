/*
 * @Author: Lee
 * @Date: 2023-06-23 19:37:40
 * @LastEditTime: 2023-06-23 19:51:59
 * @LastEditors: Lee
 */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { serviceGetArticle } from 'src/https/article'

const Article = (props: any) => {
  const params = useParams()
  const [article, setArticle] = useState<{ [key: string]: any }>({})

  useEffect(() => {
    if (params?.id) {
      serviceGetArticle({
        id: params.id
      }).then(({ data }: any) => {
        console.log(data, '====')
        setArticle(data)
      })
    }
    //
    console.log(params.id)
  }, [params])

  return (
    <div style={{ padding: 20 }}>
      <div>{article?.title}</div>
      <div>{article?.author}</div>
      <div dangerouslySetInnerHTML={{ __html: article.text }} />
    </div>
  )
}

export default Article
