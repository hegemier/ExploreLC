import React, { useState, useEffect } from "react"
import { Qrmodal, NavBar } from "../../components/"
import "./dictionary.scss"
import { getList }  from './data';
import { faVolumeUp, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { t, setLocalFn } from '../../langs/index';
import { playSpeech, stopSpeech, cancelSpeech } from '../../utils/index';

const ToggleLang = (props)=>{
  const { lang } = props;
  const activeClassName = 'btn btn-dark LRPadding10 margin10'
  const defaultClassName = 'btn btn-light LRPadding10 margin10'
  const getClass = (local) => {
    return local === lang ? activeClassName: defaultClassName;
  }

  return (
    <div>
      <div className="dieslayFlex LRPadding10">
          <button
              type="button"
              onClick={()=>setLocalFn('en')}
              className={getClass('en')}>
              {t('langs.en')}
          </button>
          <button
              type="button"
              onClick={()=>setLocalFn('de')}
              className={getClass('de')}>
              {t('langs.de')}
          </button>
          <button
              type="button"
              onClick={()=>setLocalFn('fr')}
              className={getClass('fr')}>
              {t('langs.fr')}
          </button>
          <button
              type="button"
              onClick={()=>setLocalFn('es')}
              className={getClass('es')}>
              {t('langs.es')}
          </button>
          <button
              type="button"
              onClick={()=>props.play()}
              className="btn btn-dark LRPadding10 margin10">
              <Icon icon={faVolumeUp} size="1x"/>
          </button>
          <button
              type="button"
              onClick={()=>props.stop()}
              className="btn btn-dark LRPadding10 margin10">
              <Icon icon={faPause} size="1x"/>
          </button>

          <button
            type="button"
            onClick={()=>cancelSpeech()}
            className="btn btn-dark LRPadding10 margin10">
              {t('directory.stop')}
            </button>
      </div>
    </div>
  );
};

function Directory(props) {
  //this list will be converted into a grid of cards where you can click on a card and view information
  const { local } = props;
  const townarray = getList(local);
  const threeGrid = () => { //automatically returning component
    return townarray.map(item => { //map the town data onto the cards and define classes for later modification
      const { id, img, boldtext, link } = item;
      return (
        <div key={id} className="card floatL width33">
          <img src={img} className="card-img-top imgprops" alt=""/>
          <div className="card-body">
            <p>{boldtext}</p>
            <Qrmodal link={link} className="btn-primary" buttonText={t('directory.moreInformation')} modalText={t('directory.explore')}></Qrmodal>
            {/* <Button variant="primary" style={{marginLeft: '10px'}} onClick={() => stopSpeech(boldtext)}>Stop audio</Button> */}
          </div>
        </div>
      )
    })
  }

  const onPlay = () => {
    const texts = townarray.map(item =>{
      return item.boldtext;
    })
    playSpeech(texts.join('.'))
  }
  const onStop = () => {
    stopSpeech();
  }

  return (
    <div class="directory-bg">
      <section id="guideBanner">
        <NavBar
          onHome={props.onHome}
          onGuides={props.onGuides}
          onTowns={props.onTowns}
          onEvents={props.onEvents}
          onDirectory={props.onDirectory}
          onAbout={props.onAbout}
        />
      </section>
      {<ToggleLang lang={local} play={onPlay} stop={onStop}/>}
      <section className="LRPadding10 directory-list">
        {
          threeGrid()
        }
      </section>
    </div>
  )
}

export { Directory }
