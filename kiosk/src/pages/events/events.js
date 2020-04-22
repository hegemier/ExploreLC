import React from 'react';
import { NavBar, Qrmodal } from '../../components';
import "./events.scss"
import "../../sass/fonts.scss"
import data from "./eventList.json"

const eventList = data.data;
const today = new Date();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const buttonEvents = {
  'padding-left': '45%'
}

const displayDate = months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();

function EventDate(props) {
  const dateList = props.dates.map((date) => 
    <p style={{marginBottom: 0}}>{date}</p>
  );

  return <div className="date-block">{dateList}</div>;
}

function EventCards(props) {
  const eventsList = props.eventList;
  const cardList = eventsList.map((event) =>
    <div className="card text-center" id="event-card">
      <img src={event.pic} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">{event.title}</h5>
        <EventDate dates={event.date}></EventDate>
        <Qrmodal link={event.link} className="btn-primary" buttonText="View Event" modalText="Explore on Your Device"></Qrmodal>
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
      <div id="events-date-from">Events starting from {displayDate}</div>
      <EventCards eventList={eventList} />
    </div>
  );
}

export { Events };
