import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { Button } from 'react-bootstrap'
import Post from '../components/Post'

function App() {
  const { posts, loading } = useSelector((state: RootState) => state.posts)
  const dispatch = useDispatch()
  return (
    <>
      <h1>hello</h1>
      <Button onClick={() => dispatch({ type: 'FETCH_DATA' })}>click</Button>
      {posts?.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          postId={post.id}
        />
      ))}
      {loading && <h1>loading...</h1>}
    </>
  )
}

export default App
