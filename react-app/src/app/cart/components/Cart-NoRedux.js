
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";


//Issue 1
import store from "../../Store";

import {addItem} from "../Actions";

export default class Cart extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            amount: 0
        }
        /*
        this.state = {
            items: [{
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
        
        ]
        }*/

        this.id = 10;
    }

    addItem() {
        
        let item =  {
            id: this.id++,
            name: 'phone ' + this.id,
            price: 8000,
            qty: 1,
            total : 0
        }
 

        //Issue 3
        store.dispatch(addItem(item));
 
    }

    touch() {
        this.setState({
            touch: true
        })
    }

    removeItem(id) {
        this.setState({
            items: this.state.items.filter( item => item.id != id)
        }, () => {
            this.reCalculateTotal();
        })

        
    }

    updateQty(id, qty) {

        this.setState({
            items: this.state.items.map (item => {
                if (item.id != id)
                        return item;
                return Object.assign({}, item, {qty: qty});
            })
        }, () => {
            this.reCalculateTotal();
        }) 
    }

    reCalculateTotal() {
        let sum = 0;

        for (let item of this.state.items) {
            sum += item.qty * item.price;
        }

        console.log(this.state.amount, sum);

        this.setState({
            amount: sum
        })
    }
    
    componentDidMount() {
        //Issue
        this.unsusbcribeFn = store.subscribe( ()=> {
            console.log("subs ");
            this.forceUpdate();
        })
        //this.reCalculateTotal();

    }

    componentWillUnmount() {
        //Issues
        this.unsusbcribeFn();
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("should update cart?");
    //     console.log(nextState.items == this.state.items);

    //     return nextState.items != this.state.items;
    // }
    
    render() {
        console.log("cart comp render");

        return (
            <div> 
            <h2>Cart </h2>

            <button onClick={() => this.addItem()}>
                Add Item
            </button>


            <button onClick={() => this.touch()}>
                Touch
            </button>

            {/* Issue 2 */}
            <CartList items={store.getState()}
                      onUpdate={ (id, qty) => this.updateQty(id, qty)}
                      onRemove = { id => this.removeItem(id)}
             />

            <CartSummary amount={this.state.amount}
                         
             />
            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}