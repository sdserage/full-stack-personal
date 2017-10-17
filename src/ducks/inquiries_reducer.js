import axios from 'axios';

let initialState = {
  userId: null,
  itemList:[{itemtype:'Valve'},{itemtype:'Actuator'},{itemtype:'Instrumentation'},{itemtype:'Dust Collector'}]//itemList: []
};

// Action Types:
  // Standard users:
  const ADD_INQUIRY_ITEM = 'ADD_INQUIRY_ITEM';
  const SUBMIT_INQUIRY = 'SUBMIT_INQUIRY';
  const REMOVE_INQUIRY_ITEM = 'REMOVE_INQUIRY_ITEM';
  //const UNDO_REMOVE = 'UNDO_REMOVE';
  // Employee users:
  const DISPLAY_INQUIRIES = 'DISPLAY_INQUIRIES';
  const DISPLAY_INQUIRY_ITEMS = 'DISPLAY_INQUIRY_ITEMS';
  // Admin users:
  //const DELETE_INQUIRY = 'DELETE_INQUIRY';
// Axios:
const _FULFILLED = '_FULFILLED';

export function addInquiryItem(newInquiryItem){
  return {
    type: ADD_INQUIRY_ITEM,
    payload: newInquiryItem
  };
}

export function removeInquiryItem(index){
  return {
    type: REMOVE_INQUIRY_ITEM,
    payload: index
  };
}

export function submitInquiry(){
  let responseValue = axios.post('/api/inquiries')
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
      let itemList_add = state.itemList.slice();
      itemList_add.push(action.payload);
      return Object.assign({}, state, {itemList: itemList_add});
    case REMOVE_INQUIRY_ITEM:
      let itemList_remove = state.itemList.slice();
      itemList_remove.splice(action.payload,1);
      return Object.assign({}, state, {itemList: itemList_remove});
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
