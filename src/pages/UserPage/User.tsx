import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store'
import Post from '../../components/Post'
import LoadingScreen from '../../components/LoadingScreen'

function User() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { userPosts, loading } = useAppSelector((state) => state.posts)
  const { uId } = useParams()

  useEffect(() => {
    dispatch({ type: 'FETCH_USER_POSTS', uId: uId })
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <main>
      <Button onClick={() => navigate('/')}>back</Button>
      {userPosts?.map((post) => (
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
