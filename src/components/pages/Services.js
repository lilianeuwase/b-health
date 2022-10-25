import React from 'react';
import CardItem from '../modules/CardItem1';
import './Services.css';

import primary from '../../images/Primary.jpeg';
import dentist from '../../images/Dentistry.jpeg';
import derma from '../../images/Dermatology.webp';
import psy from '../../images/Psychiatristry.jpeg';
import gyn from '../../images/Gynecologist.jpeg';

function Services() {
  return (
    <div className='cards'>
      <p class="title">Our Services</p>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src={primary}
              text='Health Services that Cover a Range of Prevention, Wellness, and Treatment for Common Illnesses'
              label='Primary Care'
              path='/primary'
            />
            <CardItem
              src={dentist}
              text='Teeth examination and treatment'
              label='Dentist'
              path='/dentist'
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src={derma}
              text='Skin, Hair, and Nails Conditions'
              label='Dermatologist'
              path='/derma'
            />
            <CardItem
              src={psy}
              text='Diagnosis, Treatment and Prevention of Mental, Emotional and Behavioral Disorders'
              label='Psychiatrist'
              path='/psy'
            />
            <CardItem
              src={gyn}
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
