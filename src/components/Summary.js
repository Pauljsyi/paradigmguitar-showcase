import React from 'react'

const Summary = (props) => {
    const { cartItems } = props
    console.log("cartItems", cartItems)

    const guitarPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const tax = guitarPrice * 0.095;
    const shipping = guitarPrice > 2000 ? 0 : 50;
    const totalPrice = guitarPrice + tax + shipping;
    const itemsInCart = cartItems.reduce((a,c) => a + c.qty, 0 );

    console.log(guitarPrice)

    // const itemPrice = cartItems

    // const locale = itemPrice.toLocaleString('en-US', {style: 'currency', currency: "USD"});
    const localePrice = guitarPrice.toLocaleString('en-US', {style: 'currency', currency: "USD"});
    const localetax = tax.toLocaleString('en-US', {style: 'currency', currency: "USD"});
    const localeshipping = shipping.toLocaleString('en-US', {style: 'currency', currency: "USD"});
    const localeTotal = totalPrice.toLocaleString('en-US', {style: 'currency', currency: "USD"});
    return (
        <div>
            <h2>Cart Summary</h2>
            <div>{cartItems.map((item) => (
                <div className="summary-container">
                    <div className="summary-item-container">
                        <div className="summary-img">
                            <img src={item.img} alt="guitar" /> 
                        </div>
                        <div key={item.id} className="item-name">
                            {item.name}
                        </div>
                        <div className="item-qty">
                           qty: {item.qty}
                        </div>
                        <div className="item-price">
                            ${item.qty * item.price}
                        </div>
                    </div>
                    
                </div>
            ))}</div>
              <div className="order-summary-container">
                        <div className="collective-price">
                           item(s) total:  {localePrice}
                        </div>
                        <div className="sum-shipping">
                            shipping: {localeshipping}
                        </div>
                        <div className="sum-tax">
                            tax: {localetax}
                        </div>
                        <div className="sum-total">
                            Total: {localeTotal}
                        </div>

                    </div>

                    <div className="guitar-carousel-container?">

                    </div>
        </div>
    )
}

export default Summary
