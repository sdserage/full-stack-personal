import React, {Component} from 'react';
import './ProductInquiry.css';
import {connect} from 'react-redux';
import {addInquiryItem, removeInquiryItem, submitInquiry} from '../../ducks/inquiries_reducer';
import {BrowserRouter as Router, Link} from 'react-router-dom';
// Components
import InquiryItem from './InquiryItem/InquiryItem';
import router from './router';

class ProductInquiry extends Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    let {itemList} = this.props;
    let mappedItemList = itemList.map( (item,index) =>{
      //return <li key={index}>{item.itemtype}</li>;
      return (
        <li className="item-box" key={index}>
          <InquiryItem item={item}/>
          <div className="item-buttons">
            <div className="edit-icon"></div>
            <div className="delete-icon"></div>
          </div>
        </li>
      );
    });
    return(
      <div className="product-inquiry">
        <ul className="inquiry-list">
          {mappedItemList}
        </ul>
        <h2 className="add-item">+ Add Item</h2>
        <h2 className="submit-inquiry">Submit</h2>
        <div className="item-wizard">
          <Router>
            {router}
          </Router>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state =>{
  return {
    itemList: state.inquiries.itemList
  };
}

export default connect(mapStateToProps)(ProductInquiry);
