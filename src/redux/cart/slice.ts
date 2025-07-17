import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../interfaces/redux";
import { ProductType2 } from "../../interfaces/graphql/graphql";

const initialState: Cart = {
  cartItems: [],
  opened: false,
};

const slice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    openCart: (state: Cart) => {
      state.opened = true;
    },

    closeCart: (state: Cart) => {
      state.opened = false;
    },

    toggleCart: (state: Cart) => {
      state.opened = !state.opened;
    },

    addItem: (state: Cart, action: PayloadAction<ProductType2>) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.item._id === item._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ item, quantity: 1 });
      }
    },

    removeItem: (state: Cart, action: PayloadAction<string>) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.item._id !== id
      );
    },

    increaseQuentity: (state: Cart, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.item._id === id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },

    decreseQuentity: (state: Cart, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.item._id === id
      );
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.item._id !== id
          );
        } else {
          existingItem.quantity -= 1;
        }
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export default slice.reducer;

export const cartActions = slice.actions;
