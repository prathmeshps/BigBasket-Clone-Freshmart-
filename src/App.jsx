import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Home from './Home';
import Veg from './veg';
import Nonveg from './Nonveg';
import Milk from './Milk';
import Fruits from './Fruits';
import Singin from './Singin';
import Cart from './Cart';
import About from './About';
import Contact from './Contact';
import './main.css';
import { addTocart } from './store';
import { useSelector } from 'react-redux';
import './store'
import Order from './Order';

function App() {
  const products = useSelector(state => state.Cart || []);
  const count = products.reduce((total, item) => total + item.quantity, 0);


  return (
    <>
    <h1>Big Basket-Clone </h1>
  <BrowserRouter>
  <nav>
  <Link to='/Home'>Home page</Link>
  <Link to='/veg'>Veg items</Link>
  <Link to='/Nonveg'>Non-Veg Items</Link>
  <Link to='/milk'>Milk Items</Link>
  <Link to='/Fruits'>Fruits Items</Link>
  <Link to='/Cart'> Cart Page {count}</Link>
  <Link to='/Order'> Order Page</Link>
  <Link to='/About'>AboutUs</Link>
  <Link to='/Contact'>ContactUs</Link>
  </nav>
  <div className="page">
  <Routes>
<Route path="/Home" element={<Home/>}/>
<Route path="/veg" element={<Veg/>}/>
<Route path="/Nonveg" element={<Nonveg/>}/>
<Route path="/milk" element={<Milk/>}/>
<Route path="/Fruits" element={<Fruits/>}/>
<Route path="/Sing" element={<Singin/>}/>
<Route path="/Cart" element={<Cart/>}/>
<Route path="/Order" element={<Order/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/Contact" element={<Contact/>}/>

  </Routes>
  </div>
  </BrowserRouter>

      
    </>
  );
}

export default App;
