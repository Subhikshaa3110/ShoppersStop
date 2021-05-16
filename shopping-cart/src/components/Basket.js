import React, { Component } from 'react'
import { connect } from 'react-redux';
import utils from '../utils';
import {removeFromCart} from '../actions/cartActions';
class Basket extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        const {cartItems}=this.props;
        return (
            <div className="alert alert-info">
                {cartItems.length===0?"Cart is empty":<div>You have {cartItems.length} items in the cart.</div>}
                {cartItems.length>0 && 
                    <div>
                        <ul>
                            {cartItems.map( item =>
                                <li>
                                    <b>{item.title}</b> X {item.count} =Rs.{item.price*item.count}
                                    <button className="btn btn-danger"
                                    onClick={() => this.props.removeFromCart(this.props.cartItems, item)}>
                                        Remove
                                    </button>
                                </li>

                            )}
                        </ul>
                        Total Price: {utils.formatCurrency(cartItems.reduce((a,c) => a+c.price*c.count,0))}
                        <br/>
                        <button className="btn btn-primary" onClick={()=>alert("Payment Completed")}>
                            CheckOut
                        </button>
                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    cartItems: state.cart.items
})
export default connect(mapStateToProps,{removeFromCart})(Basket);
