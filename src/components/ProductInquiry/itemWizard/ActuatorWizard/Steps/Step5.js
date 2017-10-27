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
    const {setAdditionalItemInfo, step1, step2, step3, step4, valvesize, torque, valvedescription, stemdimensions, returntype, additionaliteminfo, temporaryItem} = this.props;
    let valvedescriptionAbbreviated = '';
    if(valvedescription){
      valvedescriptionAbbreviated = valvedescription.substring(0,6);
      valvedescriptionAbbreviated += "...";
    }
    return(
      <div>
        <Link to={step1}>
          <div>Valve Size: NPS {valvesize} inch</div>
        </Link>
        <Link to={step2}>
          {
            typeof torque === 'number' ?
              <div>Torque: {torque} in-lb</div>
            :
              <div>Valve Info: {
                valvedescriptionAbbreviated.length < valvedescription.length ?
                  valvedescriptionAbbreviated
                :
                  valvedescription
              }</div>
          }
        </Link>
        <Link to={step3}>
          <div>Stem Type: {stemdimensions}</div>
        </Link>
        <Link to={step4}>
          <div>Return Type: {returntype}</div>
        </Link>
        <h3>Please let us know below if there is any additional information you would like us to know.</h3>
        <h2>The more information we have on your inquiry the more quickly we can find the best equipment!</h2>
        <textarea rows="5" cols="50" onChange={(e)=>setAdditionalItemInfo(e.target.value)}></textarea>
        {
          typeof valvesize === 'number' &&
          (typeof torque === 'number' || valvedescription) &&
          stemdimensions &&
          returntype &&
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
    valvesize: temporaryItem.valvesize || 0,
    torque: temporaryItem.torque,
    valvedescription: temporaryItem.valvedescription || "Blank",
    stemdimensions: temporaryItem.stemdimensions || "Unknown",
    returntype: temporaryItem.returntype || "Unknown",
    temporaryItem: temporaryItem
  };
}

export default connect(mapStateToProps, {setAdditionalItemInfo, addInquiryItem, resetItem})(Step5);
