import React from 'react'
import Carousel from './Carousel';
import GuitarList from './GuitarList';
import Navbar from './Navbar';
import { useState } from 'react';


const Shop = (props) => {
    const { onAdd, oneGuitarURL} = props;

    return (
        <div>
            <Carousel /> 
              <div className="shop-title" id="shop">
                <h1>SHOP</h1>
              </div>
              <GuitarList onAdd={onAdd} oneGuitarURL={oneGuitarURL}/>
        </div>
    )
}

export default Shop
