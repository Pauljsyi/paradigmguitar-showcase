import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from 'axios';

const ProductDetails = (props) => {
  const { onAdd } = props;
  const { id } = useParams();
  const [item, getItem] = useState({});
  const url = `http://127.0.0.1:5000/guitars/${id}`;
  // const url = `/guitars/${id}`

  useEffect(() => {
    fetchItem();
    console.log(item);
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(url);
    const item = await fetchItem.json();
    getItem(item);
  };
  //     const callItem = () => {
  //         axios.get(url)
  //         .then(response => {
  //           // console.log('response', response.data)
  //         getItem(response.data);
  //         // console.log(response.data[0].name)
  //         })
  //         .catch(error => {
  //           console.log(error)
  //         })
  //     }

  //       useEffect(() => {
  //     callItem();
  //   },[])
  //   console.log(item)

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
  );
};

export default ProductDetails;
