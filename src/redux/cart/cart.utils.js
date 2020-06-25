export const addItemToCart = (itemToAdd, cartItems) => {
  const existingCartItem = cartItems.find((i) => i.id === itemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((i) =>
      i.id === itemToAdd.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const decreaseItemInCart = (itemToDecrease, cartItems) => {
  const existingCartItem = cartItems.find((i) => i.id === itemToDecrease.id);

  if (existingCartItem) {
    if (existingCartItem.quantity > 1) {
      return cartItems.map((i) =>
      i.id === itemToDecrease.id ? { ...i, quantity: i.quantity - 1 } : i
    );
    } else {
      return cartItems.filter(i => i.id !== itemToDecrease.id)
    }
  }

  return cartItems
}