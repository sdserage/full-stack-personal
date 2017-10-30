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
      <div>
        <h2 className="add-item">+ Add Item</h2>
        <h2 className="submit-inquiry">Submit</h2>
        <div className="wizard-background"></div>
        <Link to="/productinquiry">
          <div className="cancel">Cancel</div>
        </Link>
        <div className='wizard-menu'>
          <h2>What type of equipment are you looking for?</h2>

          <Link to='/productinquiry/valve-wizard/1'>
            <div className="valve-wizard" onClick={()=>selectItemType('Valve')}>Valve</div>
          </Link>

          <Link to='/productinquiry/actuator-wizard/1'>
            <div className="actuator-wizard" onClick={()=>selectItemType('Actuator')}>Actuator</div>
          </Link>

          <Link to='/productinquiry/dust-collector-wizard/1'>
            <div className="dust-collector-wizard" onClick={()=>selectItemType('Dust Collector')}>Dust Collector</div>
          </Link>

          <Link to='/productinquiry/instrumentation-wizard/1'>
            <div className="instrumentation-wizard" onClick={()=>selectItemType('Instrumentation')}>Instrumentation</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(null, {resetItem, selectItemType})(WizardSelectItem);
