import React, { useState, useRef } from 'react';
import Cart from './Cart';
// import GuitarList from './GuitarList'
// import { useState } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import useOnClickOutside from '../hooks/useOnClickOutside'

const Navbar = (props) => {
  const {onAdd, onRemove, cartItems} = props;
  const [show, setShow] = useState(false);
  const itemsInCart = cartItems.reduce((a,c) => a + c.qty, 0 );

  const sideBarRef = useRef();
  useOnClickOutside(sideBarRef, () => setShow(false))
  return (
    // <Router>
      <div>
        <nav className="navbar">
          <Link to="/" className="navLink">
            <h1 className="logo">Paradigm Guitar</h1> 
          </Link>
          <Link to="/about" className="navLink">
            <h6>ABOUT</h6>
          </Link>
          {/* <Link to="/gallery" className="navLink">
            <h6>GALLERY</h6>
          </Link> */}
          {/* <Link to="/" className="navLink">
          <div className="shop" onClick={() => window.location.replace("/#shop")}>
            <h6>SHOP</h6>
          </div>
          </Link> */}
          <div  className="cart" onClick={() => setShow(!show)}>
              <div  className="cart-icon" > 
                <i  className="fas fa-shopping-cart"></i> 
                  <Cart ref={sideBarRef} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} show={show} setShow={setShow}/>
                  <div className="items-count">{itemsInCart}</div>
             </div>
              
            </div>
        </nav>
      </div>
    // </Router>
  )
}

export default Navbar