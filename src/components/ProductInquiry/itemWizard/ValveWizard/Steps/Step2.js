import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setTemperature} from '../../../../../ducks/inquiries_reducer'

class Step2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      celsiusMode: false
    }
    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode(){
    this.setState({
      celsiusMode: !this.state.celsiusMode
    });
  }

  convertToFahrenheit(celsiusTemp){
    return (celsiusTemp*1.8+32);
  }

  convertToCelsius(fahrenheitTemp){
    return (fahrenheitTemp-32)/1.8;
  }
  // isNumberKey(evt){
  //   var charCode = (evt.which) ? evt.which : event.keyCode
  //   if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
  //       return false;
  //   return true;
  // }

  render(){
    const {celsiusMode} = this.state;
    const {media, temperature, previousPath, nextPath, setTemperature} = this.props;
    console.log(temperature);
    return(
      <div>
        <Link to={previousPath}>
          <div>Media: {media}</div>
        </Link>
        <h3>What is the temperature of your process?</h3>
        <div>
          <div onClick={this.toggleMode} className="fahrenheit" style={celsiusMode ? {color: 'black'} : {color: 'red'}}>&#8457;</div>
          <div onClick={this.toggleMode} className="celsius"style={celsiusMode ? {color: 'red'} : {color: 'black'}}>&#8451;</div>
        </div>
          {
            celsiusMode ?
              <div style={{display: 'flex'}}>
                <input type="number"
                 value={this.convertToCelsius(temperature)}
                 onChange={(e)=>setTemperature(this.convertToFahrenheit(Number(e.target.value)))}
                />
                <p>&#8451;</p>
              </div>
            :
              <div style={{display: 'flex'}}>
                <input type="number"
                 value={temperature}
                 onChange={(e)=>setTemperature(Number(e.target.value))}
                />
                <p>&#8457;</p>
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

const mapStateToProps = state => {
  console.log(state.inquiries.temporaryItem);
  return {
    media: state.inquiries.temporaryItem.media || "Water", // default value for testing, should ultimately be removed
    temperature: state.inquiries.temporaryItem.temperature || 0
  };
}

export default connect(mapStateToProps, {setTemperature})(Step2);
