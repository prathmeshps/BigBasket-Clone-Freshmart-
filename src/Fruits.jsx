import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from './store';
import './veg.css';
function Fruits() {
  let dispatch = useDispatch()

    const Fruitsproducts = useSelector(globalState => globalState.Product.Fruits);
  
    const FruitsItems = Fruitsproducts.map((product, index) => (
      <li key={index} className="card">
         <img src={product.img} alt={product.name} width={200} className='cart-img'/>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => dispatch(addTocart(product))}>Add to Cart</button>
              </li>
          ));
        

  return (
    <>
      <h1>Veg Items</h1>
      <ul className="row">
        {FruitsItems}
      </ul>
     
    </>
  )
}

export default Fruits;
