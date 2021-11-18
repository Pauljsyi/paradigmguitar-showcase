import React from 'react';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import About from './components/About';
import Shop from './components/Shop';
import Summary from './components/Summary';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom"




function App() {

  const [cartItems, setCartItems] = useState([]);

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
    const exist = cartItems.find(x => x.id===product.id);
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
          <Routes> 
              <Route exact path="/" element={<Shop onAdd={onAdd}/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/guitars/:id"  element={<ProductDetails onAdd={onAdd}/>}/>
              <Route path="/summary" element={<Summary cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>}/>
          </Routes>
       
      </div>
  )
};

export default App; 