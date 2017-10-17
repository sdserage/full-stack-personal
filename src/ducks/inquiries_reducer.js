//import axios from 'axios';

let initialState = {
  inquiries: {
    userId: null,
    itemList: []
  }
};

// Action Types:
const ADD_INQUIRY_ITEM = 'ADD_INQUIRY_ITEM';
const SUBMIT_INQUIRY = 'SUBMIT_INQUIRY';

// Axios:
const _FULFILLED = '_FULFILLED';

export function addInquiryItem(newInquiryItem){
  return {
    type: ADD_INQUIRY_ITEM,
    payload: newInquiryItem
  };
}

export function submitInquiry(){
  let responseValue axios.post('/api/inquiries')
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
      return false;
    });
  if(responseValue){
    return {
      type: SUBMIT_INQUIRY,
      payload: []
    }
  }
  return {
    type: SUBMIT_INQUIRY,
    payload: null
  }
};

export default function inquiries_reducer(state = initialState, action){
  switch(action.type){
    case ADD_INQUIRY_ITEM:
      let itemList = state.itemList.slice();
      itemList.push(action.payload);
      return Object.assign({}, state, {itemList});
    case SUBMIT_INQUIRY + _FULFILLED:
      if(action.payload){
        return Object.assign({}, state, {itemList: action.payload})
      }else{
        return state;
      }
    default:
      return state;
  }
};
