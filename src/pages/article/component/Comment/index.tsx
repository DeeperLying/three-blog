/*
 * @Author: Lee
 * @Date: 2023-08-05 14:53:48
 * @LastEditTime: 2023-08-06 10:21:20
 * @LastEditors: Lee
 */
import React, { useEffect, useState } from 'react'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { getUserInfo } from 'src/lib/cookie/cookie'
import { useParams } from 'react-router-dom'
import { serviceCommentSave, serviceGetComments } from 'src/https/comment'

import styles from '../../index.module.scss'

type propsType = {
  callBack: () => void
}

const Comment = ({ callBack }: propsType) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const [content, setContent] = useState<string | undefined>()
  const userInfo = getUserInfo()
  const querys = useParams()

  const handleServiceCommentSave = () => {
    setLoading(true)
    const data = {
      user_id: userInfo.id,
      article_id: querys.id,
      nickname: userInfo.username,
      avatar: userInfo.headimgurl,
      content,
      Level: '0'
    }

    serviceCommentSave(data)
      .then(({ code }: any) => {
        if (code == 200) {
          //
          callBack()
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
    console.log(querys, userInfo, '======', data)
  }

  return (
    <div>
      <div className={styles.commentBtn}>
        <Button
          sx={{
            background: '#fff'
          }}
          size='large'
          onClick={() => setOpen(true)}
        >
          评论
        </Button>
      </div>
      <Drawer anchor='bottom' open={open} onClose={() => setOpen(false)}>
        <div className={styles.commentDrawer}>
          <TextField
            label='美言赞语，可以让作者更快更新额'
            multiline
            fullWidth
            rows={4}
            placeholder='请输入你的评论，最多只能255个字'
            variant='outlined'
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            onClick={handleServiceCommentSave}
            variant='contained'
            size='large'
            sx={{ marginTop: '10px', float: 'right' }}
            disabled={loading}
          >
            {loading ? '加载中...' : '发表'}
          </Button>
        </div>
      </Drawer>
    </div>
  )
}

export default Comment
