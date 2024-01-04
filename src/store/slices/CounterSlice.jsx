import { createSlice } from "@reduxjs/toolkit";

const CounterSlice= createSlice({
    name:'user',
    initialState: 0,
    reducers:{
         increment(state,action){
             return state +1;
         },
         decrement(state,action){
             return state-1;
         },
    }
      
 

})
// console.log(CounterSlice.actions);
export default CounterSlice.reducer;
export const {increment,decrement} = CounterSlice.actions;