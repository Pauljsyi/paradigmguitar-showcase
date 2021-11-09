import React, {useState} from 'react';
import Images from './Images';
import custom from '../featured/custom.jpg';
import luthier from '../featured/luthier.jpg';
import vintage from '../featured/vintage.jpg';



const Carousel = () => {

  // create an array of assets to display inside carousel
  
  const [x, setX] = useState(0);
  let carouselArr = [<Images src={custom}/>, <Images src={luthier} />, <Images src={vintage} />];
  const goLeft = () => {
    x === 0 ? setX(-100 * (carouselArr.length - 1)) : setX(x + 100)
  };
  const goRight = () => {
    x === -100 * (carouselArr.length - 1) ? setX(0) : setX(x - 100)
    
  }


  return (
    <div className="container">
      <div className="carousel">
        {
          carouselArr.map((item, index) => {
            return <div key={index} className="carousel-item"
            style={{transform: `translateX(${x}%)`}}
            >{item}</div>
          })
        }
        <button id="goLeft" onClick={goLeft}><i id="left-arrow" className="fas fa-chevron-left"></i></button>
        <button id="goRight" onClick={goRight}><i id="right-arrow" className="fas fa-chevron-right"></i></button>
      </div>
    </div>
  )
}

export default Carousel