import { memo } from 'react'
import avatar from '../assets/react.svg'
import Comment from './Comment'

function Post({ title, body, postId }: IPost) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <img src={avatar} alt='avatar' />
      <Comment postId={postId} />
    </div>
  )
}

export default memo(Post)

interface IPost {
  title: string
  body: string
  postId: number
}
