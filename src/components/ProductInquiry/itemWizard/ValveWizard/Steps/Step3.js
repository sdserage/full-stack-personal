import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setPressure} from '../../../../../ducks/inquiries_reducer'

class Step3 extends Component {
  constructor(props){
    super(props);
    this.state = {
      localPressure: null,
      barMode: false
    };
    this.toggleMode = this.toggleMode.bind(this);
    this.convertToBar = this.convertToBar.bind(this);
    this.convertToPsi = this.convertToPsi.bind(this);
    this.updatePressureValue = this.updatePressureValue.bind(this);
  }

  componentDidMount(){
    this.setState({
      localPressure: this.props.pressure || null
    });
  }

  toggleMode(bool){
    if(bool === this.state.barMode){
      null;
    }else if(this.state.barMode){
      this.setState({
        barMode: !this.state.barMode,
        localPressure: this.convertToPsi(this.state.localPressure)
      });
    }else{
      this.setState({
        barMode: !this.state.barMode,
        localPressure: this.convertToBar(this.state.localPressure)
      });
    }
  }

  round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  convertToBar(psi){
    return this.round(psi * 0.0689475729, 5);
  }

  convertToPsi(bar){
    return this.round(bar * 14.5037738, 5);
  }

  updatePressureValue(pressure){
    this.setState({
      localPressure: pressure
    });
    if(this.state.barMode){
      pressure = this.convertToPsi(pressure);
    }
    this.props.setPressure(pressure);
  }

  render(){
    const {pressure, temperature, media, pathBeforePrevious, previousPath, nextPath} = this.props;
    const {barMode, localPressure} = this.state;
    return(
      <div>
        <Link to={pathBeforePrevious}>
          <div>Media: {media}</div>
        </Link>
        <Link to={previousPath}>
          <div>Temperature: {temperature} &#8457;</div>
        </Link>
        <h3>What is the pressure of your process?</h3>
        <div>
          <div onClick={()=>this.toggleMode(false)} className="psi" style={barMode ? {color: 'black'} : {color: 'red'}}>psi</div>
          <div onClick={()=>this.toggleMode(true)} className="bar"style={barMode ? {color: 'red'} : {color: 'black'}}>bar</div>
        </div>
        {
          <div style={{display: 'flex'}}>
            <input type="number"
             value={localPressure}
             step="1"
             onChange={(e) => this.updatePressureValue(Number(e.target.value))}
            />
            {barMode ? <p>bar</p> : <p>psi</p>}
          </div>
        }
        {
          typeof pressure === 'number' &&
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
    pressure: temporaryItem.pressure,
    temperature: temporaryItem.temperature || 0,
    media: temporaryItem.media || "Water"
  };
}

export default connect(mapStateToProps, {setPressure})(Step3);
