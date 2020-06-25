import { CartActionTypes } from './cart.types'

export const toggleCartDropdown = () => ({
    type: CartActionTypes.TOGGLE_CART_DROPDOWN
})

export const addItemToCart = (item) => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item
})
export const removeItemFromCart = (item) => ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
})
export const decreaseItemInCart = (item) => ({
    type: CartActionTypes.DECREASE_ITEM_IN_CART,
    payload: item
})