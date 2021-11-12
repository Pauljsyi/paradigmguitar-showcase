import React from 'react'
import Carousel from './Carousel';
import GuitarList from './GuitarList';
import Navbar from './Navbar';
import { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import ProductDetails from './ProductDetails'


const Shop = (props) => {
    const { onAdd } = props;

    const url = 'http://127.0.0.1:5000/guitars'

    // useEffect(() => {
    //     axios.get(url)
    //       .then(response => {
    //         // console.log('response', response.data.length)
    //       getGuitars(response.data);
    //       // console.log(response.data[0].name)
    //       })
    //       .catch(error => {
    //         console.log(error)
    //       })
    //   }, [])
    

    // console.log('SHOP', guitarURL)
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
