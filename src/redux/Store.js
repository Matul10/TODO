import {createStore} from 'redux';
import TodoReducer from './TodoReducer';
const store = createStore(TodoReducer);

export default store;