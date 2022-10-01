import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Services</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src='images/img-9.jpg'
              text='Health services that cover a range of prevention, wellness, and treatment for common illnesses'
              label='Primary Care'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Dentist'
              label='Dentist'
              path='/services'
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src='images/img-3.jpg'
              text='Psychiatrist'
              label='Psychiatrist'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Dermatologist'
              label='Dermatologist'
              path='/doctors'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Gynecologist'
              label='Gynecologist'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
