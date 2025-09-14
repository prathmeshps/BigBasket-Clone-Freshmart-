import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from './store';
import './veg.css';

function Veg() {
  let dispatch = useDispatch()

  const Vegproducts = useSelector(globalState => globalState.Product.Veg);

  const vegItems = Vegproducts.map((product, index) => (
    <li key={index} className="card">

      <img src={product.img} alt={product.name} width={200} className='cart-img'/>
      <h3>{product.name}</h3>
      <p>$
        {product.price}</p>
      <button onClick={() => dispatch(addTocart(product))}>Add to Cart</button>
      </li>
  ));

  return (
    <>
      <h1>Vegetables</h1>
      <ul className="row">
        {vegItems}
      </ul>
    </>
  );
}

export default Veg;
