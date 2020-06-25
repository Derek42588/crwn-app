import { CartActionTypes } from './cart.types'
import { addItemToCart, decreaseItemInCart } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_DROPDOWN: {
            return {
                ...state,
                hidden: !state.hidden
            }
        }
        case CartActionTypes.ADD_ITEM_TO_CART: {
            return {
                ...state,
                cartItems: addItemToCart(action.payload, state.cartItems)
            }
        }
        case CartActionTypes.REMOVE_ITEM_FROM_CART: {
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        }
        case CartActionTypes.DECREASE_ITEM_IN_CART: {
            return {
                ...state,
                cartItems: decreaseItemInCart(action.payload, state.cartItems)
            }
        }
 
        default:
            return state;
    }
}

