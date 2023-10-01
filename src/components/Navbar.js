import React, { useState, useRef, useEffect } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import useOnClickOutside from "../hooks/useOnClickOutside";
import Logo from "./Logo";
import guitarData from "../data/guitarData";

const Navbar = (props) => {
  const { onAdd, onRemove, cartItems } = props;

  const [guitars, setGuitars] = useState([]);
  // const url = "http://127.0.0.1:5000/guitars";

  useEffect(() => {
    // fetchItems();
    setGuitars(guitarData);
  }, []);

  // const fetchItems = async () => {
  //   const data = await fetch(url);
  //   const items = await data.json();

  //   setGuitars(items);
  // };
  console.log("items", guitars);
  const [show, setShow] = useState(false);
  const itemsInCart = cartItems.reduce((a, c) => a + c.qty, 0);

  const sideBarRef = useRef();
  useOnClickOutside(sideBarRef, () => setShow(false));
  return (
    <nav className="navbar">
      <Link to="/" className="navLink" id="logo">
        {guitars.length > 0
          ? guitars.map((guitar, index) => <Logo item={guitar} key={index} />)
          : null}
      </Link>
      <Link to="/about" className="navLink" id="about">
        <h6>ABOUT</h6>
      </Link>
      <div className="cart" onClick={() => setShow(!show)}>
        <div className="cart-icon">
          <div className="fas fa-shopping-cart"></div>
          <Cart
            // ref={sideBarRef}
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems}
            show={show}
            setShow={setShow}
          />
          <div className="items-count">{itemsInCart}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
