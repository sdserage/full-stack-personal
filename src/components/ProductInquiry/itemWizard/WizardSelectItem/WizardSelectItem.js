import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {resetItem} from '../../../../ducks/inquiries_reducer';

class WizardSelectItem extends Component {

  componentDidMount(){
    this.props.resetItem();
  }

  render(){
    return(
      <div className="choose-a-type">
        <h2>What type of equipment are you looking for?</h2>

        <Link to='/productinquiry/valve-wizard1'>
          <div className="wizard-valve">Valve</div>
        </Link>

        <Link to='/productinquiry/actuator-wizard1'>
          <div className="wizard-actuator"></div>
        </Link>

        <Link to='/productinquiry/dust-collector-wizard1'>
          <div className="wizard-dust-collector"></div>
        </Link>

        <Link to='/productinquiry/instrumentation-wizard1'>
          <div className="wizard-instrumentation"></div>
        </Link>

      </div>
    );
  }
}

export default connect(null, {resetItem})(WizardSelectItem);
