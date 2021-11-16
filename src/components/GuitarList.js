import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import GuitarItem from './GuitarItem'
// import ProductDetails from './ProductDetails'
// import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'

const GuitarList = (props) => {
  const {onAdd, guitarURL} = props
  const [guitars, getGuitars] = useState([])
  const url = 'http://127.0.0.1:5000/guitars'
  // console.log('guitarlist = url', guitars._id)


  // useEffect(() => {
  //   axios.get(url)
  //     .then(response => {
  //       // console.log('response', response.data)
  //     getGuitars(response.data);
  //     // console.log(response.data[0].name)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [])

  useEffect(() => {
    fetchItems();
    
}, [])

const fetchItems = async () => {
    const data = await fetch(url);
    const items = await data.json();
    // console.log('fetched items', items)
    getGuitars(items)
    
}


console.log('guitars', guitars)

  
  
  return (
    <div className="product-container">
        {
          guitars && guitars.length > 0 ? (guitars.map((guitar, index) => 
          <GuitarItem item={guitar} key={index} onAdd={onAdd} guitarURL={guitarURL}/>)) : null
        }
        {/* <Routes>
              <Route path="/guitars/:id" element={<ProductDetails />}/>
              </Routes> */}
    </div>
  )
}

export default GuitarList
