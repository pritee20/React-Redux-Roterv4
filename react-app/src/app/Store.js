import {createStore} from "redux";

import cartReducer from "./cart/Reducer";


const store = createStore(cartReducer, [{
        id: 1,
        name: 'phone 1',
        price: 10000,
        qty: 1,
        total : 0
    },

    {
        id: 2,
        name: 'phone 2',
        price: 8000,
        qty: 1,
        total : 0
    }

]);

import * as Actions from "./cart/Actions";

// let action = Actions.addItem({id: 1});

// console.log("before dispatch ", 
//         store.getState());

// store.dispatch(action)


// console.log("after dispatch ", 
// store.getState());


export default store;