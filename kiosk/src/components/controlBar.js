import React, { useState } from 'react';

/*
    This is navigation bar component to be included
    in every page.

    How to use this component
        1. onButton1    :  button event when pushed button1
        2. onButton2    :  button event when pushed button2
        You may add more as more buttons are added
      
    usage example:
        <ControlBar
            onButton1={someFunc1}
            onButton2={someFunc2}
            ...more if more buttons
        />
*/

const ControlBar = (props)=>{
    const [ isVisible, setIsVisible ] = useState(true);
    const { onButton1, onButton2 } = props;

    return (
        <div id="controlBar" className="displayFlex">
            <section>
                <button
                    type="button"
                    onClick={()=>setIsVisible(!isVisible)}
                    class="btn btn-outline-light btn-lg">
                    Toggle
                </button>
            </section>
            <section className={(isVisible)?"visible":"hidden"}>
                <div className="clearB"/>
                <div className="floatR">
                <ul className="nav">
                        <li className="nav-item">
                            <button
                                type="button"
                                onClick={()=>onButton1()}
                                class="btn btn-outline-light btn-lg">
                                ToolBar1
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                type="button"
                                onClick={()=>onButton2()}
                                class="btn btn-outline-light btn-lg">
                                ToolBar2
                            </button>
                        </li>
                    </ul>    
                </div>
                <div className="clearB"/>
            </section>
        </div>
    );
};

export { ControlBar };