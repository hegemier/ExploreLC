import React from 'react';
import {Towns} from "./pages/towns/"
import {NavBar} from "./components"
function App() {
  return (
    <div>
    <NavBar/>
    <Towns/>
import { Guides, Organization } from './pages';

const App = ()=>{
  return (
    <div className="displayBlock">
      <Guides/>
      <Organization/>
    </div>
  );
}

export default App;
