import React from 'react';
import { NAVLOGO } from '../assets';

const NavBar = (props)=>{
    const {

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
                            <a onClick={()=>alert("Guides")}>
                                Guides
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>alert("Towns")}>
                                Towns
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>alert("Events")}>
                                Events
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>alert("Directory")}>
                                Directory
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>alert("About")}>
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