import React from 'react'
import './Home.css';
import './Footer.css';
import './veg.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from './store';



function Home() {
  let dispatch = useDispatch()

  //frits itemss
  const Fruitsproducts = useSelector(globalState => globalState.Product.Fruits);
  const FruitsItems = Fruitsproducts.map((product, index) => (
        <li key={index} className="card">
           <img src={product.img} alt={product.name} width={200} className='cart-img'/>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => dispatch(addTocart(product))}>Add to Cart</button>
                </li>
            ));
          
  



// veg items
  const Vegproducts = useSelector(globalState => globalState.Product.Veg);

  const vegItems = Vegproducts.map((product, index) => (
    <li key={index} className="card">

      <img src={product.img} alt={product.name} width={200} className='cart-img'/>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => dispatch(addTocart(product))}>Add to Cart</button>
      </li>
  ));


  // nonvegItems
    const NonVegproducts = useSelector((globalstate) => globalstate.Product.Nonveg);
  
    const NonvegItems = NonVegproducts.map((product, index) => (
      <li key={index} className="card">
        <img src={product.img} alt={product.name} width={200} className='cart-img'/>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
  <button onClick={() => dispatch(addTocart(product))}>Add to Cart</button>
      </li>
    ));
//milk items

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
     <div className="home-container">
          <h1>Welcome to FreshMart</h1>
    <p>Your one-stop shop for fresh and quality groceries.</p>
    </div>
    
      <ul className="row">
        {FruitsItems}
      </ul>

      <ul className="row">
        {vegItems}
      </ul>
      
      <ul className="row">
        {NonvegItems}
      </ul>

      <ol className="row">
        {milkitems}
      </ol>
         <div className="home-container">
     
      <div className="home-sections">
        <div className="home-card">
          <h2>Vegetables</h2>
          <p>Get fresh and organic vegetables delivered to your door.</p>
        </div>
        <div className="home-card">
          <h2>Non-Veg Items</h2>
          <p>Fresh meat and poultry sourced daily from trusted suppliers.</p>
        </div>
        <div className="home-card">
          <h2>Dairy Products</h2>
          <p>Pure milk, cheese, and butter – fresh from local farms.</p>
        </div>
        <div className="home-card">
          <h2>Fruits</h2>
          <p>Get fresh and organic fruits delivered to your door.</p>
        </div>
      </div>
    </div>

    
<footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Get to Know Us</h4>
          <ul>
            <li>About FreshMart</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Make Money with Us</h4>
          <ul>
            <li>Sell on FreshMart</li>
            <li>Become a Vendor</li>
            <li>Affiliate Program</li>
            <li>Advertise Products</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>FreshMart Payment Options</h4>
          <ul>
            <li>FreshMart Wallet</li>
            <li>Gift Cards</li>
            <li>UPI / Credit / Debit</li>
            <li>Cash on Delivery</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Let Us Help You</h4>
          <ul>
            <li>COVID-19 Info</li>
            <li>Your Account</li>
            <li>Returns & Replacements</li>
            <li>Help Center</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FreshMart. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}

export default Home;
