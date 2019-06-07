import { combineReducers } from 'redux';
import { reducer as offline } from 'redux-offline-queue';

import { repositories } from '../ducks/repositories';

export default combineReducers({
    offline,
    repositories
})