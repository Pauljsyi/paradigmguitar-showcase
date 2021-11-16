import React from 'react';
import {Link} from 'react-router-dom';
// import Summary from './Summary';



const Cart = (props) => {
    const {cartItems, onAdd, onRemove, show} = props;

    console.log('cartItems', cartItems)
 

    const guitarPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const tax = guitarPrice * 0.095;
    const shipping = guitarPrice > 2000 ? 0 : 50;
    const totalPrice = guitarPrice + tax + shipping;
    const itemsInCart = cartItems.reduce((a,c) => a + c.qty, 0 );
    const localeSubTotal = guitarPrice.toLocaleString('en-US', {style: 'currency', currency: "USD"});
    const localeTotal = totalPrice.toLocaleString('en-US', {style: 'currency', currency: "USD"});


    return (
        <div className={ show ? "expand" : "shrink"}>
                <div>
                    <div className="cart-content">
                        <h2 className="cart-title">Cart Items</h2>
                            {cartItems.length === 0 && <div className="cart-is-empty">Cart Is Empty</div>}
                            {cartItems.map((item) => (
                                <div className="row">
                                    <div className="col-2">
                                        <img src={item.img} className="cart-item-img" alt="guitar"/>
                                        <div key={item.id} className="col-2">
                                            {/* <div className="buttons">
                                                <span className="delete-btn">delete</span>
                                                <span className="like-btn">like</span>
                                            </div> */}
                                        <div className="col-2">{item.name}</div>
                                        </div>
                                    
                                        <div className="col">
                                        <button onClick={() => onRemove(item)} className="remove">
                                            -
                                        </button>{' '}
                                        <button onClick={() => onAdd(item)} className="add">
                                            +
                                        </button>
                                        </div>
                                        <div className="qty">
                                                qty: {item.qty}
                                            {/* {item.qty} x ${item.price} = ${item.qty * item.price} */}
                                        </div>
                                    </div>
                                    <br />
                                    
                                    <hr></hr>
                                    <br />
                                </div>
                            ))}
                    
                        {cartItems.length !== 0 && (
                            <div className="subtotal">
                                
                                {/* <div className="row">
                                    <div>Items In Cart</div>
                                    <div>{itemsInCart.toFixed(2)}</div>
                                </div> */}
                                <div className="price">
                                    <div>Subtotal</div>
                                    <div>{localeSubTotal}</div>
                                </div>
                                <div className="tax">
                                    <div>tax</div>
                                    <div>${tax.toFixed(2)}</div>
                                </div>
                                <div className="shipping">
                                    <div>shipping</div>
                                    <div>${shipping.toFixed(2)}</div>
                                </div>
                                <div className="total-price">
                                    <div>({itemsInCart} items) Total: </div>
                                    <div>{localeTotal}</div>
                                </div>
                            
                                <div className="checkout-container">
                                    <Link to="/summary"><button className="checkout" >Go To Summary</button></Link>
                                </div>
                            </div>    
                        )}
                    </div>   
                    
                </div>
                
            </div>

        
    )
}

export default Cart
