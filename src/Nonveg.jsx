import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from './store';
function Nonveg() {
  let dispatch = useDispatch()

  const NonVegproducts = useSelector((globalstate) => globalstate.Product.Nonveg);

  const NonvegItems = NonVegproducts.map((product, index) => (
    <li key={index} className="card">
      
      <img src={product.img} alt={product.name} width={200} className='cart-img'/>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
<button onClick={() => dispatch(addTocart(product))}>Add to Cart</button>
    </li>
  ));

  return (
    <>
      <h1>Nonveg Items</h1>
      <ul className="row">
        {NonvegItems}
      </ul>
    </>
  );
}

export default Nonveg;
