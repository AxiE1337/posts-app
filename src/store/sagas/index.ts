import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchPosts } from '../../utils/api'

function* workerFetchPosts(): Generator<any, any, unknown> {
  yield put({ type: 'posts/setLoading', payload: true })
  const data = yield call(fetchPosts)
  yield put({ type: 'posts/setPosts', payload: data })
}

export default function* rootSaga() {
  yield takeEvery('FETCH_DATA', workerFetchPosts)
}
