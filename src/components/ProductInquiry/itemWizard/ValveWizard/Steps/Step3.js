import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setTemperature} from '../../../../../ducks/inquiries_reducer'

class Step3 extends Component {
  render(){
    return(
      <div>
        step 3
      </div>
    );
  }
}

export default connect(null)(Step3);
