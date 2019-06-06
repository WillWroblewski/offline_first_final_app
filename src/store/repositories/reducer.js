import * as types from './consts';

export const repositories = (state = [], action) => {
    switch(action.type){        
        case types.SUCCESS_REPOSITORY:
            return [...state, action.payload];
        default:
            return state;
    }
}