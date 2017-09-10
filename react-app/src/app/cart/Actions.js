import * as ActionTypes from './ActionTypes';


export  function addItem(item){
    return {
        type: ActionTypes.ADD_ITEM_TO_CART,
        item: item
    }
}