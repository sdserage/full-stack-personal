import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component{

  render(){
    let user = this.props.user;
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
          {
            user.userid ?
              (<div>{user.username}</div>)
            :
            (
              <a href={process.env.REACT_APP_LOGIN}>
                <div>Login/Register</div>
              </a>
            )
          }
        </nav>
      </header>
    );
  }
}

/// This needs to change
let mapStateToProps = state =>{
  return {
    user: state.users.user
  };
}

export default connect(mapStateToProps)(Header);
