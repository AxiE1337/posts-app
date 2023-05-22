import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store'
import Post from '../../components/Post'
import LoadingScreen from '../../components/LoadingScreen'

function User() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { posts, user, loading } = useAppSelector((state) => state.user)
  const { uId } = useParams()

  useEffect(() => {
    dispatch({ type: 'FETCH_USER', uId: uId })
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <main>
      <Button onClick={() => navigate('/')}>back</Button>
      <section>
        <h2>{user?.name}</h2>
        <h2>{user?.email}</h2>
        <h2>{user?.phone}</h2>
      </section>

      {posts?.map((post) => (
        <Post
          postId={post.userId}
          body={post.body}
          title={post.title}
          userId={post.userId}
          key={post.id}
        />
      ))}
    </main>
  )
}

export default User
