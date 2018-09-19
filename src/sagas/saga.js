
import { delay} from 'redux-saga'
import { call,put, takeEvery,all} from 'redux-saga/effects'

export function* helloSaga() {
    alert('Hello Sagas!')
}

export function* incrementAsync() {
    yield call(delay,1000)
    yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

