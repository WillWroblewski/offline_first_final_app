import { combineReducers } from 'redux';
import { reducer as offline } from 'redux-offline-queue';

import { repositories } from './repositories/reducer';

export default combineReducers({
    offline,
    repositories
})