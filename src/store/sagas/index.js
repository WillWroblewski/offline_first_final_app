import { all, spawn, takeEvery } from "redux-saga/effects";

import * as types from '../repositories/consts';
import { startWatchingNetworkConnectivity } from './offline'
import addRepository from './repository';

export default function* rootSaga() {        
    yield all([
        spawn(startWatchingNetworkConnectivity),
        takeEvery(types.REQUEST_REPOSITORY, addRepository)
    ]); 
}