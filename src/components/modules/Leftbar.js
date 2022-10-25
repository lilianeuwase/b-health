import React from 'react';
import CardItem3 from './CardItem3';
import '../pages/Services.css';
import '../pages/services/Primary.css';

import skin from '../../images/skin.webp';
import water from '../../images/water1.jpeg';

function Leftbar() {
  return (
    <div class='left-bar'>
      <div class="tile is-parent left-bar is-vertical">
        <div class="tile is-child ">
          <CardItem3
            image = {skin}
            alt='My Skin'
            title = 'A Guide to Taking Care of Your Skin'
            text = 'You may suspect you have dry, oily, or sensitive skin, but do you really know your skin type? ...'
            src = 'https://www.healthline.com/health/beauty-skin-care/skin-types-care'
          />
        </div>
        <div class="tile is-child">
          <CardItem3
              image = {water}
              alt='Water'
              title = 'Water and Healthier Drinks'
              text = 'Getting enough water every day is important for your health ...'
              src = 'https://www.cdc.gov/healthyweight/healthy_eating/water-and-healthier-drinks.html#:~:text=Benefits%20of%20Drinking%20Water&text=Getting%20enough%20water%20every%20day,to%20constipation%20and%20kidney%20stones.'
            />
        </div>
      </div>
    </div>
  );
}

export default  Leftbar;