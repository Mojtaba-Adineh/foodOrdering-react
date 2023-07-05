import { createSlice } from "@reduxjs/toolkit";

const cartUiSlice = createSlice({
    name : "cartUi",
    initialState : {showCart : false},
    reducers : {
        toggle(state , action) {
            state.showCart = !state.showCart
        }
    }
})

export const cartUiActions = cartUiSlice.actions;
export default cartUiSlice;