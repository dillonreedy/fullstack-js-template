import { combineReducers, createStore } from 'redux';
import reducers from './charts/index';
const reducer = combineReducers(reducers);

const store = createStore(reducer);

export default store;