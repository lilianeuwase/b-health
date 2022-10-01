import React from 'react';
import CardItem from '../CardItem';
import './Services.css';

function Services() {
  return (
    <div className='cards'>
      <h1>Our Services</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src='images/img-9.jpg'
              text='Health Services that Cover a Range of Prevention, Wellness, and Treatment for Common Illnesses'
              label='Primary Care'
              path='/primary'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Teeth examination and treatment'
              label='Dentist'
              path='/services'
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src='images/img-3.jpg'
              text='Skin, Hair, and Nails Conditions'
              label='Dermatologist'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Diagnosis, Treatment and Prevention of Mental, Emotional and Behavioral Disorders'
              label='Psychiatrist'
              path='/doctors'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Conditions that Affect the Female Reproductive System'
              label='Gynecologist'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
