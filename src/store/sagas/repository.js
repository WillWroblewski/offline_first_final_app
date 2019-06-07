import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as RepositoryActions } from "../ducks/repositories";

export default function* addRepository(action) {  

  const response = yield call(api.get, `/repos/${action.payload}`);  

  yield put(RepositoryActions.addRepositorySuccess(response.data));
}