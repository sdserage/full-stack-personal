import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {selectMedia} from '../../../../../ducks/inquiries_reducer'

class Step1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      localValveSize: null,
      mmMode: false
    };
  }

  componentDidMount(){
    this.setState({
      localValveSize: this.props.valvesize || null
    });
  }

  render(){
    return(
      <div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    valvesize: state.inquiries.temporaryItem.valvesize
  }
}

export default connect(mapStateToProps)(Step1);
