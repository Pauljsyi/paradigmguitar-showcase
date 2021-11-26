import React, {useState, useEffect} from 'react';
import GuitarItem from './GuitarItem';

const GuitarList = (props) => {
  const {onAdd, guitarURL} = props;
  const [guitars, getGuitars] = useState([]);
  // const url = 'http://127.0.0.1:5000/guitars';
  const url = `/guitars`
 
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
    getGuitars(items)
}



const onlyGuitars = (guitar) => {
  let guitarArr = [];
  for (let i = 0; i < guitar.length; i++) {
    if (guitar[i].id > 8) {
      guitarArr.push(guitar[i])
    };
  };
  return guitarArr;
};

const onlyGuitarsList = onlyGuitars(guitars);

  return (
    <div className="product-container">
        {
          guitars && guitars.length > 0 ? (onlyGuitarsList.map((guitar, index) => 
          <GuitarItem item={guitar} key={index} onAdd={onAdd} guitarURL={guitarURL} guitars={guitars}/>)) : null
        }
        
    </div>
  );
};

export default GuitarList;
