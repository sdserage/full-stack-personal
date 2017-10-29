import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setAdditionalItemInfo, addInquiryItem, resetItem} from '../../../../../ducks/inquiries_reducer'

class Step3 extends Component {
  constructor(props){
    super(props);
    this.completeInquiryItem = this.completeInquiryItem.bind(this);
  }

  completeInquiryItem(){
    this.props.addInquiryItem(this.props.temporaryItem);
    this.props.resetItem();
  }

  render(){
    const {particulatetype, particulatesize, temperature, previousPath, step1, step2, setAdditionalItemInfo} = this.props;
    return (
      <div>
        <Link to={step1}>
          <div>Particulate Type{particulatetype.length > 1 && "s"}: {particulatetype}</div>
          <div>Particulate Size: {particulatesize} &micro;m</div>
        </Link>
        <Link to={step2}>
          <div>Temperature: {temperature} &#8457;</div>
        </Link>
        <h3>Please let us know below if there is any additional information you would like us to know.</h3>
        <h2>The more information we have on your inquiry the more quickly we can find the best equipment!</h2>
        <textarea rows="5" cols="50" onChange={(e)=>setAdditionalItemInfo(e.target.value)}></textarea>
        {
          particulatetype.length &&
          typeof particulatesize === 'number' &&
          typeof temperature === 'number' &&
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
    particulatetype: temporaryItem.particulatetype || ['none'],
    particulatesize: temporaryItem.particulatesize || 0,
    temperature: temporaryItem.temperature || 0,
    additionaliteminfo: temporaryItem.additionaliteminfo,
    temporaryItem: temporaryItem
  }
}

export default connect(mapStateToProps, {setAdditionalItemInfo, addInquiryItem, resetItem})(Step3);
