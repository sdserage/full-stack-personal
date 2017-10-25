import axios from 'axios';

const _FULFILLED = '_FULFILLED' // axios
    // Standard users
    , ADD_INQUIRY_ITEM = 'ADD_INQUIRY_ITEM'
    , SUBMIT_INQUIRY = 'SUBMIT_INQUIRY'
    , REMOVE_INQUIRY_ITEM = 'REMOVE_INQUIRY_ITEM'
    , SELECT_ITEM_TYPE = 'SELECT_ITEM_TYPE'
    , RESET_ITEM = 'RESET_ITEM'
    , SELECT_MEDIA = 'SELECT_MEDIA'
    , SET_TEMPERATURE = 'SET_TEMPERATURE'
    //, UNDO_REMOVE = 'UNDO_REMOVE'
    // Employee users:
    , DISPLAY_INQUIRIES = 'DISPLAY_INQUIRIES'
    , DISPLAY_INQUIRY_ITEMS = 'DISPLAY_INQUIRY_ITEMS'
    // Admin users:
    //, DELETE_INQUIRY = 'DELETE_INQUIRY'
    , initialState = {
        userId: null,
        temporaryItem: {},
        itemList:[
          {
            itemtype: 'Valve',
            media: 'Air',
            pressure: 230, // meassured in psi
            temperature: 330.6, // measured in F (unknown if decimal value or not)
            pipesize: 10.5, // measured in inches, almost certainly will need to be decimal. Measurement is diameter
            pipesizeadditionalinfo: 'description',
            additionaliteminfo: 'description'
          },
          {
            itemtype: 'Actuator',
            valvesize: 33.25, // measured in inches
            torque: 24, // Not sure of current measurement type
            valvedescription: 'description',
            stemdimensions: 'Square', // other options are 'Double D' or 'Other', may need additional info on size
            returntype: 'Spring', // other option is double acting, may need additional space to include what it uses to return (air, water) and the psi
            additionaliteminfo: 'description'
          },
          {
            itemtype: 'Dust Collector',
            temperature: 110, // measured in F
            particulatetype: ['Metal', 'Wood'], // An array of string values, stored as string with spaces in the database. Space allocated in the database may need to be adjusted
            particulatesize: 200, // Unknown measuremnt type currently, will likely use decimals
            additionaliteminfo: 'description'
          },
          {
            itemtype: 'Instrumentation',
            media: 'Water',
            pressure: 180, // meassured in psi
            temperature: 200, // measured in F
            pipesize: 11.75, // measured in inches
            pipesizeadditionalinfo: 'description',
            additionaliteminfo: 'description'
          }
        ]//itemList: []
    };

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

export function selectItemType(itemtype){
  return {
    type: SELECT_ITEM_TYPE,
    payload: itemtype
  }
};

export function resetItem(){
  return {
    type: RESET_ITEM,
    payload: {}
  }
};

export function selectMedia(media){
  return {
    type: SELECT_MEDIA,
    payload: media
  }
}

export function setTemperature(temperature){
  return {
    type: SET_TEMPERATURE,
    payload: temperature
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
        return Object.assign({}, state, {itemList: action.payload});
      }else{
        return state;
      }
    case RESET_ITEM:
      return Object.assign({}, state, {temporaryItem: action.payload});
    case SELECT_ITEM_TYPE:
      let temporaryItem_select_type = Object.assign({}, state.temporaryItem);
      temporaryItem_select_type.itemtype = action.payload;
      return Object.assign({}, state, {temporaryItem: temporaryItem_select_type});
    case SELECT_MEDIA:
      let temporaryItem_select_media = Object.assign({}, state.temporaryItem);
      temporaryItem_select_media.media = action.payload;
      return Object.assign({}, state, {temporaryItem: temporaryItem_select_media});
    case SET_TEMPERATURE:
      let temporaryItem_set_temp = Object.assign({}, state.temporaryItem);
      temporaryItem_set_temp.temperature = action.payload;
      return Object.assign({}, state, {temporaryItem: temporaryItem_set_temp});
    default:
      return state;
  }
};
