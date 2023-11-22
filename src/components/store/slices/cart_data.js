import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cart_item: [],
  totalPrice : 0
};

const cartData = createSlice({
    name: "cartData",
    initialState: INITIAL_STATE,
    reducers: {
      addToItemCart: (state, action) => {
        const newItem = action.payload;
        const existingItem = state.cart_item.find(item => item.id === newItem.id);
        if (existingItem) {
          existingItem.quantity += newItem.quantity;
          existingItem.price += newItem.price;
        } else { 
          state.cart_item.push(newItem);
        }
      },
      removeItemCart:(state,action)=>{
        state.cart_item = state.cart_item.filter(item=>item.id !==action.payload)
      },
      getTotalPrice:(state)=>{
        state.totalPrice = 0;
        state.cart_item.forEach((item)=>{
          state.totalPrice += item.price;
        });
      }
    },
  });
  

export const { addToItemCart , removeItemCart , getTotalPrice} = cartData.actions;

export default cartData.reducer;
