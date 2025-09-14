import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About FreshMart</h1>
      <p>
        At <strong>FreshMart</strong>, we are passionate about delivering farm-fresh groceries to your doorstep. 
        Established with the goal of making healthy, quality food accessible to everyone, we partner with trusted local 
        farmers and suppliers to ensure every product you receive is fresh, nutritious, and responsibly sourced.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li><strong>Freshness Guaranteed:</strong> We stock only the freshest vegetables, dairy, and meats.</li>
        <li><strong>Wide Variety:</strong> From organic produce to sweet chocolates, we’ve got it all.</li>
        <li><strong>Reliable Delivery:</strong> On-time doorstep delivery to keep your kitchen stocked.</li>
        <li><strong>Customer First:</strong> Your satisfaction is our top priority.</li>
      </ul>

      <h2>Our Mission</h2>
      <p>
        Our mission is to redefine grocery shopping by offering a seamless online experience that brings convenience, 
        quality, and health to every household.
      </p>

      <h2>Contact Us</h2>
      <p>Email: support@freshmart.com<br/>Phone: +91 98765 43210</p>
    </div>
  );
}

export default About;
