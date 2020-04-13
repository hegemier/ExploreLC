import React, { useState } from "react"
import { Qrmodal, NavBar } from "../../components/"
import { TownsData } from '../../data'
import "./towns.scss"
import { english, french, spanish, german } from "../../assets/townsaudio"


function Towns(props) { //provide for translation to different languages

  let enAudio = new Audio(english)
  let esAudio = new Audio(spanish) //load audio
  let frAudio = new Audio(french)
  let deAudio = new Audio(german)

  const startEnglish = () => {
    enAudio.play()
  }
  const startDeutsch = () => { //play audio
    deAudio.play()
  }
  const startFrancoise = () => {
    frAudio.play()
  }
  const startEspanol = () => {
    esAudio.play()
  }

  const pauseAll = () => { //pause audio
    enAudio.pause()
    deAudio.pause()
    frAudio.pause()
    esAudio.pause()
  }

  const stopAll = () => {
    enAudio.pause()
    enAudio.src = enAudio.src
    deAudio.pause()
    deAudio.src = deAudio.src //reset source of the audio so it will play from the beginning
    frAudio.pause()
    frAudio.src = frAudio.src
    esAudio.pause()
    esAudio.src = esAudio.src
  }

  /*
  const stopAllAudio = () => {
    var sounds = document.getElementsByTagName('audio')
    for(int i = 0; i < sounds.length; i++) {
      sounds[i].pause()
    }
  }

  */

  const [lang, setLang] = useState("en")

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


  //this list from TownsData will be converted into a grid of cards where you can click on a card and view information


  return (
    <div>
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
        <section className = "LRPadding10">
        <button onClick ={() => setLang("es")}>Espanol</button>
        <button onClick ={() => setLang("de")}>Deutsch</button>
        <button onClick ={() => setLang("fr")}>Francais</button>
        <button onClick ={() => setLang("en")}>English</button>

        <button onClick={startEspanol}>Lector de pantalla español</button>
        <button onClick={startDeutsch}>Deutscher Screenreader</button>
        <button onClick={startFrancoise}>Lecteur d'écran français</button>
        <button onClick={startEnglish}>English Screenreader</button>
        <button onClick={pauseAll}>Pause / Pausa</button>
        <button onClick={stopAll}>Stop Audio / Detener audio / Arrêter l'audio / Audio stoppen</button>

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
