import React from "react";
import { Link } from "react-router-dom";

const GuitarItem = (props) => {
  const { item, onAdd } = props;

  return (
    <main>
      {item.id > 8 ? (
        <div className="container-cards">
          <div className="card-container">
            <Link to={`/productdetail/${item._id}`}>
              <div className="image-container">
                <img
                  className="guitar-img"
                  src={item && item.id > 8 ? item.img : null}
                  alt="guitar"
                />
              </div>
              <div className="card-content">
                <div className="card-title">
                  <h3 className="c-title">
                    {item && item.id > 8 ? item.name : null}
                  </h3>
                </div>
                <div className="card-price">
                  ${item && item.id > 8 ? item.price : null}
                </div>
              </div>
            </Link>
            <div className="btn">
              <button onClick={() => onAdd(item)}>add to cart</button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
};

export default GuitarItem;
