import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {selectMedia} from '../../../../../ducks/inquiries_reducer'

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otherSelected: false
    };
  }

  inputSelect(value){
    if(value === 'Other'){
      this.setState({otherSelected: true});
      this.props.selectMedia("");
    }else{
      this.setState({otherSelected: false});
      this.props.selectMedia(value);
    }
  }

  otherInput(value){
    this.props.selectMedia(value);
  }

  render(){
    let {otherSelected} = this.state;
    const {media} = this.props || "";
    const {nextPath} = this.props;
    return(
      <div>
        <h3>What is your process?</h3>
        <select onChange={(e) => this.inputSelect(e.target.value)}>
          <option value="" selected disabled hidden>{media ? media : 'Select'}</option>
          <option value="Water">Water</option>
          <option value="Steam">Steam</option>
          <option value="Air">Air</option>
          <option value="Other">Other</option>
        </select>
        {otherSelected && <input onChange={(e)=>this.otherInput(e.target.value)} type='text'/>}
        {
          media &&
            <Link to={nextPath}>
              <div>Next</div>
            </Link>
        }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    media: state.inquiries.temporaryItem.media || ""
  };
}

export default connect(mapStateToProps, {selectMedia})(Step1);
