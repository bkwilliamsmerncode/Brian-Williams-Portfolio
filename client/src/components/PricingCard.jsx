import React from 'react';
import "./PricingCardStyle.css";
import { Link } from 'react-router-dom';

function PricingCard() {
  return (
    <div className='pricing'>
      <h1 style={{textAlign: "center", margin: "20px"}}>Freelance Pricing</h1>
      <div className="card-container">
        <div className="card">
            <h3>Basic</h3>
            <span className='bar'></span>
            <p className='btc'>$ 100</p>
            <p>- 3 Days -</p>
            <p>- 3 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/Contact" className='btn'>
            PURCHASE NOW
            </Link>
        </div>
        <div className="card">
            <h3>Premium</h3>
            <span className='bar'></span>
            <p className='btc'>$ 200</p>
            <p>- 2 Days -</p>
            <p>- 5 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/Contact" className='btn'>
            PURCHASE NOW
            </Link>
        </div>
        <div className="card">
            <h3>Buisness</h3>
            <span className='bar'></span>
            <p className='btc'>$ 300</p>
            <p>- 5 Days -</p>
            <p>- 8 Pages -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/Contact" className='btn'>
            PURCHASE NOW
            </Link>
        </div>
      </div>
    </div>
  )
}

export default PricingCard
