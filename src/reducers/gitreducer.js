import { createAction, handleActions } from 'redux-actions';

export const actions = {
    getData: 'DATA/QUERY_DATA'
}

export const getData = createAction(actions.getData)

const INITIAL_STATE = {
    username: '',
    photo: '',
    repos: [],
    stats: []
};


export default handleActions({
}, INITIAL_STATE)
