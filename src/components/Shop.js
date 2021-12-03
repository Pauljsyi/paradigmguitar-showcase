import React from "react";
import Carousel from "./Carousel";
import GuitarList from "./GuitarList";
import ShopLogo from "./ShopLogo";
import { useState, useEffect } from "react";

const Shop = (props) => {
  const { onAdd } = props;

  const [guitars, getGuitars] = useState([]);
  const url = "http://127.0.0.1:5000/guitars";
  // const url = '/guitars';

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(url);
    const items = await data.json();
    getGuitars(items);
  };

  return (
    <div className="shop-container">
      <Carousel />
      <div className="shop-title" id={"shop"}>
        {guitars.length > 0
          ? guitars.map((guitar, index) => (
              <ShopLogo item={guitar} key={index} />
            ))
          : null}
      </div>
      <div className="shop-guitars-container">
        <GuitarList onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Shop;
