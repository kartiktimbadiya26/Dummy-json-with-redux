import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    allcatdata: [],
    allprodata: [],
    cartdata: [],
    total: 0,
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
            console.log(action.payload)
            state.total = state.total + (action.payload.price * action.payload.item);
            state.cartdata = [...state.cartdata, action.payload]
            console.log(state.total)
        },
        removecart: (state, action) => {
            state.total = action.payload.y;
            state.cartdata = action.payload.z;
        },
    },
})

export const { allcategory, allproduct, addcart, removecart } = counterSlice.actions

export default counterSlice.reducer