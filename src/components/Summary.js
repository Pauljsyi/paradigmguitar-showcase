import React from 'react'

const Summary = (props) => {
    const { cartItems, onAdd, onRemove } = props
    // console.log("cartItems", cartItems)

    const guitarPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const tax = guitarPrice * 0.095;
    const shipping = guitarPrice > 2000 ? 0 : 50;
    const totalPrice = guitarPrice + tax + shipping;
    // const itemsInCart = cartItems.reduce((a,c, i) => a + c + i.qty, 0 );
    // const itemPrice = cartItems.reduce((a,c, i) => a + c + i.price, 0 );
    // const itemPriceMultiplied = itemsInCart * itemPrice;

    // const localeItemMultiplied = itemPriceMultiplied.toLocaleString('en-US', {style: 'currency', currency: 'USD'});


    // console.log('localeItemMultiplied', localeItemMultiplied)

    // const itemPrice = cartItems

    // const locale = itemPrice.toLocaleString('en-US', {style: 'currency', currency: "USD"});
    const localePrice = guitarPrice.toLocaleString('en-US', {style: 'currency', currency: "USD"});
    const localetax = tax.toLocaleString('en-US', {style: 'currency', currency: "USD"});
    const localeshipping = shipping.toLocaleString('en-US', {style: 'currency', currency: "USD"});
    const localeTotal = totalPrice.toLocaleString('en-US', {style: 'currency', currency: "USD"});
    return (
        <div className="checkout-container">
            <div className="summary-container">
                <h2>Cart Summary</h2>
                <div className="summary-items">{cartItems.map((item) => (
                    
                        <div className="summary-item-container">
                            <div className="summary-img">
                                <img src={item.img} alt="guitar" /> 
                            </div>
                            <div key={item.id} className="item-name">
                                {item.name}
                            </div>
                            <div className="item-qty">
                            <div className="qty-buttons">
                                        <button onClick={() => onRemove(item)} className="remove1">
                                            -
                                        </button>
                                        <div className="item-qty" >{item.qty}</div> 
                                        <button onClick={() => onAdd(item)} className="add1">
                                            +
                                        </button>
                                        </div>
                            
                            </div>
                            <div className="item-price">
                                ${item.qty * item.price}
                            </div>
                        </div>
                        
                    
                ))}</div>
            </div>
            <div className="order-summary-container">
                <br />
                <div className="summary-title">
                    <h2>Order Summary</h2>
                </div><br /><hr /><br />
                <div className="collective-price">
                    <div>item(s) total:</div> <div>{localePrice}</div>  
                </div><br />
                <div className="sum-shipping">
                    <div>shipping:</div> <div>{localeshipping}</div>
                </div><br />
                <div className="sum-tax">
                    <div>tax:</div> <div>{localetax}</div>
                </div><br />
                <div className="sum-total">
                    <div>Total:</div> <div>{localeTotal}</div>
                </div>
                <br />
                <hr />
                <br />
                <div className="chkout-btn-container">
                   <button className="check-out-btn">CHECK OUT</button> 
                </div>
                

            </div>
        </div>
    )
}

export default Summary
