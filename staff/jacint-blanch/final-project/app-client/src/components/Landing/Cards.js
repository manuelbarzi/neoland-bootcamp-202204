import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out Our Funcionalities!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/landing/img-1.jpg"
              text="En caso de enfrentar un escenario de peligro pide ayuda!"
              label="Heat Map"
              path="/HeatMap"
            />
            {/* <CardItem
              src="images/img-1.jpg"
              text="Experience"
              label=""
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              label="Mystery"
              path="/"
            />
            <CardItem
              src="images/img-1.jpg"
              label="Adventure"
              path="/"
            />
            <CardItem
              src="images/img-1.jpg"
              text=""
              label=""
              path="/sign-up"
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;