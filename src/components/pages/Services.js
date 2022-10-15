import React from 'react';
import CardItem from '../modules/CardItem1';
import './Services.css';

function Services() {
  return (
    <div className='cards'>
      <p class="title">Our Services</p>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src={require('../../images/Primary.jpeg')}
              text='Health Services that Cover a Range of Prevention, Wellness, and Treatment for Common Illnesses'
              label='Primary Care'
              path='/primary'
            />
            <CardItem
              src={require('../../images/Dentistry.jpeg')}
              text='Teeth examination and treatment'
              label='Dentist'
              path='/dentist'
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src={require('../../images/Dermatology.webp')}
              text='Skin, Hair, and Nails Conditions'
              label='Dermatologist'
              path='/derma'
            />
            <CardItem
              src={require('../../images/Psychiatristry.jpeg')}
              text='Diagnosis, Treatment and Prevention of Mental, Emotional and Behavioral Disorders'
              label='Psychiatrist'
              path='/psy'
            />
            <CardItem
              src={require('../../images/Gynecologist.jpeg')}
              text='Conditions that Affect the Female Reproductive System'
              label='Gynecologist'
              path='/gyne'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
