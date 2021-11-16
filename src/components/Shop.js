import React from 'react'
import Carousel from './Carousel';
import GuitarList from './GuitarList';
// import Navbar from './Navbar';
// import { useState } from 'react';
// import {Route, Routes} from 'react-router-dom';
// import ProductDetails from './ProductDetails'


const Shop = (props) => {
    const { onAdd } = props;

    return (
        <div>
            <Carousel /> 
              <div className="shop-title" id={'shop'}>
                <h1 >SHOP</h1>
              </div>
              <GuitarList onAdd={onAdd}/>
              
        </div>
    )
}

export default Shop
