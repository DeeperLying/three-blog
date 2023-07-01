/*
 * @Author: Lee
 * @Date: 2023-06-22 15:22:19
 * @LastEditTime: 2023-07-01 16:34:40
 * @LastEditors: Lee
 */
import React, { useEffect, useState } from 'react'
import { Card, Empty } from 'react-vant'
import { serviceGetArticleList } from 'src/https/home'
import styles from './index.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import Head from 'src/components/Head'

const Home = () => {
  const navigate = useNavigate()
  const [articleList, setArticleList] = useState<[]>([])

  useEffect(() => {
    serviceGetArticleList({ pageSize: 20, currentPage: 0 })
      .then(({ data }: any) => {
        setArticleList(data)
      })
      .catch(() => {
        //
      })
  }, [])
  return (
    <>
      <div>
        {articleList.length ? (
          articleList.map((item: any) => (
            <Card
              key={item.id}
              round
              className={styles.card}
              onClick={() => navigate('/article/' + item.id)}
            >
              <Card.Header>{item.title}</Card.Header>
              <Card.Body>{item.introduction}</Card.Body>
            </Card>
          ))
        ) : (
          <div>
            <Empty description='还未发布文章' />
            <Link to={'/create'}>去发表文章</Link>
          </div>
        )}
      </div>
    </>
  )
}

export default Home
