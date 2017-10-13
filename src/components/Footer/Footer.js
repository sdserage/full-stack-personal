import React, {Component} from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <footer className='footer' style={{color: 'blue'}}>
        <nav>
          <ul>

            <Link to='/'>
              <li>Home</li>
            </Link>

            <Link to='/about'>
              <li>About</li>
            </Link>

            <Link to='/factoidsandtools'>
              <li>Factoids And Tools</li>
            </Link>

            <Link to='/productinquiry'>
              <li>Product Inquiry</li>
            </Link>

            <Link to='/contact'>
              <li>Contact</li>
            </Link>

          </ul>
        </nav>
      </footer>
    );
  }
}

export default Header;
