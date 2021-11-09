import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Carousel from './components/Carousel';
import GuitarList from './components/GuitarList';
import ProductDetails from './components/ProductDetails';
import Shop from './components/Shop';
// import Test from './components/Test';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"



function App(props) {
  const {item} = props;
  console.log('item from APP.js', props)

  const [cartItems, setCartItems] = useState([]);
  // console.log("cartItems in App.js", cartItems)
  
  const onAdd=(product) => {
    // console.log("product", product.id)
    const exist = cartItems.find(x => x.id===product.id);
    // console.log('x', x)
    if (exist) {
      setCartItems(
        cartItems.map((x) => 
          x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        )
      )
  } else {
      setCartItems([...cartItems, {...product, qty:1 }])
    }
  }
  const onRemove = (product) => {
    const exist =cartItems.find((x) => x.id=== product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map(x => 
          x.id === product.id ? {...exist, qty: exist.qty - 1} : x
        )
      )
    }
  }

  return (
      <div className="container">   
        <Navbar onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
        <Router>
          <Routes>
            <Route path="/" element={<Shop onAdd={onAdd}/>}/>
            <Route path="/guitar" element={<ProductDetails/>}/>
          </Routes>
        </Router>
      </div>
  )
};

export default App; 