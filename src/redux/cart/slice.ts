import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../interfaces/redux";

const initialState: Cart = {
    cartItems: [],
    opened: false,
    subTotal: 0,
    grandTotal: 0
}

const slice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        openCart: (state: Cart) => {
            state.opened = true
        },
        closeCart: (state: Cart) => {
            state.opened = false
        },
        toggleCart: (state: Cart) => {
            state.opened = !state.opened
        },
        addItem: () => {},
        removeItem: () => {},
        increaseQuentity: () => {},
        decreseQuentity: () => {},
        clearCart: () => {}
    }
})

export default slice.reducer

export const cartActions = slice.actions