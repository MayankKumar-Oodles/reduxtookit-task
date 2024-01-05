 import { createSlice } from "@reduxjs/toolkit";

 const cartSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload);
        },

        remove(state,action){
            console.log('cartslice'+action.payload)
            return state.filter((item)=>{
                   return (item.id!==action.payload)
            })
        }
    }
 })

 export const {add,remove} =cartSlice.actions;
 export default cartSlice.reducer;