import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <header className='header'>
        <nav>

          <img src='' alt='Logo'/>

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

            <Link to='/viewinquiries'>
              <li className='employeeView'>View Inquiries</li>
            </Link>

          </ul>
          <a href={process.env.REACT_APP_LOGIN}>
            <div>Login/Register</div>
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
