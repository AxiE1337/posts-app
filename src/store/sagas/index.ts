import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchComments, fetchPosts } from '../../utils/api'

function* workerFetchPosts(): Generator<any, any, unknown> {
  yield put({ type: 'posts/setLoading', payload: true })
  const data = yield call(fetchPosts)
  yield put({ type: 'posts/setPosts', payload: data })
}

function* workerFetchComments({
  postId,
}: {
  postId: number
}): Generator<any, any, unknown> {
  yield put({ type: 'comments/setLoading', payload: true })
  const data = yield call(fetchComments, postId)
  yield put({ type: 'comments/setComments', payload: data })
}

export default function* rootSaga() {
  yield takeEvery('FETCH_DATA', workerFetchPosts)
  yield takeEvery('FETCH_COMMENTS' as any, workerFetchComments)
}
