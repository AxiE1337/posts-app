import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store'
import Post from '../../components/Post'
import LoadingScreen from '../../components/LoadingScreen'
import styles from './styles.module.scss'

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
    <main className={styles.main}>
      <Button className={styles.btnBack} onClick={() => navigate('/')}>
        back
      </Button>
      <section className={styles.section}>
        <h2>Name: {user?.name}</h2>
        <h2>Email: {user?.email}</h2>
        <h2>Phone: {user?.phone}</h2>
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
