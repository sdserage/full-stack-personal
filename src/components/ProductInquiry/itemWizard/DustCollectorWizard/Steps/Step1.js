import React, {Component} from 'react';
import {connect} from 'react-redux';
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
        }, ()=>{
          let particulateList = [];
          this.state.grease && particulateList.push('Grease');
          this.state.metal && particulateList.push('Metal');
          this.state.oilMist && particulateList.push('Oil Mist');
          this.state.smoke && particulateList.push('Smoke');
          this.state.sticky && particulateList.push('Sticky');
          this.state.other && this.state.otherValue && particulateList.push(this.state.otherValue);
          this.props.setParticulateType(particulateList);
        });
        break
      case 'Metal':
        this.setState({
          metal: !this.state.metal
        }, ()=>{
          let particulateList = [];
          this.state.grease && particulateList.push('Grease');
          this.state.metal && particulateList.push('Metal');
          this.state.oilMist && particulateList.push('Oil Mist');
          this.state.smoke && particulateList.push('Smoke');
          this.state.sticky && particulateList.push('Sticky');
          this.state.other && this.state.otherValue && particulateList.push(this.state.otherValue);
          this.props.setParticulateType(particulateList);
        });
        break
      case 'Oil Mist':
        this.setState({
          oilMist: !this.state.oilMist
        }, ()=>{
          let particulateList = [];
          this.state.grease && particulateList.push('Grease');
          this.state.metal && particulateList.push('Metal');
          this.state.oilMist && particulateList.push('Oil Mist');
          this.state.smoke && particulateList.push('Smoke');
          this.state.sticky && particulateList.push('Sticky');
          this.state.other && this.state.otherValue && particulateList.push(this.state.otherValue);
          this.props.setParticulateType(particulateList);
        });
        break
      case 'Smoke':
        this.setState({
          smoke: !this.state.smoke
        }, ()=>{
          let particulateList = [];
          this.state.grease && particulateList.push('Grease');
          this.state.metal && particulateList.push('Metal');
          this.state.oilMist && particulateList.push('Oil Mist');
          this.state.smoke && particulateList.push('Smoke');
          this.state.sticky && particulateList.push('Sticky');
          this.state.other && this.state.otherValue && particulateList.push(this.state.otherValue);
          this.props.setParticulateType(particulateList);
        });
        break
      case 'Sticky':
        this.setState({
          sticky: !this.state.sticky
        }, ()=>{
          let particulateList = [];
          this.state.grease && particulateList.push('Grease');
          this.state.metal && particulateList.push('Metal');
          this.state.oilMist && particulateList.push('Oil Mist');
          this.state.smoke && particulateList.push('Smoke');
          this.state.sticky && particulateList.push('Sticky');
          this.state.other && this.state.otherValue && particulateList.push(this.state.otherValue);
          this.props.setParticulateType(particulateList);
        });
        break
      case 'Other':
        this.setState({
          otherValue: this.state.other ? this.state.otherValue : '',
          other: !this.state.other
        }, ()=>{
          let particulateList = [];
          this.state.grease && particulateList.push('Grease');
          this.state.metal && particulateList.push('Metal');
          this.state.oilMist && particulateList.push('Oil Mist');
          this.state.smoke && particulateList.push('Smoke');
          this.state.sticky && particulateList.push('Sticky');
          this.state.other && this.state.otherValue && particulateList.push(this.state.otherValue);
          this.props.setParticulateType(particulateList);
        });
        break
      default:
        this.setState({
          otherValue: value
        }, ()=>{
          let particulateList = [];
          this.state.grease && particulateList.push('Grease');
          this.state.metal && particulateList.push('Metal');
          this.state.oilMist && particulateList.push('Oil Mist');
          this.state.smoke && particulateList.push('Smoke');
          this.state.sticky && particulateList.push('Sticky');
          this.state.other && this.state.otherValue && particulateList.push(this.state.otherValue);
          this.props.setParticulateType(particulateList);
        });
        break
    }
  }

  render(){
    const {nextPath, setParticulateSize, particulatetype, particulatesize} = this.props;
    const {grease, metal, oilMist, smoke, sticky, other, otherValue} = this.state;
    return (
      <div>
        <h2>What type(s) of particulates does your process exhaust? Select all that apply.</h2>
        <div className="particulate-type">
          <div style={grease ? {color: 'red'} : {color: 'black'}} onClick={()=>this.updateLocalState('Grease')}>Grease</div>
          <div style={metal ? {color: 'red'} : {color: 'black'}} onClick={()=>this.updateLocalState('Metal')}>Metal</div>
          <div style={oilMist ? {color: 'red'} : {color: 'black'}} onClick={()=>this.updateLocalState('Oil Mist')}>Oil Mist</div>
          <div style={smoke ? {color: 'red'} : {color: 'black'}} onClick={()=>this.updateLocalState('Smoke')}>Smoke</div>
          <div style={sticky ? {color: 'red'} : {color: 'black'}} onClick={()=>this.updateLocalState('Sticky')}>Sticky</div>
          <div style={{display: 'flex'}}>
            <div style={other ? {color: 'red'} : {color: 'black'}} onClick={()=>this.updateLocalState('Other')}>Other</div>
            {other && <input type='text' onChange={(e)=>this.updateLocalState(e.target.value)}/>}
          </div>
        </div>
        <h2>What is the size of the particulates? Enter the smallest size.</h2>
        <div style={{display: 'flex'}}>
          <input type='number' onChange={(e)=>setParticulateSize(Number(e.target.value))}/><div>&micro;m</div>
        </div>
        {
          typeof particulatesize === 'number' &&
          particulatetype.length > 0 &&
          <Link to={nextPath}>
            <div>Next</div>
          </Link>
        }
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

export default connect(mapStateToProps, {setParticulateSize, setParticulateType})(Step1);
