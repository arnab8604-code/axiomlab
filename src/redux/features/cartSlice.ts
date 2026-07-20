import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "@/types/cart";

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart(state, action: PayloadAction<CartItem>) {

      const existingItem = state.cart.find(
        item => item.product.id === action.payload.product.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push(action.payload);
      }

    },

    removeFromCart(state, action: PayloadAction<number>) {

      state.cart = state.cart.filter(
        item => item.product.id !== action.payload
      );

    },

    increaseQuantity(state, action: PayloadAction<number>) {

      const item = state.cart.find(
        item => item.product.id === action.payload
      );

      if (item) {
        item.quantity++;
      }

    },

    decreaseQuantity(state, action: PayloadAction<number>) {

      const item = state.cart.find(
        item => item.product.id === action.payload
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.cart = state.cart.filter(
          item => item.product.id !== action.payload
        );
      }

    },

    clearCart(state) {
      state.cart = [];
    }

  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;