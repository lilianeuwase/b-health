import React from 'react';
import CardItem2 from '../../CardItem2';
import '../Services.css';


function Primary() {
  return (
    <div className='cards'>
      <h1>Our Services</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem2
              subtitle='Health Services that Cover a Range of Prevention, Wellness, and Treatment for Common Illnesses'
              title='Primary Care'
              caption='primary'
            />
          </ul>
          <ul className='cards_items'>
            <CardItem2
              subtitle='Health Services that Cover a Range of Prevention, Wellness, and Treatment for Common Illnesses'
              title='Primary Care'
              caption='primary'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Primary;
