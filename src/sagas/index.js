import {all} from 'redux-saga/effects';
import {helloSaga,watchIncrementAsync} from "./saga";

function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}

export default rootSaga;