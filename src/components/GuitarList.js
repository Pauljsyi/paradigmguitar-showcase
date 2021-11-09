import React, {useState, useEffect} from 'react'
import axios from 'axios'
import GuitarItem from './GuitarItem'
import ProductDetails from './ProductDetails'
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const GuitarList = (props) => {
  const {onAdd} = props
  const [guitars, getGuitars] = useState([])
  const url = 'http://127.0.0.1:5000/guitars'


  useEffect(() => {
    axios.get(url)
      .then(response => {
        // console.log('response', response.data.length)
      getGuitars(response.data);
      // console.log(response.data[0].name)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


console.log('guitars', guitars)

  
  
  return (
    <div className="product-container">
        {
          guitars && guitars.length > 0 ? (guitars.map((guitar, index) => 
          <GuitarItem item={guitar} key={index} onAdd={onAdd}/>)) : null
        }
    </div>
  )
}

export default GuitarList
