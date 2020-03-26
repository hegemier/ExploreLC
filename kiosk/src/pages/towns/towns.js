import React from "react"
import { Qrmodal, NavBar } from "../../components/"
import { TownsData } from '../../data'
import "./towns.scss"

function Towns(props) {
  //this list will be converted into a grid of cards where you can click on a card and view information
    const threeGrid = () => { //automatically returning component
      return TownsData.map(item=>{ //map the town data onto the cards and define classes for later modification
        const {id, img, name, boldtext, text, link} = item;
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
      })
    }

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
          <div className = "clearB"/>
            {
              threeGrid()
            }
            <div className = "clearB"/>
        </section>
      </div>
  )
}

export { Towns }
