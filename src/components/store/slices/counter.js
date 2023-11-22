import { createSlice } from "@reduxjs/toolkit";

const INITAIL_VALUE ={
    counter_val: 1,
    max_counter_limit:0
}

const counter = createSlice({
    name:"counter",
    initialState: INITAIL_VALUE,
    reducers: {
        increaseCounter: (state,action)=>{
            
            if ( state.counter_val <= action.payload-1 ){
                state.counter_val++}
                else{
                    alert("cant ++")
                }
        },
        decreaseCounter: (state,action)=>{ 
            state.max_counter_limit =action.payload
            if ( state.counter_val > 1 ){
                state.counter_val--}
                else{
                    alert("cant --")
                }
        },
        increaseCounterByVal: (state,action)=>{
            state.max_counter_limit =action.payload
            //if (){}
            state.counter_val = state.counter_val + action.payload
        },
        deccreaseCounterByVal: (state,action)=>{
            state.max_counter_limit =action.payload
            //if (){}
            state.counter_val = state.counter_val + action.payload
        },
        resetCounter:(state)=>{
            state.counter_val = 1
        }
        
    }
})

export const {increaseCounter,decreaseCounter,increaseCounterByVal,deccreaseCounterByVal,resetCounter} = counter.actions 

export default counter.reducer;