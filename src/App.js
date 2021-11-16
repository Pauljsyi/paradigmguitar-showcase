import React from 'react';
import Navbar from './components/Navbar';
// import Cart from './components/Cart';
// import Carousel from './components/Carousel';
// import GuitarList from './components/GuitarList';
// import GuitarItem from './components/GuitarItem'
import ProductDetails from './components/ProductDetails';
import About from './components/About';
import Shop from './components/Shop';
import Summary from './components/Summary';
// import Test from './components/Test';
import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom"
import reactDom from 'react-dom';



function App() {

  const [cartItems, setCartItems] = useState([]);
  // console.log("cartItems in App.js", cartItems)
  React.useEffect(() => {
    const data = localStorage.getItem('guitars')
    if (data) {
      setCartItems(JSON.parse(data))
    }
  }, [])
  React.useEffect(() => {
    localStorage.setItem('guitars', JSON.stringify(cartItems));
  });

  
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
        {/* <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/> */}
          <Routes> 
              <Route exact path="/" element={<Shop onAdd={onAdd}/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/guitars/:id"  element={<ProductDetails onAdd={onAdd}/>}/>
              <Route path="/summary" element={<Summary cartItems={cartItems}/>}/>
          </Routes>
       
      </div>
  )
};

export default App; 