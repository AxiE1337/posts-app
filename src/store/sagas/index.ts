import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchPosts, fetchUserPosts } from '../../utils/api'

function* workerFetchPosts(): Generator<any, any, unknown> {
  yield put({ type: 'posts/setLoading', payload: true })
  const data = yield call(fetchPosts)
  yield put({ type: 'posts/setPosts', payload: data })
}
function* workerFetchUserPosts({
  uId,
}: {
  uId: number
}): Generator<any, any, unknown> {
  yield put({ type: 'posts/setLoading', payload: true })
  const data = yield call(fetchUserPosts, uId)
  yield put({ type: 'posts/setUserPosts', payload: data })
}

export default function* rootSaga() {
  yield takeEvery('FETCH_POSTS', workerFetchPosts)
  yield takeEvery('FETCH_USER_POSTS' as any, workerFetchUserPosts)
}
