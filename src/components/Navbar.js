import React from 'react';
import Cart from './Cart';
// import GuitarList from './GuitarList'
// import { useState } from 'react';
// import {Link} from 'react-router-dom';

const Navbar = (props) => {
  const {onAdd, onRemove, cartItems} = props;
    // const {item} = props
    // const {products} = GuitarList;
    // // console.log('data', GuitarList)
    // const [cartItems, setCartItems] = useState([]);
    // // console.log("cartItems in App.js", cartItems)
    
    // const onAdd=(product) => {
    //   // console.log("product", product.id)
    //   const exist = cartItems.find(x => x.id===product.id);
    //   // console.log('x', x)
    //   if (exist) {
    //     setCartItems(
    //       cartItems.map((x) => 
    //         x.id=== product.id ? {...exist, qty: exist.qty + 1} : x
    //       )
    //     )
    //   } else {
    //     setCartItems([...cartItems, {...product, qty:1 }])
    //   }
    // }
    // const onRemove = (product) => {
    //   const exist =cartItems.find((x) => x.id=== product.id);
    //   if (exist.qty === 1) {
    //     setCartItems(cartItems.filter(x => x.id !== product.id));
    //   } else {
    //     setCartItems(
    //       cartItems.map(x => 
    //         x.id === product.id ? {...exist, qty: exist.qty - 1} : x
    //       )
    //     )
    //   }
    // }


  return (
    <div>
      <nav>
        <a href="#/" >
          <h1 className="logo">Paradigm Guitar</h1> 
        </a>
        <a href="home">
          <h6>HOME</h6>
        </a>
        <a href="about">
          <h6>ABOUT</h6>
        </a>
        <a href="#shop">
          <h6>SHOP</h6>
        </a>
        <div className="cart">
            <i className="fas fa-shopping-cart"></i>
            <a className="cart-content"> 
            <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
        </a>
          </div>
      </nav>
    </div>
  )
}

export default Navbar