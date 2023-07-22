/*
 * @Author: Lee
 * @Date: 2023-06-23 19:53:51
 * @LastEditTime: 2023-07-22 09:20:09
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
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import EditNoteIcon from '@mui/icons-material/EditNote'
import moment from 'moment'

import { serviceGetUserArticleList } from 'src/https/my-blog'

import styles from './index.module.scss'

const MyBlog = () => {
  const navigate = useNavigate()
  const userInfo = getUserInfo()
  const [userArticleList, setUserArticleList] = useState<[any]>()

  useEffect(() => {
    handleGetUserArticleList()
  }, [])

  const handleGetUserArticleList = () => {
    serviceGetUserArticleList({
      pageSize: 20,
      currentPage: 0,
      userId: userInfo?.id
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
      <div className={styles.main_articles}>
        {userArticleList?.length ? (
          userArticleList.map((item) => (
            <Card key={item.id} sx={{ borderRadius: '15px', marginBottom: '20px' }}>
              {item?.banner && (
                <CardMedia
                  sx={{ height: 140 }}
                  image={process.env.REACT_APP_URL + item?.banner}
                  title='sky 博客'
                />
              )}
              <CardContent sx={{ paddingBottom: 0 }}>
                <Typography gutterBottom variant='h5' component='div'>
                  {item.title}
                </Typography>
                <Typography component='p' className={styles.time}>
                  <AccessTimeIcon sx={{ width: '1.2rem' }} />
                  {moment(item.create_time).format('MMMM Do YYYY, h:mm:ss a')}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {item.introduction}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button size='small'>分享</Button>
                <Button size='small' onClick={() => navigate('/article/' + item.id)}>
                  阅读
                </Button>
              </CardActions>
            </Card>
          ))
        ) : (
          <div className={styles.noArticle}>
            <EditNoteIcon sx={{ fontSize: '10rem', color: '#007FFF' }} />
            还没有发布文章，快去发表文章吧。
          </div>
        )}
      </div>

      <div className={styles.create}>
        <Button
          variant='outlined'
          size='large'
          onClick={() => navigate('/create')}
          sx={{ background: '#fff' }}
        >
          去发表文章
        </Button>
      </div>
    </div>
  )
}

export default MyBlog
