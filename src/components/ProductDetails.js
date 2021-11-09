import React from 'react';
import GuitarList from './GuitarList';
// import GuitarItem from './GuitarItem';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

const ProductDetails = (props) => {

 const {item} = props
 console.log('oneguitarurl', item)

  console.log('props', props)
    return (
        <div>
           <GuitarList/>
            
            <h1>HELLOO</h1>
        </div>
    )
}

export default ProductDetails
