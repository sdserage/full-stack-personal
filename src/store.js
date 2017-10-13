import {createStore, applyMiddleware, combineReducers} from 'redux';
import usersReducer from './ducks/users_reducer';
import inquiriesReducer from './ducks/inquiries_reducer';
import promiseMiddleware from 'redux-promise-middleware';

let reducer = combineReducers({
  users: usersReducer,
  inquiries: inquiriesReducer
});

//let store =
//console.log(store.getState())

export default createStore(reducer, applyMiddleware(promiseMiddleware() ));
