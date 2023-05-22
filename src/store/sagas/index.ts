import { call, put, takeEvery, fork } from 'redux-saga/effects'
import { fetchPosts, fetchUser, fetchUserPosts } from '../../utils/api'

function* workerFetchPosts(): Generator<any, any, unknown> {
  yield put({ type: 'posts/setLoading', payload: true })
  const data = yield call(fetchPosts)
  yield put({ type: 'posts/setPosts', payload: data })
}

function* workerFetchUserAll({
  uId,
}: {
  uId: number
}): Generator<any, any, unknown> {
  yield put({ type: 'user/setLoading', payload: true })
  yield fork(workerFetchUser, uId)
  yield fork(workerFetchUserPosts, uId)
}

function* workerFetchUser(uId: number): Generator<any, any, unknown> {
  const user = yield call(fetchUser, uId)
  yield put({ type: 'user/setUser', payload: user })
}
function* workerFetchUserPosts(uId: number): Generator<any, any, unknown> {
  const posts = yield call(fetchUserPosts, uId)
  yield put({ type: 'user/setPosts', payload: posts })
}

export default function* rootSaga() {
  yield takeEvery('FETCH_POSTS', workerFetchPosts)
  yield takeEvery('FETCH_USER' as any, workerFetchUserAll)
}
