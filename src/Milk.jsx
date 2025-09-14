import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addTocart } from './store';
import './veg.css';

function Milk() {
  let dispatch = useDispatch()

  const Milkproducts = useSelector(globalState => globalState.Product.Milk);

  const milkitems = Milkproducts.map((product, index) => (
    <li key={index} className="card">

<img src={product.img} alt={product.name} width={200} className='cart-img'/>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => dispatch(addTocart(product))}>Add to Cart</button>
      </li>
  ));
  return (
    <>
      <h1>Milkproducts</h1>
      <ol className="row">
        {milkitems}
      </ol>
    </>
  )
}

export default Milk;
