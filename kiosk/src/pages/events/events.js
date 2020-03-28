import React from 'react';
import { NavBar, Qrmodal } from '../../components';
import "./events.scss"
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
  const {onHome, onGuides, onTowns, onEvents, onDirectory, onAbout} = props;

  return (
    <div>
      <div className="event-bg">
        <div className="overlay-div"></div>
        <section id="eventNavBarImg">
          <NavBar
            onHome={onHome}
            onGuides={onGuides}
            onTowns={onTowns}
            onEvents={onEvents}
            onDirectory={onDirectory}
            onAbout={onAbout}
          />
        </section>
        <div className="text-center">
          <strong className="imgHeader">See what's happening</strong>
          <p className="imgHeader-2">Events happening in Licking County</p>
          <br/>
        </div>
      </div>
      <div className="event-date-text">Events starting from March 03, 2020</div>
      <div class="card-deck">
        {eventCard}
        {eventCard}
        {eventCard}
      </div>
    </div>
  );
}

export { Events };
