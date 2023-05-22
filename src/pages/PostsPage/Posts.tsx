import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import Post from '../../components/Post'
import LoadingScreen from '../../components/LoadingScreen'

function Posts() {
  const { posts, loading } = useAppSelector((state) => state.posts)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch({ type: 'FETCH_POSTS' })
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <main>
      {posts?.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          postId={post.id}
          userId={post.userId}
        />
      ))}
    </main>
  )
}

export default Posts
