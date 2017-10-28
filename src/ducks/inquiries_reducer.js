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
    , SET_PRESSURE = 'SET_PRESSURE'
    , SET_PIPE_SIZE = 'SET_PIPE_SIZE'
    , SET_PIPE_SIZE_ADDITIONAL_INFO = 'SET_PIPE_SIZE_ADDITIONAL_INFO'
    , SET_VALVE_SIZE = 'SET_VALVE_SIZE'
    , SET_TORQUE = 'SET_TORQUE'
    , SET_VALVE_DESCRIPTION = 'SET_VALVE_DESCRIPTION'
    , SET_STEM_DIMENSIONS = 'SET_STEM_DIMENSIONS'
    , SET_RETURN_TYPE = 'SET_RETURN_TYPE'
    , SET_PARTICULATE_TYPE = 'SET_PARTICULATE_TYPE'
    , SET_PARTICULATE_SIZE = 'SET_PARTICULATE_SIZE'
    , SET_ADDITIONAL_ITEM_INFO = 'SET_ADDITIONAL_ITEM_INFO'
    //, UNDO_REMOVE = 'UNDO_REMOVE'
    // Employee users:
    , DISPLAY_INQUIRIES = 'DISPLAY_INQUIRIES'
    , DISPLAY_INQUIRY_ITEMS = 'DISPLAY_INQUIRY_ITEMS'
    // Admin users:
    //, DELETE_INQUIRY = 'DELETE_INQUIRY'
    , initialState = {
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
            particulatesize: 200, // measured in micrometers ('micro symbol''m'), also known as (incorrectly since it is an outdated term no longer considered valid) 'microns'.
            additionaliteminfo: 'description'
          },
          {
            itemtype: 'Instrumentation',
            media: 'Water',
            pressure: 180, // measured in psi
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

export function submitInquiry(inquiry){
  let responseValue = axios.post('/api/inquiries', inquiry)
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

export function setPressure(pressure){
  return {
    type: SET_PRESSURE,
    payload: pressure
  }
}

export function setPipeSize(pipesize){
  return {
    type: SET_PIPE_SIZE,
    payload: pipesize
  }
}

export function setPipeSizeAdditionalInfo(pipesizeadditionalinfo){
  return {
    type: SET_PIPE_SIZE_ADDITIONAL_INFO,
    payload: pipesizeadditionalinfo
  }
};

export function setValveSize(valvesize){
  return {
    type: SET_VALVE_SIZE,
    payload: valvesize
  }
};

export function setTorque(torque){
  return {
    type: SET_TORQUE,
    payload: torque
  }
};

export function setValveDescription(valvedescription){
  return {
    type: SET_VALVE_DESCRIPTION,
    payload: valvedescription
  }
};

export function setStemDimensions(stemdimensions){
  return {
    type: SET_STEM_DIMENSIONS,
    payload: stemdimensions
  }
};

export function setReturnType(returntype){
  return {
    type: SET_RETURN_TYPE,
    payload: returntype
  }
};

export function setParticulateType(particulatetype){
  return {
    type: SET_PARTICULATE_TYPE,
    payload: particulatetype
  }
};

export function setParticulateSize(particulatesize){
  return {
    type: SET_PARTICULATE_SIZE,
    payload: particulatesize
  }
};

export function setAdditionalItemInfo(additionaliteminfo){
  return {
    type: SET_ADDITIONAL_ITEM_INFO,
    payload: additionaliteminfo
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
    case SET_PRESSURE:
      let temporaryItem_set_pressure = Object.assign({}, state.temporaryItem);
      temporaryItem_set_pressure.pressure = action.payload;
      return Object.assign({}, state, {temporaryItem: temporaryItem_set_pressure});
    case SET_PIPE_SIZE:
      let temporaryItem_set_pipe_size = Object.assign({}, state.temporaryItem);
      temporaryItem_set_pipe_size.pipesize = action.payload;
      return Object.assign({}, state, {temporaryItem: temporaryItem_set_pipe_size});
    case SET_PIPE_SIZE_ADDITIONAL_INFO:
      let temporaryItem_set_pipe_size_additional_info = Object.assign({}, state.temporaryItem);
      temporaryItem_set_pipe_size_additional_info.pipesizeadditionalinfo = action.payload;
      return Object.assign({}, state, {temporaryItem: temporaryItem_set_pipe_size_additional_info});
    case SET_VALVE_SIZE:
      let temporaryItem_set_valve_size = Object.assign({}, state.temporaryItem);
      temporaryItem_set_valve_size.valvesize = action.payload;
      return Object.assign({}, state, {temporaryItem: temporaryItem_set_valve_size});
    case SET_TORQUE:
      let temporaryItem_set_torque = Object.assign({}, state.temporaryItem);
      temporaryItem_set_torque.torque = action.payload;
      return Object.assign({}, state, {temporaryItem: temporaryItem_set_torque});
    case SET_VALVE_DESCRIPTION:
      let temporaryItem_set_valve_description = Object.assign({}, state.temporaryItem);
      temporaryItem_set_valve_description.valvedescription = action.payload;
      return Object.assign({}, state, {temporaryItem: temporaryItem_set_valve_description});
    case SET_STEM_DIMENSIONS:
      let temporaryItem_set_stem_dimensions = Object.assign({}, state.temporaryItem);
      temporaryItem_set_stem_dimensions.stemdimensions = action.payload;
      return Object.assign({}, state, {temporaryItem: temporaryItem_set_stem_dimensions});
    case SET_RETURN_TYPE:
      let temporaryItem_set_return_type = Object.assign({}, state.temporaryItem);
      temporaryItem_set_return_type.returntype = action.payload;
      return Object.assign({}, state, {temporaryItem: temporaryItem_set_return_type});
    case SET_PARTICULATE_TYPE:
      let temporaryItem_set_particulate_type = Object.assign({}, state.temporaryItem);
      temporaryItem_set_particulate_type.particulatetype = action.payload;
      return Object.assign({}, state, {temporaryItem: temporaryItem_set_particulate_type});
    case SET_PARTICULATE_SIZE:
      let temporaryItem_set_particulate_size = Object.assign({}, state.temporaryItem);
      temporaryItem_set_particulate_size.particulatesize = action.payload;
      return Object.assign({}, state, {temporaryItem: temporaryItem_set_particulate_size});
    case SET_ADDITIONAL_ITEM_INFO:
      let temporaryItem_set_additional_item_info = Object.assign({}, state.temporaryItem);
      temporaryItem_set_additional_item_info.additionaliteminfo = action.payload;
      return Object.assign({}, state, {temporaryItem: temporaryItem_set_additional_item_info});
    default:
      return state;
  }
};
