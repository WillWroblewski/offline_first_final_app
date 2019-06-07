import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { offlineMiddleware, suspendSaga, consumeActionMiddleware } from 'redux-offline-queue'

import rootReducer from "./ducks";
import rootSaga from '../store/sagas/index';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(offlineMiddleware());
middlewares.push(suspendSaga(sagaMiddleware));
middlewares.push(consumeActionMiddleware());

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;