import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setAdditionalItemInfo} from '../../../../../ducks/inquiries_reducer'

class Step5 extends Component {

  render(){
    const {userid, pipesize, pressure, temperature, media, step1, step2, step3, step4} = this.props;
    return(
      <div>
        <Link to={step1}>
          <div>Media: {media}</div>
        </Link>
        <Link to={step2}>
          <div>Temperature: {temperature} &#8457;</div>
        </Link>
        <Link to={step3}>
          <div>Pressure: {pressure} psi</div>
        </Link>
        <Link to={step4}>
          <div>Pipe: NPS {pipesize} inch</div>
        </Link>
        <h3>Please let us know below if there is any additional information you would like us to know.</h3>
        <h2>The more information we have on your inquiry the more quickly we can find the best equipment!</h2>
        <textarea rows="5" cols="50" onChange={(e)=>setAdditionalItemInfo(e.target.value)}></textarea>
        {
          userid &&
            <div className="submit">Submit Inquiry</div>
        }
      </div>
    );
  }
}

function mapStateToProps(state){
  const {temporaryItem} = state.inquiries;
  return {
    pipesize: temporaryItem.pipesize || 0,
    pressure: temporaryItem.pressure || 0,
    temperature: temporaryItem.temperature || 0,
    media: temporaryItem.media || "None",
    userid: state.users.user.userid || 6
  };
}

export default connect(mapStateToProps, {setAdditionalItemInfo})(Step5);
