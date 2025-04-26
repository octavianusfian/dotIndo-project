import { Product } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

function getCartFromLocalStorage() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : defaultState;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;

      const item = state.cartItems.find(
        (item: Product) => item.id === product.id
      );
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      state.cartTotal += product.amount * product.price;
      cartSlice.caseReducers.calculateTotals(state);
    },
    editItem: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.cartItems.find((item: Product) => item.id === id);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
    },
    removeItem: (state, action) => {
      const { id } = action.payload;

      const product = state.cartItems.find((item: Product) => item.id === id);

      state.cartItems = state.cartItems.filter(
        (item: Product) => item.id !== id
      );

      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.amount * product.price;
      cartSlice.caseReducers.calculateTotals(state);
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, editItem, removeItem, clearCart } = cartSlice.actions;
    
export default cartSlice.reducer;
