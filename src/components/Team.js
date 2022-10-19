import "./Team.css";
import "./How.css";




export const Team = () => {
    return (
      <section class="section " id="team">
        <div class="container ">
          <div class="columns">
            <div id='how' className='text-center how'>
              <div className='col-md-10 col-md-offset-1 section-title'>
                <h2>MEET THE TEAM</h2>
              </div>
            </div>
            <div class="column has-text-centered ">
              <figure class="image is-inline-block is-128x128 ">
                  <img className="is-center" alt="Liliane" src={require('../images/Liliane1.png')}/>
              </figure>
              <p>
                  <strong> Liliane Uwase</strong>
              </p>
              Software Engineer
              <h1 className='h1'>Alfagason10@gmail.com</h1>
            </div>
            <div class="column has-text-centered ">
              <figure class="image is-inline-block is-128x128 ">
                  <img alt='e-health' className='is-center' src={require('../images/Lisa1.png')} />
              </figure>
              <p>
                  <strong> Lisa Musanubukeye</strong>
              </p>
              Guidance Support
              <h1 className='h1'>Alfagason11@gmail.com</h1>
            </div>
            <div class="column has-text-centered ">
              <figure class="image is-inline-block is-128x128 ">
                  <img alt='e-health' className='is-center' src={require('../images/Luce1.png')} />
              </figure>
              <p>
                  <strong> Luce Mugire </strong>
              </p>
                Finances
              <h1 className='h1'>Alfagason12@gmail.com</h1>
            </div>
            <div class="column has-text-centered ">
              <figure class="image is-inline-block is-128x128 ">
                  <img alt='e-health' className='is-center' src={require('../images/Witty1.png')} />
              </figure>
              <p>
                  <strong> Witty Uwera </strong>
              </p>
                Relationships Manager
              <h1 className='h1'>Alfagason13@gmail.com</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
  