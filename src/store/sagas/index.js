import { all, takeEvery } from "redux-saga/effects";

import * as types from '../repositories/consts';

import addRepository from './repository';

export default function* rootSaga() {        
    yield all([
        takeEvery(types.REQUEST_REPOSITORY, addRepository)
    ]); 
}