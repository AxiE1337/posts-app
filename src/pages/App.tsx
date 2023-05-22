import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import Post from '../components/Post'

function App() {
  const { posts, loading } = useAppSelector((state) => state.posts)
  const dispatch = useAppDispatch()

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
