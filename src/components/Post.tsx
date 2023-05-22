import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import avatar from '../assets/react.svg'
import Comment from './Comment'

function Post({ title, body, postId, userId }: IPost) {
  const navigate = useNavigate()

  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <img
        onClick={() => navigate(`/user/${userId}`)}
        src={avatar}
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
