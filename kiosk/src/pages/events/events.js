import React from 'react';
import { NavBar, Qrmodal } from '../../components';
import "./events.scss"
import "./events.css"
import "../../sass/fonts.scss"
import data from "./eventList.json"

const eventList = data.data;

function EventCards(props) {
  const eventsList = props.eventList;
  const cardList = eventsList.map((event) =>
    <div className="card text-center" id="event-card">
      <img src={event.pic} className="card-img-top" alt="event img"/>
      <div className="card-body">
        <h5 className="card-title">{event.title}</h5>
        <p>{event.date}</p>
        <Qrmodal link={event.link} className="btn btn-primary btn-lg btn-block" buttonText="Explore on Your Device" modalText="Explore on Your Device"></Qrmodal>
      </div>
    </div>
  );

  return (
    <div className="card-columns">{cardList}</div>
  );
}

const Events = (props)=>{
  const {onHome, onGuides, onTowns, onEvents, onDirectory, onAbout} = props;

  return (
    <div>
      <div className="event-bg">
        <div className="overlay-div"></div>
        <section id="eventNavBarImg">
          <NavBar onHome={onHome} onGuides={onGuides} onTowns={onTowns} onEvents={onEvents}
            onDirectory={onDirectory} onAbout={onAbout}/>
        </section>
        <div className="text-center">
          <strong className="imgHeader">See what's happening</strong>
          <p className="imgHeader-2">Events happening in Licking County</p>
          <br/>
        </div>
      </div>
      <EventCards eventList={eventList} />
    </div>
  );
}

export { Events };
