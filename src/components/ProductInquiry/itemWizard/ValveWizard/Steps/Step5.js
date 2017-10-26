import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setAdditionalItemInfo, addInquiryItem, resetItem} from '../../../../../ducks/inquiries_reducer'

class Step5 extends Component {
  constructor(props){
    super(props);
    this.completeInquiryItem = this.completeInquiryItem.bind(this);
  }

  completeInquiryItem(){
    this.props.addInquiryItem(this.props.temporaryItem);
    this.props.resetItem();
  }

  render(){
    const {setAdditionalItemInfo, userid, pipesize, pressure, temperature, media, step1, step2, step3, step4} = this.props;
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
          media &&
          typeof temperature === 'number' &&
          typeof pressure === 'number' &&
          typeof pipesize === 'number' &&
            <Link to="/productinquiry/">
              <div onClick={this.completeInquiryItem} className="complete-inquiry-item">Complete</div>
            </Link>
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
    temporaryItem: Object.assign({}, temporaryItem)
  };
}

export default connect(mapStateToProps, {setAdditionalItemInfo, addInquiryItem, resetItem})(Step5);
