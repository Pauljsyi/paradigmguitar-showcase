import React, { useState, useRef, useEffect} from 'react';
import Cart from './Cart';
// import GuitarList from './GuitarList'
// import { useState } from 'react';
import {Link} from 'react-router-dom';
import useOnClickOutside from '../hooks/useOnClickOutside'
import Logo from './Logo';

const Navbar = (props) => {
  const {onAdd, onRemove, cartItems} = props;

  const [guitars, getGuitars] = useState([])
  const url = 'http://127.0.0.1:5000/guitars'
 

  useEffect(() => {
    fetchItems();
    
}, [])

const fetchItems = async () => {
    const data = await fetch(url);
    const items = await data.json();
    // console.log('fetched items', items)
    getGuitars(items)
    
}

  const [show, setShow] = useState(false);
  const itemsInCart = cartItems.reduce((a,c) => a + c.qty, 0 );


  const sideBarRef = useRef();
  useOnClickOutside(sideBarRef, () => setShow(false))
  return (
    // <Router>
      
        <nav className="navbar">
          <Link to="/" className="navLink" id="logo">
            {/* <img src="" alt="logo" /> */}
            {guitars.length > 0 ? (guitars.map((guitar, index) => 
            <Logo item={guitar} key={index} />
            )): null}
            
            {/* <h2>Paradigm Guitar</h2> */}
          </Link>
          <Link to="/about" className="navLink" id="about">
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
  )
}

export default Navbar