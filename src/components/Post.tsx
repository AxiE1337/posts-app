import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import avatar from '../assets/react.svg'

function Post({ title, body, postId }: IPost) {
  const dispatch = useDispatch()
  const handleFetchComments = () => {
    dispatch({ type: 'FETCH_COMMENTS', postId: postId })
  }
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <img src={avatar} alt='avatar' />
      <Button onClick={handleFetchComments}>Comments</Button>
    </div>
  )
}

export default Post

interface IPost {
  title: string
  body: string
  postId: number
}
