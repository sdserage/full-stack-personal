import React, {Component} from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <footer className='footer'>

        <Link to='/'>
          <p>Home</p>
        </Link>

        <Link to='/about'>
          <p>About</p>
        </Link>

        <Link to='/factoidsandtools'>
          <p>Factoids And Tools</p>
        </Link>

        <Link to='/productinquiry'>
          <p>Product Inquiry</p>
        </Link>

        <Link to='/contact'>
          <p>Contact</p>
        </Link>

          <p className='design'>Serage Web Design 2017</p>

      </footer>
    );
  }
}

export default Header;
