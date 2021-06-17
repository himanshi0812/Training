import {combineReducers} from 'redux';

import todos from './todoReducers';

const Reducers = combineReducers ({
    todos
})

export default Reducers;