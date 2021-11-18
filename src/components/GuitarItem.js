import React from 'react';
import {Link} from 'react-router-dom';


const GuitarItem = (props) => {
  const {item, onAdd} = props;
  const guitarurl = `/guitars/${item._id}`;
   
  return (
      <div className="guitar-container">
        <main>
          {item.id > 8 ? 
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
          : <div>card</div> };
          
          
        </main>
        {/* <Card 
          title={item && item.id > 8 ? item.name : null}
          imageUrl={item && item.id > 8 ? item.img : null}
          body={item && item.id > 8 ? item.price : null}
          // onAdd={onAdd}  
        /> */} 

      </div>
 
  );
};

export default GuitarItem;
