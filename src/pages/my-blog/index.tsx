/*
 * @Author: Lee
 * @Date: 2023-06-23 19:53:51
 * @LastEditTime: 2023-07-02 00:41:52
 * @LastEditors: Lee
 */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUserInfo } from 'src/lib/cookie/cookie'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { serviceGetUserArticleList } from 'src/https/my-blog'

import styles from './index.module.scss'

const MyBlog = () => {
  const navigate = useNavigate()
  const userInfo = getUserInfo()
  const [userArticleList, setUserArticleList] = useState<[any]>([{}])

  useEffect(() => {
    handleGetUserArticleList()
  }, [])

  const handleGetUserArticleList = () => {
    serviceGetUserArticleList({
      pageSize: 20,
      currentPage: 0,
      userId: userInfo.id
    })
      .then(({ code, data }: any) => {
        if (code == 200) {
          setUserArticleList(data)
        }
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className={styles.main}>
      <Link to={'/create'}>去发表文章</Link>
      <div>
        {userArticleList?.length
          ? userArticleList.map((item) => (
              <Card key={item.id}>
                {/* <CardMedia
                  sx={{ height: 140 }}
                  image='/static/images/cards/contemplative-reptile.jpg'
                  title='green iguana'
                /> */}
                <CardContent sx={{ paddingBottom: 0 }}>
                  <Typography gutterBottom variant='h5' component='div'>
                    {item.title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {item.introduction}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>分享</Button>
                  <Button size='small' onClick={() => navigate('/article/' + item.id)}>
                    阅读
                  </Button>
                </CardActions>
              </Card>
            ))
          : null}
      </div>
    </div>
  )
}

export default MyBlog
