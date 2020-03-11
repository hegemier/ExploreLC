import React from 'react';
import { NavBar, Qrmodal } from '../../components';
import "../../sass/events.scss"
import "../../sass/fonts.scss"

const eventCard = (
  <div class="card">
    <div className="card-img-top event-card-img"></div>
    <div class="card-body">
      <strong class="card-title">Speaker Series - Ticks: updates on diseases and prevention</strong>
      <p class="card-text">Apr 02, 2020 @ 7:00 pm<br/>Burton Morgan Hall, Denison University<br/>Partner: Licking Park District</p>
      <Qrmodal link="https://www.facebook.com/508276569892107" className="card-link">View Event</Qrmodal>
    </div>
  </div>
);

const Events = (props)=>{
  return (
    <div>
      <div className="event-bg">
        <div className="overlay-div"></div>
        <img className="overlay-bg" src="https://static1.squarespace.com/static/ta/5bc6137be6666940992e5e76/230/assets/elc-topo-top-01.png"/>
        <section id="guideBanner">
              <NavBar
                  onHome={props.onHome}
                  onGuides={props.onGuides}
                  onTowns={props.onTowns}
                  onEvents={props.onEvents}
                  onDirectory={props.onDirectory}
                  onAbout={props.onAbout}
              />
          </section>
          <div className="text-center">
          <strong className="imgHeader">See what's happening</strong>
          <p className="imgHeader-2">Events happening in Licking County</p>
          <br/>
        </div>
      </div>
      <div className="event-date-text">Events starting from March 03, 2020</div>
      <script></script>
      <div class="card-deck">
      <div className="col-md">{eventCard}</div>
          <div className="col-md">{eventCard}</div>
          <div className="col-md">{eventCard}</div>
      </div>
    </div>
  );
}

export { Events };
