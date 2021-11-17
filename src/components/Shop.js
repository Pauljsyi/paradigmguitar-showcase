import React from 'react'
import Carousel from './Carousel';
import GuitarList from './GuitarList';
import ShopLogo from './ShopLogo';
import { useState, useEffect } from 'react';
// import {Route, Routes} from 'react-router-dom';
// import ProductDetails from './ProductDetails'


const Shop = (props) => {
    const { onAdd} = props;
    // console.log('item from shop.js', item)

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
    
    return (
        <div>
            <Carousel /> 
              <div className="shop-title" id={'shop'}>
                {guitars.length > 0 ? (guitars.map((guitar, index) => 
                <ShopLogo item={guitar} key={index}/>
                )): null}
                
              </div>
              <GuitarList onAdd={onAdd} />
              
        </div>
    )
}

export default Shop
