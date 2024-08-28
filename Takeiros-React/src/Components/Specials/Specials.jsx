import React from 'react';
import './Specials.css';

//TODO: Update with actual happy hour specials
const specials = [
  {
    name: '20 oz Margaritas and Daquiris',
    description: 'Monday - Wednesday\nCome join us and celebrate with margaritas and daquiris!',
    price: '$6.99',
    image: 'insert image here...',
    days: ['Monday', 'Tuesday', 'Wednesday'],
  },
  {
    name: '72 oz Margaritas and Daquiris',
    description: 'Thursday\nEnjoy an ice cold pitcher of margaritas or daquiris with your choice of flavors!',
    price: '$14.99',
    image: 'insert image here...',
    days: ['Thursday'],
  },
  {
    name: '72 oz Cadillac Margaritas',
    description: 'Friday and Saturday\nEnjoy an ice cold pitcher of margaritas with a special twist!',
    price: '$17.99',
    image: 'insert image here...',
    days: ['Friday', 'Saturday'],
  }
];

//This is to get the current day so a badge is displayed on the current day happy hour specials
const getCurrentDay = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay();
  return daysOfWeek[today];
};


const HappyHourSpecials = () => {
  const currentDay = getCurrentDay();

  return (
    <div className="happy-hour-container">
      <div className="specials-section">
        <h2 className="specials-section-title">Happy Hour Specials</h2>
        <div className="specials-cards">
            {/* This maps over the specials and displays them each on a card along with identifying their days to put a badge on the current day special */}
          {specials.map((special, index) => (
            <div
              className={`card ${special.days.includes(currentDay) ? 'highlighted' : ''}`}
              key={index}
            >
              {special.days.includes(currentDay) && (
                <div className="card-badge">Today's Happy Hour</div>
              )}
              {/* //TODO: need to add in photos for happy hour specials */}
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
};

export default HappyHourSpecials;
