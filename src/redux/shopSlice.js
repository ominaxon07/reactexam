import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  liked: [],
  user: {
    name: "John Doe",
    email: "john@example.com",
  },
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exist = state.cart.find(item => item.id === action.payload.id);
      if (!exist) state.cart.push(action.payload);
    },
    toggleLike: (state, action) => {
      const product = action.payload;
      const index = state.liked.findIndex(item => item.id === product.id);
      if (index >= 0) {
        state.liked.splice(index, 1);
      } else {
        state.liked.push(product);
      }
    },
  },
});

export const { addToCart, toggleLike } = shopSlice.actions;
export default shopSlice.reducer;
