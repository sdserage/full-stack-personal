import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setReturnType} from '../../../../../ducks/inquiries_reducer'

class Step4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doubleActingSelected: false
    };
  }

  inputSelect(value){
    if(value === 'Double Acting'){
      this.setState({
        doubleActingSelected: true,
      });
      this.props.setReturnType("");
    }else{
      this.setState({doubleActingSelected: false});
      this.props.setReturnType(value);
    }
  }

  doubleActingInput(value){
    this.props.setReturnType("");
    let doubleActingComplete = 'Double Acting | ';
    doubleActingComplete += value;
    if(value !== ""){
      this.props.setReturnType(doubleActingComplete);
    }
  }

  render(){
    const {step1, step2, step3, nextPath, setReturnType, valvesize, torque, valvedescription, stemdimensions, returntype} = this.props;
    const {doubleActingSelected} = this.state;
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
        <Link to={step3}>
          <div>Stem Type: {stemdimensions}</div>
        </Link>
        <h3>What return type does your valve use?</h3>
        <h4>Note: Please include the media used for the return if 'Double Acting' is selected.</h4>
        <select onChange={(e) => this.inputSelect(e.target.value)}>
          <option value="" selected disabled hidden>{returntype ? returntype : 'Select'}</option>
          <option value="Spring">Spring</option>
          <option value="Double Acting">Double Acting</option>
        </select>
        {doubleActingSelected && <input onChange={(e)=>this.doubleActingInput(e.target.value)} type='text'/>}
        {
          returntype &&
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
    stemdimensions: temporaryItem.stemdimensions || "Unknown",
    returntype: temporaryItem.returntype
  }
}

export default connect(mapStateToProps, {setReturnType})(Step4);
