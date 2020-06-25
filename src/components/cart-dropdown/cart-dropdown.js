import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartHiddenState,
} from '../../redux/cart/cart.selectors';

import CustomButton from '../CustomButton/CustomButton';

const CartDropdown = ({ hidden, cartItems, history, toggleCartDropdown }) => (
  <div className={`CartDropdown ${hidden ? 'Hidden' : ''}`}>
    <div className="CartDropdown__cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="CartDropdown__empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        toggleCartDropdown()
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHiddenState,
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
