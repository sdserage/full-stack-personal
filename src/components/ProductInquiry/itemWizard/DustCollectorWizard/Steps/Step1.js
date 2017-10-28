import React, {Component} from 'react';
import connect from 'react-redux';
import {Link} from 'react-router-dom';
import {setParticulateType, setParticulateSize} from '../../../../../ducks/inquiries_reducer'

class Step1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      grease: false,
      metal: false,
      oilMist: false,
      smoke: false,
      sticky: false,
      other: false,
      otherValue: ''
    };
    this.updateLocalState = this.updateLocalState.bind(this);
  }

  updateLocalState(value){
    switch(value){
      case 'Grease':
        this.setState({
          grease: !this.state.grease
        });
      case 'Metal':
        this.setState({
          metal: !this.state.metal
        });
      case 'Oil Mist':
        this.setState({
          oilMist: !this.state.oilMist
        });
      case 'Smoke':
        this.setState({
          smoke: !this.state.smoke
        });
      case 'Sticky':
        this.setState({
          sticky: !this.state.sticky
        });
      case 'Other':
        this.setState({
          other: !this.state.other
        });
      default:
        this.setState({
          otherValue: value
        });
    }
    const {grease, metal, oilMist, smoke, sticky, other, otherValue} = this.state;
    let particulateList = [];
    grease && particulateList.push('Grease');
    metal && particulateList.push('Metal');
    oilMist && particulateList.push('Oil Mist');
    smoke && particulateList.push('Smoke');
    other && otherValue && particulateList.push(otherValue);
    this.props.setParticulateType(particulateList);
  }

  render(){
    return (
      <div>
        <h2>What type(s) of particulates does your process exhaust? Select all that apply.</h2>
        <div className="particulate-type">
          <div
        </div>
        <h2>What is the size of the particulates? Enter the smallest size.</h2>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {temporaryItem} = state.inquiries;
  return {
    particulatetype: temporaryItem.particulatetype,
    particulatesize: temporaryItem.particulatesize
  }
}

export default connect (mapStateToProps, {setParticulateSize, setParticulateType})(Step1);
