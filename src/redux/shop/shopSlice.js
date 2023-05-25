import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
  name: 'shop',
  initialState: '',
  reducers: {
    chooseShop: (state, { payload }) => {
      const { shopId } = payload;
      return shopId;
    },
  },
});

export const { chooseShop } = shopSlice.actions;

export default shopSlice.reducer;
