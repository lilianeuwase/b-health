import React from 'react';
import CardItem2 from '../../modules/CardItem2';
import Leftbar from '../../modules/Leftbar';
import '../Services.css';
import './Primary.css';

function Primary() {
  return (
    <div class="card">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile">
            <div class="tile is-parent left-bar is-vertical">
              <Leftbar/>
            </div>
            <div class="tile is-8 is-vertical">
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child">
                  <CardItem2
                    subtitle='+250788776655 Alfagason@gmail.com'
                    title='Dr. Daniel Melka Seifu'
                    caption='Ethiopia'
                    photo ={require('../../../images/Daniel.jpeg')}
                  />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776654 Alfagason1@gmail.com'
                      title='Dr. Jean Paul Ndayizeye'
                      caption='Rwanda'
                      photo ={require('../../../images/Jean.webp')}
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776653 Alfagason2@gmail.com'
                      title='Dr. Simon Pierre Bigirimana'
                      caption='Rwanda'
                      photo ={require('../../../images/Simon.jpeg')}
                    />
                  </article>
                </div>
              </div>
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776652 Alfagason2@gmail.com'
                      title='Dr. Natnael Shimelash'
                      caption='Ethiopia'
                      photo ={require('../../../images/Nat.jpeg')}
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776651 Alfagason3@gmail.com'
                      title='Dr. Ornella Masimbi'
                      caption='Burundi'
                      photo ={require('../../../images/Ornella.jpeg')}
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776650 Alfagason4@gmail.com'
                      title='Dr. Arlene Nishimwe'
                      caption='Rwanda'
                      photo ={require('../../../images/Arlene.jpeg')}
                    />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Primary;