import React, {Component} from 'react';
import './ViewInquiries.css';
import {getAllInquiries} from '../../ducks/inquiries_reducer';
import {connect} from 'react-redux';

class ViewInquiries extends Component{
  constructor(props){
    super(props);
    this.state = {
      localInquiryList: [],
    }
  }

  componentDidMount(){
    this.props.getAllInquiries()
    this.setState({
      localInquiryList: this.props.inquiryList || []
    });
  }

  render(){
    const {inquiryList} = this.props;
    const {localInquiryList} = this.state;
    let displayInquiries = inquiryList.map((inquiry, index)=>{

      return (
        <div key={index} className="inquiry-container">
          <div>User Name: {inquiry.username}</div>
          <div>Inquiry Id: {inquiry.inquiryid}</div>
          <div>Date: {inquiry.date.substring(0,10)}</div>
          <div className="inquiry-info">
            <div>User Id: {inquiry.userid}</div>
            <div>Email: {inquiry.email}</div>
          </div>
        </div>
      )
    });
    console.log(displayInquiries);
    return(
      <div className="view-inquiries">
        {displayInquiries}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    inquiryList: state.inquiries.inquiryList
  }
}

export default connect(mapStateToProps,{getAllInquiries})(ViewInquiries);
