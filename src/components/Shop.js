import React from "react";
import Carousel from "./Carousel";
import GuitarList from "./GuitarList";
import ShopLogo from "./ShopLogo";
import { useState, useEffect } from "react";
import guitarData from "../data/guitarData";

const Shop = (props) => {
  const { onAdd } = props;

  const [guitars, setGuitar] = useState([]);
  // const url = 'http://127.0.0.1:5000/guitars';

  useEffect(() => {
    // fetchItems();
    setGuitar(guitarData);
  }, []);
  console.log("guitar in shop", guitars);

  // const fetchItems = async () => {
  //   const data = await fetch(url);
  //   const items = await data.json();
  //   setGuitar(items);
  // };

  return (
    <div>
      <Carousel />
      <div className="shop-title" id={"shop"}>
        {guitars.length > 0
          ? guitars.map((guitar, index) => (
              <ShopLogo item={guitar} key={index} />
            ))
          : null}
      </div>
      <GuitarList onAdd={onAdd} />
    </div>
  );
};

export default Shop;
