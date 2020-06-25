import React from 'react';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect'


import { ReactComponent as ShoppingIcon } from '../../assets/shoppingCart.svg';

const CartIcon = ({ toggleCartDropdown, numItems }) => (
  <div className="CartIcon" onClick={() => toggleCartDropdown()}
  >
    <ShoppingIcon
      className="CartIcon__shopping-icon"
    />
    <span className="CartIcon__item-count">{numItems}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  numItems: selectCartItemsCount
})


const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
