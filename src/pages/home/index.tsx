/*
 * @Author: Lee
 * @Date: 2023-06-22 15:22:19
 * @LastEditTime: 2023-06-23 19:58:36
 * @LastEditors: Lee
 */
import React, { useEffect, useState } from 'react'
import { Card } from 'react-vant'
import { serviceGetArticleList } from 'src/https/home'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [articleList, setArticleList] = useState<[]>([])

  useEffect(() => {
    serviceGetArticleList({ pageSize: 20, currentPage: 0 })
      .then(({ data }: any) => {
        console.log(data)
        setArticleList(data)
      })
      .catch(() => {
        //
      })
  }, [])
  return (
    <div>
      {articleList.map((item: any) => (
        <Card
          key={item.id}
          round
          className={styles.card}
          onClick={() => navigate('/article/' + item.id)}
        >
          <Card.Header>{item.title}</Card.Header>
          <Card.Body>{item.introduction}</Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default Home
