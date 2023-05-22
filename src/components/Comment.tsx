import { memo, useState } from 'react'
import { Button } from 'react-bootstrap'
import { fetchComments } from '../utils/api'
import type { IComment } from '../types'

function Comment({ postId }: { postId: number }) {
  const [loading, setLoading] = useState<boolean>(false)
  const [close, setClose] = useState<boolean>(true)
  const [comments, setComments] = useState<IComment[]>([])

  const handleFetchComments = async () => {
    try {
      setLoading(true)
      const data = await fetchComments(postId)
      setComments(data)
      setLoading(false)
      setClose(false)
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e.message)
        setLoading(false)
      }
    }
  }

  if (close) {
    return (
      <div>
        <Button disabled={loading} onClick={handleFetchComments}>
          {loading && 'Loading '}Comments
        </Button>
      </div>
    )
  }

  return (
    <div>
      <Button onClick={() => setClose(true)}>close comments</Button>
      {comments
        ?.filter((i) => i.postId === postId)
        .map((comment) => (
          <section key={comment.id}>
            <h5>{comment.email}</h5>
            <p>{comment.body}</p>
          </section>
        ))}
    </div>
  )
}

export default memo(Comment)
