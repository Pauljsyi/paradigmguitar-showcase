import React from 'react';



const Cart = (props) => {
    const {cartItems, onAdd, onRemove, show, setShow} = props;
 

    const guitarPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const tax = guitarPrice * 0.095;
    const shipping = guitarPrice > 2000 ? 0 : 50;
    const totalPrice = guitarPrice + tax + shipping;
    const itemsInCart = cartItems.reduce((a,c) => a + c.qty, 0 );

    return (
        <div className={ show ? "expand" : "shrink"}>
                <div>
                    <div className="cart-content">
                        <h2 className="cart-title">Cart Items</h2>
                            {cartItems.length === 0 && <div className="cart-is-empty">Cart Is Empty</div>}
                            {cartItems.map((item) => (
                                <div key={item.id} className="row">
                                    {/* <div className="buttons">
                                        <span className="delete-btn">delete</span>
                                        <span className="like-btn">like</span>
                                    </div> */}
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
                            <div className="subtotal">
                                <hr></hr>
                                {/* <div className="row">
                                    <div>Items In Cart</div>
                                    <div>{itemsInCart.toFixed(2)}</div>
                                </div> */}
                                <div className="row">
                                    <div>Subtotal</div>
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
                                    <div>({itemsInCart} items) Total: </div>
                                    <div>${totalPrice.toFixed(2)}</div>
                                </div>
                            </div>
                        )}
                    </div>   
                    <div>
                        <button className="checkout">CHECKOUT NOW</button>
                    </div>
                </div>
            </div>

        
    )
}

export default Cart
