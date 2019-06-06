import * as types from './consts';
import { markActionsOffline } from 'redux-offline-queue';

export const addRepositorySuccess = repositories => {        
    return {
        type: types.SUCCESS_REPOSITORY,
        payload: repositories
    }
}

export const addRepositoryRequest = name => {            
    return {
        type: types.REQUEST_REPOSITORY,
        payload: name        
    }
}
  
markActionsOffline({ addRepositoryRequest }, ["addRepositoryRequest"])