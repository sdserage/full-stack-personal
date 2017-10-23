import React, {Component} from 'react';
import './ProductInquiry.css';
import {connect} from 'react-redux';
import {addInquiryItem, removeInquiryItem, submitInquiry} from '../../ducks/inquiries_reducer';
// Components
import InquiryItem from './InquiryItem';

class ProductInquiry extends Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    let {itemList} = this.props;
    let mappedItemList = itemList.map( (item,index) =>{
      //return <li key={index}>{item.itemtype}</li>;
      return <li key={index}><InquiryItem item={item}/></li>
    });
    return(
      <div className="product-inquiry">
        <ul className="inquiry-list">
          {mappedItemList}
        </ul>
        <div className="add-item">+ Add Item</div>
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
