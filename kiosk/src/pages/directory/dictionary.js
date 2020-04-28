import React from "react"
import { Qrmodal, NavBar } from "../../components/"
import "./dictionary.scss"
import Button from 'react-bootstrap/Button';
import { playSpeech, stopSpeech } from '../../utils/index';
import { getList }  from './data';

function Directory(props) {
  //this list will be converted into a grid of cards where you can click on a card and view information
  const t = props.t
  const townarray = getList(props.local);
  const threeGrid = () => { //automatically returning component
    return townarray.map(item => { //map the town data onto the cards and define classes for later modification
      const { id, img, boldtext, link } = item;
      return (
        <div key={id} className="card floatL width33">
          <img src={img} className="card-img-top imgprops" alt=""/>
          <div className="card-body">
            <h6>{boldtext}</h6>
            <Qrmodal link={link} buttonText={t('dictionry.moreInformation')} modalText={t('dictionry.explore')} />
            <Button variant="primary" style={{marginLeft: '10px'}} onClick={() => playSpeech(boldtext)}>{t('common.playAudio')}</Button>
            <Button variant="primary" style={{marginLeft: '10px'}} onClick={() => stopSpeech()}>{t('common.stop')}</Button>
            {/* <Button variant="primary" style={{marginLeft: '10px'}} onClick={() => stopSpeech(boldtext)}>Stop audio</Button> */}
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      <section id="guideBanner">
        <NavBar
          local={props.local}
          setLocal={props.setLocal}
          t={props.t}
          onHome={props.onHome}
          onGuides={props.onGuides}
          onTowns={props.onTowns}
          onEvents={props.onEvents}
          onDirectory={props.onDirectory}
          onAbout={props.onAbout}
        />
      </section>
      <section className="LRPadding10 directory-list">
        {
          threeGrid()
        }
      </section>
    </div>
  )
}

export { Directory }
