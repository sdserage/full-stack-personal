import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setStemDimensions} from '../../../../../ducks/inquiries_reducer'

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otherSelected: false
    };
  }

  inputSelect(value){
    if(value === 'Other'){
      this.setState({otherSelected: true});
      this.props.setStemDimensions("");
    }else{
      this.setState({otherSelected: false});
      this.props.setStemDimensions(value);
    }
  }

  otherInput(value){
    this.props.setStemDimensions(value);
  }

  render(){
    const {step1, step2, nextPath, setStemDimensions, valvesize, torque, valvedescription, stemdimensions} = this.props;
    const {otherSelected} = this.state;
    let valvedescriptionAbbreviated = '';
    if(valvedescription){
      valvedescriptionAbbreviated = valvedescription.substring(0,6);
      valvedescriptionAbbreviated += "...";
    }
    return (
      <div>
        <Link to={step1}>
          <div>Valve Size: NPS {valvesize} inch</div>
        </Link>
        <Link to={step2}>
          {
            typeof torque === 'number' ?
              <div>Torque: {torque} in-lb</div>
            :
              <div>Valve Info: {
                valvedescriptionAbbreviated.length < valvedescription.length ?
                  valvedescriptionAbbreviated
                :
                  valvedescription
              }</div>
          }
        </Link>
        <h3>What type of stem does your valve have?</h3>
        <select onChange={(e) => this.inputSelect(e.target.value)}>
          <option value="" selected disabled hidden>{stemdimensions ? stemdimensions : 'Select'}</option>
          <option value="Square">Square</option>
          <option value="Double D">Double D</option>
          <option value="Other">Other</option>
        </select>
        {otherSelected && <input onChange={(e)=>this.otherInput(e.target.value)} type='text'/>}
        {
          stemdimensions &&
            <Link to={nextPath}>
              <div>Next</div>
            </Link>
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  const {temporaryItem} = state.inquiries;
  return{
    valvesize: temporaryItem.valvesize || 0,
    torque: temporaryItem.torque,
    valvedescription: temporaryItem.valvedescription || "Blank",
    stemdimensions: temporaryItem.stemdimensions
  }
}

export default connect(mapStateToProps, {setStemDimensions})(Step3);
