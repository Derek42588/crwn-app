import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from '../../redux/user/user.selectors'


import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'

import { ReactComponent as Logo } from '../../images/logo.svg';

const Header = ({ currentUser }) => (
  <div className="Header">
    <Link to="/" className="Header__logo-container">
      <Logo className="Header__logo" />
    </Link>
    <div className="Header__options">
      <Link to="/shop" className="Header__options__option">
        Shop
      </Link>
      <Link to="/contact" className="Header__options__option">
        Contact
      </Link>
      {
        currentUser ? 
        <div 
        className="Header__options__option"
        onClick = {() => auth.signOut()}>
          Sign Out
        </div> :
        <Link to="/signin" className="Header__options__option">
        Sign In
      </Link>
      }{' '}
          <CartIcon />

    </div>
    <CartDropdown />
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(
mapStateToProps
)(Header);
