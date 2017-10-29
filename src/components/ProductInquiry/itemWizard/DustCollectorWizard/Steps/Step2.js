import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setTemperature} from '../../../../../ducks/inquiries_reducer'

class Step2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      celsiusMode: false,
      localTemperature: null
    }
    this.toggleMode = this.toggleMode.bind(this);
    this.updateTemperatureValue = this.updateTemperatureValue.bind(this);
    this.convertToCelsius = this.convertToCelsius.bind(this);
    this.convertToFahrenheit = this.convertToFahrenheit.bind(this);
  }

  componentDidMount(){
    this.setState({
      localTemperature: this.props.temperature || null
    });
  }

  toggleMode(bool){
    if(bool === this.state.celsiusMode){
      null;
    }else if(this.state.celsiusMode){
      this.setState({
        celsiusMode: !this.state.celsiusMode,
        localTemperature: this.convertToFahrenheit(this.state.localTemperature)
      });
    }else{
      this.setState({
        celsiusMode: !this.state.celsiusMode,
        localTemperature: this.convertToCelsius(this.state.localTemperature)
      });
    }
  }

  convertToFahrenheit(celsiusTemp){
    return this.round((celsiusTemp*1.8+32), 3);
  }

  convertToCelsius(fahrenheitTemp){
    return this.round(((fahrenheitTemp-32)/1.8), 3);
  }

  updateTemperatureValue(temp){
    this.setState({
      localTemperature: temp
    });
    if(this.state.celsiusMode){
      temp = this.round(this.convertToFahrenheit(temp), 3);
    }
    this.props.setTemperature(temp);
  }

  round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  render(){
    const {celsiusMode, localTemperature} = this.state;
    const {particulatetype, particulatesize, temperature, previousPath, step1, nextPath, setTemperature} = this.props;
    return (
      <div>
        <Link to={step1}>
          <div>Particulate Type{particulatetype.length > 1 && "s"}: {particulatetype}</div>
          <div>Particulate Size: {particulatesize} &micro;m</div>
        </Link>
        <h2>What is the temperature of your exhaust?</h2>
        <div>
          <div onClick={()=>this.toggleMode(false)} className="fahrenheit" style={celsiusMode ? {color: 'black'} : {color: 'red'}}>&#8457;</div>
          <div onClick={()=>this.toggleMode(true)} className="celsius"style={celsiusMode ? {color: 'red'} : {color: 'black'}}>&#8451;</div>
        </div>
        {
          <div style={{display: 'flex'}}>
            <input type="number"
             value={localTemperature}
             onChange={(e) => this.updateTemperatureValue(Number(e.target.value))}
            />
            {celsiusMode ? <p>&#8451;</p> : <p>&#8457;</p>}
          </div>
        }
        {
          typeof temperature === 'number' &&
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
    particulatetype: temporaryItem.particulatetype || ['none'],
    particulatesize: temporaryItem.particulatesize || 0,
    temperature: temporaryItem.temperature
  }
}

export default connect(mapStateToProps, {setTemperature})(Step2);
