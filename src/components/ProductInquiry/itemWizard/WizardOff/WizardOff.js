import React, {Component} from 'react';
import {connect} from 'react-redux';
import {submitInquiry} from '../../../../ducks/inquiries_reducer';
import {Link} from 'react-router-dom';

class WizardOff extends Component {
  render(){
    return(
      <div>
        <Link to='/productinquiry/select-type'>
          <h2 className="add-item">+ Add Item</h2>
        </Link>
        <h2 onClick={()=>this.props.submitInquiry({userid: this.props.userid, itemList:this.props.itemList})} className="submit-inquiry">Submit</h2>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    itemList: state.inquiries.itemList,
    userid: state.users.user.userid,

  }
}

export default connect(mapStateToProps, {submitInquiry})(WizardOff);
