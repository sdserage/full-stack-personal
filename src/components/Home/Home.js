import React, {Component} from 'react';

class Home extends Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    return(
      <a href={process.env.REACT_APP_LOGIN}><button>Login/Register</button></a>
    );
  }
}

export default Home;
