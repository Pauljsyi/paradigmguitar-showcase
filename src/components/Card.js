import React from 'react'
// import { useState } from 'react';
import {Link} from 'react-router-dom'


const Card = (props) => {
  const {item, onAdd} = props
  const guitarurl = `/guitars/${item._id}`;
  return (
    <div className="container">
                <div className="container-cards">
                  <div className="card-container"> 
                  <Link to={guitarurl} >
                    <div className="image-container">
                      <img className="guitar-img" src={item && item.id > 8 ? item.img : null} alt='guitar' />
                    </div>
                    <div className="card-content">
                      <div className="card-title">
                        <h3 className="c-title">{item && item.id > 8 ? item.name : null}</h3>
                      </div>
                      <div className="card-price">
                        ${item && item.id > 8 ? item.price : null}
                      </div>
                    </div>
                    </Link>
                    <div className="btn">
                      <button onClick={() => onAdd(item)}>
                        add to cart
                      </button>
                    </div> 
                  </div>
                </div> 
              </div> 
  )
} 

export default Card
