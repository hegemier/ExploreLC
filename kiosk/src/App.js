import React, { useState } from 'react';
import { Guides } from './pages/guides';
import { Towns } from './pages/towns';
import { About, LouisSullivan, Leadership, Collaborators } from './pages/about';
import { Events } from './pages/events';
import { Directory } from './pages/directory'
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
  const [state, updateState] = useState('guides');//you can change part

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
    <Provider value={{value:state, updateState}}>
      <Consumer>
        {props=>{
          const { value, updateState } = props;
          if (value === 'home')//change the component name to use different page
            return <Guides
                  onHome={()=>updateState('home')}
                  onGuides={()=>updateState('guides')}
                  onTowns={()=>updateState('towns')}
                  onEvents={()=>updateState('events')}
                  onDirectory={()=>updateState('directory')}
                  onAbout={()=>updateState('about')}
              />;
          else if (value === 'guides')//change the component name to use different page
            return <Guides
                onHome={()=>updateState('home')}
                onGuides={()=>updateState('guides')}
                onTowns={()=>updateState('towns')}
                onEvents={()=>updateState('events')}
                onDirectory={()=>updateState('directory')}
                onAbout={()=>updateState('about')}
            />;
          else if (value === 'towns')//change the component name to use different page
            return <Towns
                onHome={()=>updateState('home')}
                onGuides={()=>updateState('guides')}
                onTowns={()=>updateState('towns')}
                onEvents={()=>updateState('events')}
                onDirectory={()=>updateState('directory')}
                onAbout={()=>updateState('about')}
            />;
          else if (value === 'about')//change the component name to use different page
            return <About
                onHome={()=>updateState('home')}
                onGuides={()=>updateState('guides')}
                onTowns={()=>updateState('towns')}
                onEvents={()=>updateState('events')}
                onDirectory={()=>updateState('directory')}
                onAbout={()=>updateState('about')}
                onAbout_louisSullivan={()=>updateState('about_louisSullivan')}
                onAbout_leadership={()=>updateState('about_leadership')}
                onAbout_collaborators={()=>updateState('about_collaborators')}
            />;
          else if (value === 'about_louisSullivan')//navigate to the louis sullivan about page
            return <LouisSullivan
              onHome={()=>updateState('home')}
              onGuides={()=>updateState('guides')}
              onTowns={()=>updateState('towns')}
              onEvents={()=>updateState('events')}
              onDirectory={()=>updateState('directory')}
              onAbout={()=>updateState('about')}
              onAbout_louisSullivan={()=>updateState('about_louisSullivan')}
              onAbout_leadership={()=>updateState('about_leadership')}
              onAbout_collaborators={()=>updateState('about_collaborators')}
            />;
          else if (value === 'about_leadership')//navigate to the leadership about page
            return <Leadership
              onHome={()=>updateState('home')}
              onGuides={()=>updateState('guides')}
              onTowns={()=>updateState('towns')}
              onEvents={()=>updateState('events')}
              onDirectory={()=>updateState('directory')}
              onAbout={()=>updateState('about')}
              onAbout_louisSullivan={()=>updateState('about_louisSullivan')}
              onAbout_leadership={()=>updateState('about_leadership')}
              onAbout_collaborators={()=>updateState('about_collaborators')}
            />;
          else if (value === 'about_collaborators')//navigate to the collaborators about page
            return <Collaborators
              onHome={()=>updateState('home')}
              onGuides={()=>updateState('guides')}
              onTowns={()=>updateState('towns')}
              onEvents={()=>updateState('events')}
              onDirectory={()=>updateState('directory')}
              onAbout={()=>updateState('about')}
              onAbout_louisSullivan={()=>updateState('about_louisSullivan')}
              onAbout_leadership={()=>updateState('about_leadership')}
              onAbout_collaborators={()=>updateState('about_collaborators')}
            />;
          else if (value === 'events')//change the component name to use different page
            return <Events
                onHome={()=>updateState('home')}
                onGuides={()=>updateState('guides')}
                onTowns={()=>updateState('towns')}
                onEvents={()=>updateState('events')}
                onDirectory={()=>updateState('directory')}
                onAbout={()=>updateState('about')}
            />;
          else if (value === 'directory')//change the component name to use different page
            return <Directory
                onHome={()=>updateState('home')}
                onGuides={()=>updateState('guides')}
                onTowns={()=>updateState('towns')}
                onEvents={()=>updateState('events')}
                onDirectory={()=>updateState('directory')}
                onAbout={()=>updateState('about')}
            />;
        }}
      </Consumer>
    </Provider>
    </div>
  )
}

export default App
