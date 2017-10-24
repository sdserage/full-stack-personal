import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {resetItem, selectItemType} from '../../../../ducks/inquiries_reducer';

class WizardSelectItem extends Component {

  componentDidMount(){
    this.props.resetItem();
  }

  render(){
    const {selectItemType} = this.props;

    return(
      <div className="choose-a-type">
        <h2>What type of equipment are you looking for?</h2>

        <Link to='/productinquiry/valve-wizard/1'>
          <div className="valve-wizard" onClick={()=>selectItemType('Valve')}>Valve</div>
        </Link>

        <Link to='/productinquiry/actuator-wizard/1'>
          <div className="actuator-wizard">Actuator</div>
        </Link>

        <Link to='/productinquiry/dust-collector-wizard/1'>
          <div className="dust-collector-wizard">Dust Collector</div>
        </Link>

        <Link to='/productinquiry/instrumentation-wizard/1'>
          <div className="instrumentation-wizard">Instrumentation</div>
        </Link>

      </div>
    );
  }
}

export default connect(null, {resetItem, selectItemType})(WizardSelectItem);
