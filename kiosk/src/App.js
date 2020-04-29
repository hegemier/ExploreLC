import React, { useState, useEffect } from 'react';
import { Guides, Organization } from './pages/guides';
import { Towns } from './pages/towns';
import { About, LouisSullivan, Leadership, Collaborators } from './pages/about/about.js';
import { Events } from './pages/events/';
import { Directory } from './pages/directory'
import { stopSpeech } from './utils/index'; 
import { setLocalFn } from './langs/index'

/*
  I have made this page for other pages to fill in
  to the corresponding context.
  *** please format the page to take the props same as my Guides page. ***
  If still confused, please take refernce to my Guides page.
  Keep the updateState function and simply change name of the page.
  ex)
    return <Towns
        onHome={()=>updateState('home')}
        onGuides={()=>updateState('guides')}
        onTowns={()=>updateState('towns')}
        onEvents={()=>updateState('events')}
        onDirectory={()=>updateState('directory')}
        onAbout={()=>updateState('about')}
    />;
*/


const App = ()=>{
  const { Provider, Consumer } = React.createContext();
  const [state, setState] = useState('home');//you can change part
  const [local, setLocal] = useState('en');
  const updateState = (name) => {
    stopSpeech()
    setState(name)
  }
  useEffect(() => {
    setLocalFn(local, setLocal)
  }, [])
  return (
    <div>
    <Provider value={{value:state, updateState, local}}>
      <Consumer>
        {props=>{
          const { value, updateState,local } = props;
          const mapProps = {
            local,
            onHome: ()=>updateState('home'),
            onGuides: ()=>updateState('guides'),
            onTowns: ()=>updateState('towns'),
            onEvents: ()=>updateState('events'),
            onDirectory: ()=>updateState('directory'),
            onAbout: ()=>updateState('about'),
            onAbout_LouisSullivan: ()=>updateState('louisSullivan'),
            onAbout_Leadership: ()=>updateState('leadership'),
            onAbout_Collaborators: ()=>updateState('collaborators'),
          }
          if (value === 'home')//change the component name to use different page
            return <Events {...mapProps} />;
          else if (value === 'guides')//change the component name to use different page
            return <Guides {...mapProps} />;
          else if (value === 'towns')//change the component name to use different page
            return <Towns {...mapProps} />;
          else if (value === 'about')//change the component name to use different page
            return <About {...mapProps} />;
          else if (value === 'louisSullivan')
            return <LouisSullivan {...mapProps} />;
          else if (value === 'leadership')
            return <Leadership {...mapProps} />;
          else if (value === 'collaborators')
          return <Collaborators {...mapProps} />;
          else if (value === 'events')//change the component name to use different page
            return <Events {...mapProps} />;
          else if (value === 'directory')//change the component name to use different page
            return <Directory {...mapProps} />;
        }}
      </Consumer>
    </Provider>
    </div>
  )
}

export default App
