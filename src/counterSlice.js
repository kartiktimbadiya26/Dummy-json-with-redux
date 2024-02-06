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
            state.total = state.total + (action.payload.price * action.payload.qte);
            state.cartdata = [...state.cartdata, action.payload]
            console.log(state.total)
        },
        removecart: (state, action) => {
            state.total = action.payload.y;
            state.cartdata = action.payload.z;
        },
        changeqtep: (state, action) => {
            state.cartdata.map((ele, index) => {
                if (index == action.payload) {
                    state.total = state.total + ele.price;
                    return ele.qte = (ele.qte + 1)
                }
                return ele
            })
        },
        changeqtem: (state, action) => {
            state.cartdata.map((ele, index) => {
                if (index == action.payload) {
                    state.total = state.total - ele.price;
                    return ele.qte = (ele.qte - 1)
                }
                return ele
            })
        },
    },
})

export const { allcategory, allproduct, addcart, removecart, changeqtep, changeqtem } = counterSlice.actions

export default counterSlice.reducer