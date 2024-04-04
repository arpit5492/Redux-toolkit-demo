import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {pName: "Apples", price: 1.45},
        {pName: "Bananas", price: 1.67},
        {pName: "Grapes", price: 2.32},
        {pName: "Oranges", price: 7.89},
        {pName: "Mangoes", price: 2.34}
    ],
    cart: [],
    total: 0,
}

const prodSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        purchase: (state, action) => {
            console.log(action);
            state.cart = [...state.cart, action.payload];
            state.total = state.total + action.payload.price;
        },
        deleteItem: (state, action) => {
            console.log(action);
            state.cart = state.cart.filter((value, index) => index !== action.payload.index);
            state.total = state.total - action.payload.price;
        }
    }
});

export const {purchase, deleteItem} = prodSlice.actions;
export default prodSlice.reducer;