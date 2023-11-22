import { configureStore } from "@reduxjs/toolkit";

import counterSlice from './slices/counter'
import cartDataSlice from "./slices/cart_data";

export default configureStore({
    reducer : {
        counter : counterSlice,
        cartData: cartDataSlice
    }
})