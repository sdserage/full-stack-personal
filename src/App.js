import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {getUserInfo} from './ducks/users_reducer';
import {connect} from 'react-redux';
// Components
import router from './router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {

  componentDidMount(){
    this.props.getUserInfo();
  }

  render() {
    return (
      <Router>
        <div>
          <Header/>
          {router}
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default connect(null, {getUserInfo})(App);
