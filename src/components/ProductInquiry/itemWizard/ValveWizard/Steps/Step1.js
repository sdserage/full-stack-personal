import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {selectMedia} from '../../../../../ducks/inquiries_reducer'

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otherSelected: false
    };
  }

  inputSelect(value){
    if(value === 'Other'){
      this.setState({otherSelected: true});
    }else{
      this.setState({otherSelected: false});
      this.props.selectMedia(value);
    }
  }

  otherInput(value){
    this.props.selectMedia(value);
  }

  render(){
    let {otherSelected} = this.state;
    return(
      <div>
        <h3>What is your process?</h3>
        <select onChange={(e) => this.inputSelect(e.target.value)}>
          <option value="" disabled hidden>Select</option>
          <option value="Water"></option>
          <option value="Steam"></option>
          <option value="Air"></option>
          <option value="Other">Other</option>
        </select>
        {otherSelected ? <input onChange={(e)=>this.otherInput(e.target.value)} type='text'/> : null}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state.inquiries.temporaryItem);
  return {
    temporaryItem: state.inquiries.temporaryItem
  };
}

export default connect(mapStateToProps, {selectMedia})(Step1);
