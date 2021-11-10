import React from 'react';
import Cart from './Cart';
// import GuitarList from './GuitarList'
// import { useState } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Navbar = (props) => {
  const {onAdd, onRemove, cartItems} = props;
  

  return (
    // <Router>
      <div>
        <nav>
          <Link to="/" className="navLink">
            <h1 className="logo">Paradigm Guitar</h1> 
          </Link>
          <Link to="/about" className="navLink">
            <h6>ABOUT</h6>
          </Link>
          <Link to="/gallery" className="navLink">
            <h6>GALLERY</h6>
          </Link>
          <Link to="/" className="navLink">
          <div className="shop" onClick={() => window.location.replace("/#shop")}>
            <h6>SHOP</h6>
          </div>
          </Link>
          <div className="cart">
              <i className="fas fa-shopping-cart"></i>
              <a className="cart-content"> 
              <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
          </a>
            </div>
        </nav>
      </div>
    // </Router>
  )
}

export default Navbar