import React from 'react';
import CardItem2 from '../../modules/CardItem2';
import CardItem3 from '../../modules/CardItem3';
import '../Services.css';
import './Primary.css';

function Primary() {
  return (
    <div class="cards1">
    
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile">
            <div class="tile is-parent left-bar is-vertical">
              <div class="tile is-child ">
                <CardItem3/>
              </div>
              <div class="tile is-child">
                <CardItem3/>
              </div>
              <div class="tile is-child">
                <CardItem3/>
              </div>
            </div>
            <div class="tile is-8 is-vertical">
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child">
                  <CardItem2
                    subtitle='+250788776655 Alfagason@gmail.com'
                    title='Dr. Daniel Melka Seifu'
                    caption='Ethiopia'
                    photo ='../../../../public/images/Trial.jpeg'
                  />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776654 Alfagason1@gmail.com'
                      title='Dr. Jean Paul Ndayizeye'
                      caption='Rwanda'
                      photo ='https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$'
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776653 Alfagason2@gmail.com'
                      title='Dr. Simon Pierre Bigirimana'
                      caption='Rwanda'
                      photo ='https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$'
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
                      photo ='https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$'
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776651 Alfagason3@gmail.com'
                      title='Dr. Ornella Masimbi'
                      caption='Burundi'
                      photo ='https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$'
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776650 Alfagason4@gmail.com'
                      title='Dr. Arlene Nishimwe'
                      caption='Rwanda'
                      photo ='https://image-us.samsung.com/SamsungUS/home/audio/galaxy-buds/MB-04-JustWhatYouWantV4.jpg?$cm-g-fb-full-bleed-img-mobile-jpg$'
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