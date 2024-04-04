import * as actions from "./actions";

const initState = {
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

const prodReducer = (state = initState, action) => {
    console.log(action);
    if(action.type === actions.ADD) {
        return {
            ...state,
            cart: [...state.cart, action.payLoad],
            total: state.total + action.payLoad.price
        }
    }

    if(action.type === actions.REMOVE) {
        return {
            ...state,
            cart: state.cart.filter((value, index) => index !== action.payLoad.index),
            total: state.total - action.payLoad.price
        }
    }
    return state;
}

export default prodReducer;