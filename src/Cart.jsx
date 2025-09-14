import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import './button.css';
import { increment, decrement, remove, clearCart, addOrder } from './store'; // import proper actions
import { useNavigate } from 'react-router-dom'; // for navigation


function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Cartobjects = useSelector(globalstate => globalstate.Cart);

  const calculatingAmount = () => {
    let total = Cartobjects.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discountAmount = (total * 10) / 100;
    let priceAfterDiscount = total - discountAmount;
    let tax = (priceAfterDiscount * 5) / 100;
    let finalPrice = priceAfterDiscount + tax;
    return { total, discountAmount, tax, finalPrice };
  };

  const { total, discountAmount, tax, finalPrice } = calculatingAmount();

  const listitems = Cartobjects.map((item, index) => (
    <li key={index} className="cart-item">
      <img src={item.img} alt={item.name} width={200} className="cart-img" />
      <div className="cart-details">
        <p>{item.name}</p>
        <p>${item.price}</p>
        <p>Qty: {item.quantity}</p>
        <div className="button-row">
          <button onClick={() => dispatch(increment(item))}>+</button>
          <button onClick={() => dispatch(decrement(item))}>-</button>
          <button onClick={() => dispatch(remove(item))}>Remove</button>
        </div>
      </div>
    </li>
  ));

  const handlePurchase = () => {
  if (Cartobjects.length > 0) {
    dispatch(addOrder(Cartobjects));
    alert("Items successfully purchased!");
    dispatch(clearCart());
  }


  };

  return (
    <div className="cart-container">
      <h2>🛒 Cart Items</h2>
      <ul className="cart-list">{listitems}</ul>
      <h3>Your Total Amount: ${total.toFixed(2)}</h3>
      <h3>Your Discount (10%): ${discountAmount.toFixed(2)}</h3>
      <h3>Your Tax (5%): +${tax.toFixed(2)}</h3>
      <h3>Your Final Amount: ${finalPrice.toFixed(2)}</h3>
      <button onClick={handlePurchase} className="purchase-btn">Purchase</button>
    </div>
  );
}

export default Cart;
