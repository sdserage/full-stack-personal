import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setTorque, setValveDescription} from '../../../../../ducks/inquiries_reducer'

class Step2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      localTorque: null,
      nmMode: false
    };
    this.updateTorqueValue = this.updateTorqueValue.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
    this.convertToNm = this.convertToNm.bind(this);
    this.convertToInlbs = this.convertToInlbs.bind(this);
  }

  componentDidMount(){
    this.setState({
      localTorque: this.props.torque || null
    });
  }

  toggleMode(bool){
    if(bool === this.state.nmMode){
      null;
    }else if(this.state.nmMode){
      this.setState({
        nmMode: !this.state.nmMode,
        localTorque: this.convertToInlbs(this.state.localTorque)
      });
    }else{
      this.setState({
        nmMode: !this.state.nmMode,
        localTorque: this.convertToNm(this.state.localTorque)
      });
    }
  }

  round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  convertToNm(inlb){
    //inlb = this.round(inlb, 10);
    return this.round(inlb * 0.112984825, 7);
  }

  convertToInlbs(nm){
    //nm = this.round(nm, 10);
    return this.round(nm * 8.8507457934906, 7);
  }

  updateTorqueValue(torque){
    this.setState({
      localTorque: torque
    });
    if(this.state.nmMode){
      torque = this.convertToInlbs(torque);
    }
    this.props.setTorque(torque);
  }

  render(){
    const {nextPath, step1, valvesize, torque, setValveDescription, valvedescription} = this.props;
    const {localTorque, nmMode} = this.state;
    return(
      <div>
        <div className="wizard-background"></div>
        <Link to="/productinquiry">
          <div className="cancel">Cancel</div>
        </Link>
        <div className='wizard-menu'>
          <Link to={step1}>
            <div className="previous">Valve Size: NPS {valvesize} inch</div>
          </Link>
          <h3>What is the torque requirement of your valve?</h3>
          <h4>{/*Warning: This is a prototype conversion formula. Numbers may slowly round up or down as switched back and forth between in-lb and N&middot;m causing inaccuracy with each iteration.*/}</h4>
          <div>
            <div onClick={()=>this.toggleMode(false)} className="inch" style={nmMode ? {color: 'black'} : {color: 'red'}}>in-lb</div>
            <div onClick={()=>this.toggleMode(true)} className="mm"style={nmMode ? {color: 'red'} : {color: 'black'}}>N&middot;m</div>
          </div>
          <div style={{display: 'flex'}}>
            <input type="number"
             value={localTorque}
             onChange={(e) => this.updateTorqueValue(Number(e.target.value))}
            />
            {nmMode ? <p>N&middot;m</p> : <p>in-lb</p>}
          </div>
          <h3>Not sure what your torque your valve uses? That is okay! Just tell us anything you can about your valve below.</h3>
          <h4>???</h4>
          <textarea value={valvedescription} rows="5" cols="50" onChange={(e)=>setValveDescription(e.target.value)}></textarea>
          {
            (typeof torque === 'number' || valvedescription) &&
              <Link to={nextPath}>
                <div className="next">Next</div>
              </Link>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {temporaryItem} = state.inquiries;
  return{
    valvesize: temporaryItem.valvesize || 0,
    torque: temporaryItem.torque,
    valvedescription: temporaryItem.valvedescription
  }
}

export default connect(mapStateToProps, {setTorque, setValveDescription})(Step2);
