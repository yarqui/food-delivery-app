import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, { payload }) => {
      const { product } = payload;
      state.push(product);
    },
    removeFromCart: (state, { payload }) => {
      const { productId } = payload;
      return state.filter(product => product.id !== productId);
    },
    updateCartQuantity: (state, { payload }) => {
      const { productId, quantity } = payload;
      state.forEach(product => {
        if (product.id === productId) {
          product.quantity = quantity;
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
