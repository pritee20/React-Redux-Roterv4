
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartItem extends Component {
    static contextTypes = {
        appTitle: PropTypes.string
    }
    constructor(props, context) {
        super(props);
        this.state = {
            qty: props.item.qty // capture the vale first time
        }
    }
    
    componentDidMount() {
        console.log(this.context.appTitle);
    }
     onValueChange(e){
      console.log(e.target.value);
      this.setState({
          qty: e.target.value
      });
    }

    //item as props
    render() {
        // let item = this.props.item;
        // Deconstruct pattern
        let {
            item,
            onUpdate,
            onRemove
        } = this.props;
        return (
           <tr>
               <td>{item.name}</td>
               <td>{item.price}</td>
               <td>
                   
                   <input value={this.state.qty} name="qty" onChange={(e) => this.onValueChange(e)} type="number" onBlur={()=> onUpdate(item.id, this.state.qty)}/>
                   
                </td>

                <td> 
                    {item.total}
                </td>

                <td>
                    <button onClick={()=> onUpdate(item.id, this.state.qty)} >
                        Update
                    </button>
                </td>

                <td>

                    <button onClick={()=> onRemove(item.id)}>
                    Remove
                    </button>
                </td>
            </tr>
        )
    }
} 

CartItem.contextTypes = {
    appTitle: PropTypes.string
}
CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}