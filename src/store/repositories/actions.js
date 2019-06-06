import * as types from './consts';

export const addRepositorySuccess = repositories => {        
    return {
        type: types.SUCCESS_REPOSITORY,
        payload: repositories
    }
}

/*
    Agora a requisição na api é feita dentro de uma função generator no redux-saga,
    disparada pela execução da ação de REQUEST...
*/
export const addRepositoryRequest = name => {            
    return {
        type: types.REQUEST_REPOSITORY,
        payload: name
    }
}