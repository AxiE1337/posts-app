import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { Button } from 'react-bootstrap'

function Comment({ postId }: { postId: number }) {
  const dispatch = useDispatch()
  const { comments, loading } = useSelector(
    (state: RootState) => state.comments
  )
  const handleFetchComments = () => {
    dispatch({ type: 'FETCH_COMMENTS', postId: postId })
  }
  return (
    <div>
      <Button onClick={handleFetchComments}>Comments</Button>
      {comments
        ?.filter((i) => i.postId === postId)
        .map((comment) => (
          <div key={comment.id}>
            <h5>{comment.name}</h5>
            <p>{comment.body}</p>
          </div>
        ))}
    </div>
  )
}

export default Comment
