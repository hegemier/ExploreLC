import React from 'react';
import { NAVLOGO } from '../assets';

/*
    This is navigation bar component to be included
    in every page.

    How to use this component
        1. onGuides    :  button event when pushed onGuides navlink
        2. onTowns     :  button event when pushed onTowns navlink
        3. onEvents    :  button event when pushed onEvents navlink
        4. onDirectory :  button event when pushed onDirectory navlink
        5. onAbout     :  button event when pushed onAbout navlink
        6. onHome      :  button event when clicked the logo

    usage example:
        <NavBar
            onHome={()=>someFunc6()}
            onGuides={()=>someFunc1()}
            onTowns={()=>someFunc2()}
            onEvents={()=>someFunc3()}
            onDirectory={()=>someFunc4()}
            onAbout={()=>someFunc5()}
        />

    font is not downloaded yet.
    Will be updated when getting info from Garret and Alex
*/

const NavBar = (props)=>{
    const {
        onHome,
        onGuides,         
        onTowns,
        onEvents,
        onDirectory,
        onAbout
    } = props;

    return (
        <section id="top" className="displayFlex">
            <div id="navLogo">
              <img
                onClick={()=>onHome()}
                src={NAVLOGO}
                alt="navLogo"
              />  
            </div>
            <div id="headerNav">
                <div className="clearB"/>
                <div className="floatR">
                    <ul className="nav">
                        <li className="nav-item">
                            <button
                                type="button"
                                onClick={()=>onGuides()}
                                class="btn btn-outline-light btn-lg">
                                Guides
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                type="button"
                                onClick={()=>onTowns()}
                                class="btn btn-outline-light btn-lg">
                                Towns
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                type="button"
                                onClick={()=>onEvents()}
                                class="btn btn-outline-light btn-lg">
                                Events
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                type="button"
                                onClick={()=>onDirectory()}
                                class="btn btn-outline-light btn-lg">
                                Directory
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                type="button"
                                onClick={()=>onAbout()}
                                class="btn btn-outline-light btn-lg">
                                 About
                            </button>
                        </li>
                    </ul>    
                </div>
                <div className="clearB"/>        
            </div>
        </section>
    );
};

export { NavBar };