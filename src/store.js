import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
import AppReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    AppReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
