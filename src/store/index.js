import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";

const store=configureStore({
    reducer:{
        users:cartSlice,

    }
})
export default store;