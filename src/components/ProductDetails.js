import React, {useState, useEffect} from 'react'
import GuitarList from './GuitarList';
import GuitarItem from './GuitarItem';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = (props) => {
    const { onAdd } = props;
    console.log('onadd', onAdd)
    const { id } = useParams();
    const [item, getItem] = useState({})
    const url = `http://127.0.0.1:5000/guitars/${id}`
  
//   console.log("match", match)
    useEffect(() => {
        fetchItem();
        console.log('id', id)
    }, [])
    
    const fetchItem = async () => {
        const fetchItem = await fetch(url);
        const item = await fetchItem.json();
        getItem(item)
        console.log('fetched item', item)
        
    }

    // console.log("PRODUCT DETAILS guitar",guitar)

//   console.log('props', props)
    return (
        <div className="pd-container">
            
            <div className="item-display">
                <img src={item.img} alt={item.id} />
           </div>
            <div className="item-details">
                <h1 className="black">{item.name}</h1>
                <h1>${item.price}</h1>   
                <button onClick={() => onAdd(item)}>add to cart</button>
            </div>
           
           
        </div>
    )
}

export default ProductDetails
