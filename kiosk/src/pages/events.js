import React from 'react';
import { NavBar } from '../components';
import "../sass/events.scss"
import "../sass/fonts.scss"

// data-src="https://images.squarespace-cdn.com/content/v1/5bc6137be6666940992e5e76/1559500228057-LLABQMXYI35CLUH4Q7FG/ke17ZwdGBToddI8pDm48kIu3c6RI25Ef7RzjXQWq7X97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ua_gHjAqlkTAptD6YipitaW0yqs0Foy9-1vLCnclZojZAVle5px3XiuuAGKTYFVv9w/front-intro-bg-15.jpg"
// data-image="https://images.squarespace-cdn.com/content/v1/5bc6137be6666940992e5e76/1559500228057-LLABQMXYI35CLUH4Q7FG/ke17ZwdGBToddI8pDm48kIu3c6RI25Ef7RzjXQWq7X97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ua_gHjAqlkTAptD6YipitaW0yqs0Foy9-1vLCnclZojZAVle5px3XiuuAGKTYFVv9w/front-intro-bg-15.jpg"s

const Events = ()=>{
  return (
    <div>
      <div className="event-bg">
        <div className="overlay-div"></div>
        <img className="overlay-bg" src="https://static1.squarespace.com/static/ta/5bc6137be6666940992e5e76/230/assets/elc-topo-top-01.png"/>
        <NavBar/>
        <div className="text-center">
          <strong className="imgHeader">See what's happening</strong>
          <p className="imgHeader-2">Events happening in Licking County</p>
          <br/>
        </div>
      </div>
      <div className="event-date-text">Events starting from March 03, 2020</div>
    </div>
  );
}

export { Events };
