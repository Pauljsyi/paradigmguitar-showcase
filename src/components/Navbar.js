import React from 'react';
import Cart from './Cart';
// import GuitarList from './GuitarList'
// import { useState } from 'react';
// import {Link} from 'react-router-dom';

const Navbar = (props) => {
  const {onAdd, onRemove, cartItems} = props;

  return (
    <div>
      <nav>
        <a href="#/" >
          <h1 className="logo">Paradigm Guitar</h1> 
        </a>
        <a href="/">
          <h6>HOME</h6>
        </a>
        <a href="/">
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