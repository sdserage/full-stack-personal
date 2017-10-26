import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setPipeSize, setPipeSizeAdditionalInfo} from '../../../../../ducks/inquiries_reducer'

class Step4 extends Component {
  constructor(props){
    super(props);
    this.state = {
      localPipeSize: null,
      mmMode: false
    };
    this.toggleMode = this.toggleMode.bind(this);
    this.convertToMm = this.convertToMm.bind(this);
    this.convertToInch = this.convertToInch.bind(this);
    this.updatePipeSizeValue = this.updatePipeSizeValue.bind(this);
  }

  componentDidMount(){
    this.setState({
      localPressure: this.props.pipesize || null
    });
  }

  toggleMode(bool){
    if(bool === this.state.mmMode){
      null;
    }else if(this.state.mmMode){
      this.setState({
        mmMode: !this.state.mmMode,
        localPipeSize: this.convertToInch(this.state.localPipeSize)
      });
    }else{
      this.setState({
        mmMode: !this.state.mmMode,
        localPipeSize: this.convertToMm(this.state.localPipeSize)
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

  updatePipeSizeValue(pipesize){
    this.setState({
      localPipeSize: pipesize
    });
    if(this.state.mmMode){
      pipesize = this.convertToInch(pipesize);
    }
    this.props.setPipeSize(pipesize);
  }

  render(){
    const {setPipeSizeAdditionalInfo, pipesize, pipesizeadditionalinfo, pressure, temperature, media, step1, pathBeforePrevious, previousPath, nextPath} = this.props;
    const {mmMode, localPipeSize} = this.state;
    return(
      <div>
        <Link to={step1}>
          <div>Media: {media}</div>
        </Link>
        <Link to={pathBeforePrevious}>
          <div>Temperature: {temperature} &#8457;</div>
        </Link>
        <Link to={previousPath}>
          <div>Pressure: {pressure} psi</div>
        </Link>
        <h3>What is the pipe diameter of your process?</h3>
        <div>
          <div onClick={()=>this.toggleMode(false)} className="inch" style={mmMode ? {color: 'black'} : {color: 'red'}}>NPS (inch)</div>
          <div onClick={()=>this.toggleMode(true)} className="mm"style={mmMode ? {color: 'red'} : {color: 'black'}}>DN (mm)</div>
        </div>
        {
          <div style={{display: 'flex'}}>
            {mmMode ? <p>DN</p> : <p>NPS</p>}
            <input type="number"
             value={localPipeSize}
             onChange={(e) => this.updatePipeSizeValue(Number(e.target.value))}
            />
            {mmMode ? <p>mm</p> : <p>inch</p>}
          </div>
        }
        <h3>Any additional information about the pipe you would like to tell us?</h3>
        <h4>e.g., What material is the pipe made of?</h4>
        <textarea rows="5" cols="50" onChange={(e)=>setPipeSizeAdditionalInfo(e.target.value)}></textarea>
        {
          typeof pipesize === 'number' &&
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
    pipesize: temporaryItem.pipesize,
    pipesizeadditionalinfo: temporaryItem.pipesizeadditionalinfo,
    pressure: temporaryItem.pressure || 150,
    temperature: temporaryItem.temperature || 0,
    media: temporaryItem.media || "Water"
  };
}

export default connect(mapStateToProps, {setPipeSize, setPipeSizeAdditionalInfo})(Step4);
