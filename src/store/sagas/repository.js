import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import * as RepositoryActions from "../repositories/actions";

export default function* addRepository(action) {  

  const response = yield call(api.get, `/repos/${action.payload}`);  

  yield put(RepositoryActions.addRepositorySuccess(response.data));
}