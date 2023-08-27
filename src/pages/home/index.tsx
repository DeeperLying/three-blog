/*
 * @Author: Lee
 * @Date: 2023-06-22 15:22:19
 * @LastEditTime: 2023-08-27 00:57:09
 * @LastEditors: Lee
 */
import React, { useEffect, useState } from 'react'
import { Empty } from 'react-vant'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { serviceGetArticleList } from 'src/https/home'
import styles from './index.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import EditNoteIcon from '@mui/icons-material/EditNote'
import moment from 'moment'
import { serviceFetchSendMessage } from 'src/https/firebase'

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
      <div className={styles.main}>
        {articleList.length ? (
          articleList.map((item: any) => (
            <div className={styles.main_articles} key={item.id}>
              <Card sx={{ borderRadius: '15px' }}>
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
                    <AccessTimeIcon sx={{ width: '1.2rem', marginRight: '0.3rem' }} />
                    发表于：
                    {moment(item.create_time).format('MMMM Do YYYY, h:mm:ss a')}｜ 作者：
                    {item.author}
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
            </div>
          ))
        ) : (
          <div className={styles.noArticle}>
            <EditNoteIcon sx={{ fontSize: '10rem', color: '#007FFF' }} />
            <Link to='/create'>还没有发布文章，快去发表文章吧。</Link>
          </div>
        )}
      </div>
    </>
  )
}

export default Home
