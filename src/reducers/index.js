import { combineReducers } from 'redux';

import GitReducer from './gitreducer'

export default combineReducers({
    git: GitReducer
});