import React from 'react';
import CardItem2 from '../../CardItem2';
import '../Services.css';
import './Primary.css';


function Primary() {
  return (

      <div class="tile is-ancestor cards1">
        <div class="tile is-parent">
          <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child">
              <p class="title prmry ">One</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </div>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child">
              <CardItem2
                subtitle='Health Services that Cover a Range of Prevention, Wellness, and Treatment for Common Illnesses'
                title='Primary Care'
                caption='primary'
              />
            </article>
            <article class="tile is-child">
              <CardItem2
                  subtitle='Health Services that Cover a Range of Prevention, Wellness, and Treatment for Common Illnesses'
                  title='Primary Care'
                  caption='primary'
                />
            </article>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child">
              <CardItem2
                  subtitle='Health Services that Cover a Range of Prevention, Wellness, and Treatment for Common Illnesses'
                  title='Primary Care'
                  caption='primary'
                />
            </article>
            <article class="tile is-child">
              <CardItem2
                  subtitle='Health Services that Cover a Range of Prevention, Wellness, and Treatment for Common Illnesses'
                  title='Primary Care'
                  caption='primary'
                />
            </article>
          </div>
        </div>
    </div>
  );
}

export default Primary;
