import React from 'react'
// import Card from './Card'
// import { useState } from 'react';
// import Test from './Test';
// import ProductDetails from './ProductDetails.js';
import {Link} from 'react-router-dom'


const GuitarItem = (props) => {
  // const [cartItems, setCartItems] = useState([]);
  const {item, onAdd, match} = props
  // console.log("item id?", item)

  const guitarurl = `/guitars/${item._id}`;
  const gURL = "/guitar"
  // console.log('match', match)
 
  // console.log('item name', item.name);

   return (
     
      <div className="guitar-container">
        <main>
          {item.price !== 0 ? 
              <div className="container">
                <div className="container-cards">
                  <div className="card-container"> 
                  <Link to={guitarurl} >
                    <div className="image-container">
                      <img src={item && item.id > 8 ? item.img : null} alt='Card Image' />
                    </div>
                    <div className="card-content">
                      <div className="card-title">
                        <h3 className="c-title">{item && item.id > 8 ? item.name : null}</h3>
                      </div>
                      <div className="card-price">
                        ${item && item.id > 8 ? item.price : null}
                      </div>
                    </div>
                    </Link>
                    <div className="btn">
                      <button onClick={() => onAdd(item)}>
                        add to cart
                      </button>
                    </div> 
                  </div>
                </div> 
              </div> 
          : null}
        </main>
        {/* <Card 
          title={item && item.id > 8 ? item.name : null}
          imageUrl={item && item.id > 8 ? item.img : null}
          body={item && item.id > 8 ? item.price : null}
          // onAdd={onAdd}  
        /> */} 

      </div>
 
  ) 
}

export default GuitarItem