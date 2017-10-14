import axios from 'axios';

let initialState = {
  user: {
    userid: null
  },
  userMenuDisplayed: false
};

// Action Types
const GET_USER_INFO = 'GET_USER_INFO';
const TOGGLE_USER_MENU_ON = 'TOGGLE_USER_MENU_ON';
const TOGGLE_USER_MENU_OFF = 'TOGGLE_USER_MENU_OFF';

// Axios
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

export function toggleUserMenuOn(){
  return {
    type: TOGGLE_USER_MENU_ON,
    payload: true
  }
}

export function toggleUserMenuOff(){
  return {
    type: TOGGLE_USER_MENU_OFF,
    payload: false
  }
}

export default function users_reducer(state = initialState, action){
  switch(action.type){
    case GET_USER_INFO + _FULFILLED:
      return Object.assign({}, state, {user: action.payload});

    case TOGGLE_USER_MENU_ON:
      return Object.assign({}, state, {userMenuDisplayed: action.payload});

    case TOGGLE_USER_MENU_OFF:
      return Object.assign({}, state, {userMenuDisplayed: action.payload});

    default:
      return state;
  }
};
