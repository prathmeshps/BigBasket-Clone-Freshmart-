import React from 'react';
import { useSelector } from 'react-redux';
import './Order.css'; // optional CSS styling

function Order() {
  const orders = useSelector(state => state.Orders);

  return (
    <div className="order-container">
      <h2>📦 Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <ul className="order-list">
          {orders.map((item, index) => (
            <li key={index} className="order-item">
              <img src={item.img} alt={item.name} width={120} />
              <div className="order-details">
                <p><strong>{item.name}</strong></p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Order;
