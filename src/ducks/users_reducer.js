import axios from 'axios';

let initialState = {
  user: {
    userid: null
  }
};

const GET_USER_INFO = 'GET_USER_INFO';

const _FULFILLED = '_FULFILLED';

export function getUserInfo(){
  let userData = axios.get('/auth/me')
    .then(res => {
      return res.data
    });
  return {
    type: GET_USER_INFO,
    payload: userData
  }
};

export default function users_reducer(state = initialState, action){
  switch(action.type){
    case GET_USER_INFO + _FULFILLED:
      return Object.assign({}, state, {user: action.payload});
    default:
      return state;
  }
};
