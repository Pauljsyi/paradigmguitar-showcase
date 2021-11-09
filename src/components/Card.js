import React from 'react'
// import { useState } from 'react';

const Card = ({title, imageUrl, body}, props) => {
  const {product, onAdd} = props
  // console.log("onAdd in Card.js", props)
  // const onAdd = (product) => {
  //   const exist = cartItems.find(x => x.id === product.id);
  //   if (exist) {
  //       setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty +1} : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, {...products, qty: 1}]);
  //   }
  // }

  return (
    <main>
      {title != null ? 
      <div className="container">
          <div className="container-cards">
            <div className="card-container">
              <div className="image-container">
                <img src={imageUrl} alt='Card Image' />
              </div>
              <div className="card-content">
                <div className="card-title">
                  <h3 className="c-title">{title}</h3>
                </div>
                <div className="card-price">
                  ${body}
                </div>
              </div>

              <div className="btn">
                <button onClick={product}>
                  add to cart
                </button>
              </div> 
            </div>
          </div>
        </div>
      : null}
    </main>
  )
} 

export default Card
