import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = (props) => {
    const { onAdd } = props;
    const { id } = useParams();
    const [item, getItem] = useState({})
    const url = `http://127.0.0.1:5000/guitars/${id}`
  
    useEffect(() => {
        fetchItem();
        
    })
    
    const fetchItem = async () => {
        const fetchItem = await fetch(url);
        const item = await fetchItem.json();
        getItem(item)
        
        
    }

    return (
        <div className="pd-container">
            
            <div className="item-display">
                <img className="guitar-img" src={item.img} alt={item.id} />
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
