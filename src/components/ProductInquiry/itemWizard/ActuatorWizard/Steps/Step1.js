import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setValveSize, setValveDescription} from '../../../../../ducks/inquiries_reducer'

class Step1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      localValveSize: null,
      mmMode: false
    };
    this.toggleMode = this.toggleMode.bind(this);
    this.convertToMm = this.convertToMm.bind(this);
    this.convertToInch = this.convertToInch.bind(this);
    this.updateValveSizeValue = this.updateValveSizeValue.bind(this);
  }

  componentDidMount(){
    this.setState({
      localValveSize: this.props.valvesize || null
    });
  }

  toggleMode(bool){
    if(bool === this.state.mmMode){
      null;
    }else if(this.state.mmMode){
      this.setState({
        mmMode: !this.state.mmMode,
        localValveSize: this.convertToInch(this.state.localValveSize)
      });
    }else{
      this.setState({
        mmMode: !this.state.mmMode,
        localValveSize: this.convertToMm(this.state.localValveSize)
      });
    }
  }

  round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  convertToMm(inch){
    return this.round(inch * 25.4, 3);
  }

  convertToInch(mm){
    return this.round(mm * 0.039370078740158, 3);
  }

  updateValveSizeValue(valvesize){
    this.setState({
      localValveSize: valvesize
    });
    if(this.state.mmMode){
      valvesize = this.convertToInch(valvesize);
    }
    this.props.setValveSize(valvesize);
  }

  render(){
    const {nextPath, valvesize, setValveDescription, valvedescription} = this.props;
    const {localValveSize, mmMode} = this.state;
    return(
      <div>
        <h3>What is the valve diameter of your process?</h3>
        <div>
          <div onClick={()=>this.toggleMode(false)} className="inch" style={mmMode ? {color: 'black'} : {color: 'red'}}>NPS (inch)</div>
          <div onClick={()=>this.toggleMode(true)} className="mm"style={mmMode ? {color: 'red'} : {color: 'black'}}>DN (mm)</div>
        </div>
        <div style={{display: 'flex'}}>
          {mmMode ? <p>DN</p> : <p>NPS</p>}
          <input type="number"
           value={localValveSize}
           onChange={(e) => this.updateValveSizeValue(Number(e.target.value))}
          />
          {mmMode ? <p>mm</p> : <p>inch</p>}
        </div>
        <h3>Any additional information about the valve you would like to tell us?</h3>
        <h4>e.g., ?</h4>
        <textarea value={valvedescription} rows="5" cols="50" onChange={(e)=>setValveDescription(e.target.value)}></textarea>
        {
          typeof valvesize === 'number' &&
            <Link to={nextPath}>
              <div>Next</div>
            </Link>
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  const {temporaryItem} = state.inquiries
  return{
    valvesize: temporaryItem.valvesize,
    valvedescription: temporaryItem.valvedescription
  }
}

export default connect(mapStateToProps, {setValveSize, setValveDescription})(Step1);
