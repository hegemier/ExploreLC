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

    usage example:
        <NavBar
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
                src={NAVLOGO}
                alt="navLogo"
              />  
            </div>
            <div id="headerNav">
                <div className="clearB"/>
                <div className="floatR">
                    <ul className="nav">
                        <li className="nav-item">
                            <a onClick={()=>onGuides()}>
                                Guides
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>onTowns()}>
                                Towns
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>onEvents()}>
                                Events
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>onDirectory()}>
                                Directory
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>onAbout()}>
                                About
                            </a>
                        </li>
                    </ul>    
                </div>
                <div className="clearB"/>        
            </div>
        </section>
    );
};

export { NavBar };