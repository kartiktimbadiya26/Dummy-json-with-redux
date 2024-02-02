import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    allcatdata: [],
    allprodata: [],
    cartdata: [],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        allcategory: (state, action) => {
            state.allcatdata = action.payload
        },
        allproduct: (state, action) => {
            state.allprodata = action.payload
        },
        addcart: (state, action) => {
            state.cartdata = [...state.cartdata, action.payload]
            console.log(state.cartdata)
        }
    },
})

export const { allcategory, allproduct,addcart } = counterSlice.actions

export default counterSlice.reducer