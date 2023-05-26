import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 142, name: 'bun', price: 12, quantity: 1 },
  { id: 122, name: 'pizza', price: 122, quantity: 1 },
];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { product } = payload;
      console.log(product);
      return [...state.cart, product];
    },
    removeFromCart: (state, { payload }) => {
      const { productId } = payload;
      return state.filter(product => product.id !== productId);
    },
    updateCartQuantity: (state, { payload }) => {
      const { productId, quantity } = payload;
      return state.map(product => {
        if (product.id === productId) {
          return { ...product, quantity };
        }
        return product;
      });
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
