import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { offlineMiddleware, suspendSaga, consumeActionMiddleware } from 'redux-offline-queue'

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from "./ducks";
import rootSaga from '../store/sagas/index';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(offlineMiddleware());
middlewares.push(suspendSaga(sagaMiddleware));
middlewares.push(consumeActionMiddleware());

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(...middlewares));
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
}