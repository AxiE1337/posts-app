import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import Comment from './Comment'
import styles from './index.module.scss'

function Post({ title, body, postId, userId }: IPost) {
  const navigate = useNavigate()

  return (
    <div className={styles.post}>
      <h3>{title}</h3>
      <p>{body}</p>
      <img
        className={styles.postAvatar}
        onClick={() => navigate(`/user/${userId}`)}
        src='https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.jpg'
        alt='avatar'
      />
      <Comment postId={postId} />
    </div>
  )
}

export default memo(Post)

interface IPost {
  title: string
  body: string
  postId: number
  userId: number
}
