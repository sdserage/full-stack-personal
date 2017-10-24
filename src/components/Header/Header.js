import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {toggleUserMenuOn, toggleUserMenuOff} from '../../ducks/users_reducer';

class Header extends Component{

  // constructor(props){
  //   super(props);
  //   this.toggleUserMenu = this.toggleUserMenu.bind(this);
  // }
  //
  // toggleUserMenu(){
  //   alert('test');
  // }

  render(){
    let user = this.props.user;
    const {
      toggleUserMenuOn,
      toggleUserMenuOff,
      userMenuDisplayed
    } = this.props;
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

            {
              user.isemployee ?
                /* Renders if the user is an employee */
                <Link to='/viewinquiries'>
                  <li className='employeeView'>View Inquiries</li>
                </Link>
              :
                null
            }

          </ul>
          {
            user.userid ?

              /* Renders when a user is logged in */
              <div className="user-menu-off" onClick={userMenuDisplayed ? toggleUserMenuOff : toggleUserMenuOn}>
                {user.username}
              </div>

            :

              /* Renders when no user is logged in */

              <a href={process.env.REACT_APP_LOGIN}>
                <div className="login-or-register">Login/Register</div>
              </a>

          }
        </nav>
        {
          userMenuDisplayed ?

            <div className="user-menu-on">
              <img src='' alt='Close user menu' className='x-icon' onClick={toggleUserMenuOff}/>
              <a href={process.env.REACT_APP_LOGOUT}>
                <div>Log Out</div>
              </a>
            </div>
          :
            null
        }
      </header>
    );
  }
}

/// This needs to change
let mapStateToProps = state =>{
  return {
    user: state.users.user,
    userMenuDisplayed: state.users.userMenuDisplayed
  };
}

export default connect(mapStateToProps, {toggleUserMenuOn, toggleUserMenuOff})(Header);
