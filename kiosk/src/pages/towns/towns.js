import React, { useState, useEffect } from "react"
import { Qrmodal, NavBar } from "../../components/"
import { TownsData } from '../../data'
import "./towns.scss"
import { TownsReader} from "../../assets/townsaudio"
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faPause } from '@fortawesome/free-solid-svg-icons';

function Towns(props) { //provide for translation to different languages

  const [lang, setLang] = useState('en');
  const [screenReader, setScreenReader] = useState(new Audio());

  useEffect(()=>{
      if (lang !== ''){
          screenReader.pause();
          const { en, fr, de, es } = TownsReader;
          setScreenReader(
              (lang === 'en')?en:
              (lang === 'de')?de:
              (lang === 'fr')?fr:es
          );
      }
  },[lang]);



  const reset = () => {
    screenReader.pause()
    screenReader.src = screenReader.src
  }

  const renderCardsWithTranslation = () => {
    return TownsData.map(item=>{
      const {id, img, name, boldtext, text, link, text_es, boldtext_es, text_fr, boldtext_fr, boldtext_de, text_de} = item;
      if(lang == "en") {
        return (
          <div key = {id} className="card floatL width33">
          <img src={img} className = "card-img-top imgprops" alt={name}/>
          <div className = "card-body">
            <h5 className="card-title">{name}</h5>
            <h6>{boldtext}</h6>
            <p>{text}</p>
            <Qrmodal link = {link} buttonText = "More Information" modalText = "Explore on your device"/>
            </div>
          </div>
        )
      }
      else if(lang == "es") {
        return (
          <div key = {id} className="card floatL width33">
          <img src={img} className = "card-img-top imgprops" alt={name}/>
          <div className = "card-body">
            <h5 className="card-title">{name}</h5>
            <h6>{boldtext_es}</h6>
            <p>{text_es}</p>
            <Qrmodal link = {link} buttonText = "Más información" modalText = "Explore en su teléfono celular"/>
            </div>
          </div>
        )
      }
      else if(lang == "de") {
        return (
          <div key = {id} className="card floatL width33">
          <img src={img} className = "card-img-top imgprops" alt={name}/>
          <div className = "card-body">
            <h5 className="card-title">{name}</h5>
            <h6>{boldtext_de}</h6>
            <p>{text_de}</p>
            <Qrmodal link = {link} buttonText = "Mehr Informationen" modalText = "Entdecken Sie auf Ihrem Handy"/>
            </div>
          </div>
        )
      }
      else if(lang == "fr") {
        return (
          <div key = {id} className="card floatL width33">
          <img src={img} className = "card-img-top imgprops" alt={name}/>
          <div className = "card-body">
            <h5 className="card-title">{name}</h5>
            <h6>{boldtext_fr}</h6>
            <p>{text_fr}</p>
            <Qrmodal link = {link} buttonText = "Plus d'information" modalText = "Explorez sur votre smartphone"/>
            </div>
          </div>
        )
      }
      else {
        console.log("ERROR: Invalid Text Parameter Passed In Towns Function!")
      }
    })
  }


  //this list from TownsData will be converted into a deid of cards where you can click on a card and view information

  const toggleLang = ()=>{
      return (
        <div>
          <div className="dieslayFlex LRPadding10">
              <button
                  type="button"
                  onClick={()=>setLang('en')}
                  className={(lang === 'en')?"btn btn-dark LRPadding10 margin10":"btn btn-light LRPadding10 margin10"}>
                  {(lang === 'en')?'English':(lang === 'de')?'Englisch':(lang === 'fr')?'Anglais':'Ingles'}
              </button>
              <button
                  type="button"
                  onClick={()=>setLang('de')}
                  className={(lang === 'de')?"btn btn-dark LRPadding10 margin10":"btn btn-light LRPadding10 margin10"}>
                  {(lang === 'en')?'German':(lang === 'de')?'Deutsch':(lang === 'fr')?'Allemand':'Alemán'}
              </button>
              <button
                  type="button"
                  onClick={()=>setLang('fr')}
                  className={(lang === 'fr')?"btn btn-dark LRPadding10 margin10":"btn btn-light LRPadding10 margin10"}>
                  {(lang === 'en')?'French':(lang === 'de')?'Französisch':(lang === 'fr')?'Français':'Francés'}
              </button>
              <button
                  type="button"
                  onClick={()=>setLang('es')}
                  className={(lang === 'es')?"btn btn-dark LRPadding10 margin10":"btn btn-light LRPadding10 margin10"}>
                  {(lang === 'en')?'Spanish':(lang === 'de')?'Spanisch':(lang === 'fr')?'Espagnol':'Español'}
              </button>
              <button
                  type="button"
                  onClick={()=>screenReader.play()}
                  className="btn btn-dark LRPadding10 margin10">
                  <Icon icon={faVolumeUp} size="1x"/>
              </button>
              <button
                  type="button"
                  onClick={()=>screenReader.pause()}
                  className="btn btn-dark LRPadding10 margin10">
                  <Icon icon={faPause} size="1x"/>
              </button>

              <button
                type="button"
                onClick={()=>reset()}
                className="btn btn-dark LRPadding10 margin10">
                Stop
                </button>
          </div>
        </div>
      );
  };




  return (
    <div className="towns-bg">
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
      <section className="dieslayBlock">
          {toggleLang()}
        </section>

        <section className = "LRPadding10">

          <div className = "clearB"/>
            {
              renderCardsWithTranslation()
            }
            <div className = "clearB"/>
        </section>
      </div>
  )
}

export { Towns }
