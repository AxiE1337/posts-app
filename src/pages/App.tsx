import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import Post from '../components/Post'

function App() {
  const { posts, loading } = useSelector((state: RootState) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_DATA' })
  }, [])

  return (
    <main>
      {posts?.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          postId={post.id}
        />
      ))}
      {loading && <h1>loading...</h1>}
    </main>
  )
}

export default App
