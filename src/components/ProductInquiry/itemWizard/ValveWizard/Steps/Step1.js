import React, {Component} from 'react';
import {connect} from 'react-redux';

class Step1 extends Component {
  render(){
    return(
      <div>
        This is Valve Step 1
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    itemtype: state.inquiries.temporaryItem.itemtype
  };
}

export default connect(mapStateToProps)(Step1);
