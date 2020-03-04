import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from '../components';

const Events = ()=>{
  return (
    <div>
      <NavBar/>
      <strong>See what's happening</strong>
      <br/>
      "Events happening in Licking County"
    </div>
  );
}

export { Events };
