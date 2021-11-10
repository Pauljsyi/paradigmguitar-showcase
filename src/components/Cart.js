import React from 'react'
// import Navbar from './Navbar'
// import { useState } from 'react'

const Cart = (props) => {
    const {cartItems, onAdd, onRemove} = props;
    // console.log("cartItems" ,cartItems)
    const guitarPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const tax = guitarPrice * 0.095;
    const shipping = guitarPrice > 2000 ? 0 : 50;
    const totalPrice = guitarPrice + tax + shipping;

    return (
        <aside className="cart-container">
            <div className="cart-content">
                <h2>Cart Items</h2>
                
                    {cartItems.length === 0 && <div>Cart Is Empty</div>}
                    {cartItems.map((item) => (
                        <div key={item.id} className="row">
                            <div className="buttons">
                                <span className="delete-btn"></span>
                                <span className="like-btn"></span>
                            </div>
                            <div className="col-2">{item.name}</div>
                            <div className="col-2">
                            <button onClick={() => onRemove(item)} className="remove">
                                -
                            </button>{' '}
                            <button onClick={() => onAdd(item)} className="add">
                                +
                            </button>
                            </div>
                            <div className="col-2">
                                {item.qty} x ${item.price} = ${item.qty * item.price}
                            </div>
                        </div>
                    ))}
            
                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div className="row">
                            <div>Items Price</div>
                            <div>${guitarPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div>tax</div>
                            <div>${tax.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div>shipping</div>
                            <div>${shipping.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div>Total: </div>
                            <div>${totalPrice.toFixed(2)}</div>
                        </div>
                    </>
                )}
            </div>
        </aside>
    )
}

export default Cart
