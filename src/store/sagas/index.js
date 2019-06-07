import { all, spawn, takeEvery } from "redux-saga/effects";

import { Types } from '../ducks/repositories';
import { startWatchingNetworkConnectivity } from './offline'
import addRepository from './repository';

export default function* rootSaga() {        
    yield all([
        spawn(startWatchingNetworkConnectivity),
        takeEvery(Types.REQUEST, addRepository)
    ]); 
}