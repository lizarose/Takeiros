import React from 'react';
import './Specials.css';

// TODO:Need to update with actual happy hour specials
const specials = [
  { 
    name: '20 oz Margaritas and Daquiris',
    description: 'Monday - Wednesday\nCome join us and celebrate with margaritas and daquiris!',
    price: '$6.99',
    image: 'insert image here...',
  },
  {
    name: '72 oz Margaritas and Daquiris',
    description: 'Thursday\nEnjoy an ice cold pitcher of margaritas or daquiris with your choice of flavors!',
    price: '$14.99',
    image: 'insert image here...',
  },
  {
    name: '72 oz Cadillac Margaritas',
    description: 'Friday and Saturday\nEnjoy an ice cold pitcher of margaritas with a special twist!',
    price: '$17.99',
    image: 'insert image here...',
  }
];

const HappyHourSpecials = () => (
  <div className="happy-hour-container" >
    <div className="specials-section" >
      <h2 className="specials-section-title">Happy Hour Specials</h2>
      <div className="specials-cards">
        {specials.map((special, index) => (
          <div className="card" key={index}>
            <img src={special.image} alt={special.name} className="card-image" />
            <div className="card-content">
              <h3 className="special-name">{special.name}</h3>
              <p className="special-description">{special.description}</p>
              <span className="special-price">{special.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HappyHourSpecials;
