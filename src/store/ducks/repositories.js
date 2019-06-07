import { markActionsOffline } from 'redux-offline-queue';

export const Types = {
    REQUEST: 'repositories/REQUEST',
    SUCCESS: 'repositories/SUCCESS'
}

export const repositories = (state = [], action) => {
    switch(action.type){        
        case Types.SUCCESS:            
            return [
                ...state, 
                { name: action.payload.name, description: action.payload.description }                
            ]
        default:
            return state;
    }
}

export const Creators = {
    addRepositorySuccess: repositories => ({
        type: Types.SUCCESS,
        payload: repositories
    }),    
    addRepositoryRequest: name => ({        
        type: Types.REQUEST,
        payload: name                
    })
}

markActionsOffline(Creators, ['addRepositoryRequest']);