import React, { useState, useEffect } from "react";
import { Qrmodal, NavBar } from "../../components/"
//All media and exact text displayed is controlled within these data files
import { aboutData, louisSullivanData, leadershipData, collaboratorsData } from "../../data/aboutData.js"
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faPause } from '@fortawesome/free-solid-svg-icons';
//audio for screenreader
import { AboutReader } from "../../assets/aboutAudio"

//style
import "../../sass/about.scss"
import "../../sass/fonts.scss"





function About_sidebar(props)
/* Contained here is the sidebar for the about pages. By clicking on the names of the pages,
 * users can navigate between them.
 */
{


    return(
    <div>
        <ul className="float-left">
            <span className="sidebarHeader"> ABOUT </span>
            <br />
            <li>
                <button
                    type = "button"
                    onClick={()=>props.onAbout()}
                    class="btn btn-outline-dark btn-black">
                    Organization
                </button>
            </li>
            <br />
            <li>
                <button
                    type = "button"
                    onClick={()=>props.onAbout_LouisSullivan()}
                    class="btn btn-outline-dark btn-black">
                    Louis Sullivan
                </button>
            </li>
            <br />
            <li>
                <button
                    type = "button"
                    onClick={()=>props.onAbout_Leadership()}
                    class="btn btn-outline-dark btn-black">
                    Leadership
                </button>
            </li>
            <br />
            <li>
                <button
                    type = "button"
                    onClick={()=>props.onAbout_Collaborators()}
                    class="btn btn-outline-dark btn-black">
                    Collaborators
                </button>
            </li>
            <br />
            <li>
                <Qrmodal link={"https://explorelc.org/contact"} buttonText={"Contact"} modalText={"Contact us using your mobile device"}/>
            </li>
            <br />
            <li>
                <Qrmodal link={"https://explorelc.org/partners"} buttonText={"Partners"} modalText={"See how you can partner with us using your mobile device"}/>
            </li>
        </ul>
    </div>
    )
}

function About(props)
{

  const [lang, setLang] = useState('en');
  const [screenReader, setScreenReader] = useState(new Audio());

  useEffect(()=>{
      if (lang !== ''){
          screenReader.pause();
          const { en, fr, de, es } = AboutReader;
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

    const renderPage = () => {
        return aboutData.map(item=>{
            const {overlayImage, header, subHeaderText, section0_text, section1_title, section1_text, section1_media, section1_url,
                section1_QRbuttonText, section1_QRmodalText, section2_title, section2_text, section2_url, section2_media,
                section2_QRbuttonText, section2_QRmodalText, videoMedia, es_header, es_subHeaderText, es_section0_text,
                es_section1_title, es_section1_QRbuttonText, es_section1_QRmodalText, es_section2_title,
                es_section2_text, es_section2_QRbuttonText, es_section2_QRmodalText,
                de_header, de_subHeaderText, de_section0_text, de_section1_text, de_section1_title, de_section1_QRbuttonText,
                de_section1_QRmodalText, de_section2_title, de_section2_text, de_section2_QRbuttonText,
                de_section2_QRmodalText, fr_header, fr_subHeaderText, fr_section0_text, fr_section1_title, fr_section1_text,
                fr_section1_QRbuttonText, fr_section1_QRmodalText, fr_section2_title, fr_section2_text, fr_section2_QRbuttonText,
                fr_section2_QRmodalText} = item;
            if (lang == "en") //english
            {
            return(
                <div>
                <div className = "organization-bg">
                    <div className= "overlay-div"></div>
                    <NavBar
                        onHome={props.onHome}
                        onGuides={props.onGuides}
                        onTowns={props.onTowns}
                        onEvents={props.onEvents}
                        onDirectory={props.onDirectory}
                        onAbout={props.onAbout}
                    />
                    <section className="dieslayBlock">
                        {toggleLang()}
                      </section>
                    <div id="header">
                        <p align = "center" className="imgHeader">{header}</p>
                        <p align = "center" className="imgHeader-2">{subHeaderText}</p>
                        <br />
                    </div>
                </div>
                <br /><br />
                <div>
                    <div id="body">
                        {About_sidebar(props)}
                        <br /><br />
                        <div id="about" className="container">
                            <div className="introText">
                                {section0_text}
                            </div>
                        </div>
                        <br />
                        <div margin-top="50px">
                            <br /><br /><br /><br /><br />
                            <div id="travelMagazine" className="container">
                                <div className="row">
                                    <div id="travelMagImage" className="col-md-8">
                                        <img src={section1_media} height="600px" width="600px"></img>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="organization-section-header">{section1_title}</p>
                                        <br />
                                        <p className="section-text">{section1_text}</p>
                                        <br />
                                        <Qrmodal link={section1_url} buttonText={section1_QRbuttonText} modalText={section1_QRmodalText}/>
                                    </div>
                                </div>
                            </div>
                            <br /><br /><br />
                            <div id="impactAwards" className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <p className="organization-section-header"> {section2_title} </p>
                                        <br />
                                        <p className="section-text">{section2_text}</p>
                                        <br />
                                        <Qrmodal link={section2_url} buttonText={section2_QRbuttonText} modalText={section2_QRmodalText}/>
                                    </div>
                                    <div className="col-md-8">
                                        <img src={section2_media}></img>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div id="video" className="container">
                            PLACEHOLDER FOR VIDEO
                            {/*
                                <video src={videoMedia} align="center" controls>
                                Error loading video
                                </video>
                            */}
                            </div>
                        </div>
                    </div>
                    <div id="footer">
                    </div>
                </div>
            </div>
                )
            }
            else if (lang == "es") //spanish
            {
                return(
                    <div>
                    <div className = "organization-bg">
                        <div className= "overlay-div"></div>
                        <NavBar
                            onHome={props.onHome}
                            onGuides={props.onGuides}
                            onTowns={props.onTowns}
                            onEvents={props.onEvents}
                            onDirectory={props.onDirectory}
                            onAbout={props.onAbout}
                        />
                        <section className="dieslayBlock">
                            {toggleLang()}
                          </section>
                        <div id="header">
                            <p align = "center" className="imgHeader">{es_header}</p>
                            <p align = "center" className="imgHeader-2">{es_subHeaderText}</p>
                            <br />
                        </div>
                    </div>
                    <br /><br />
                    <div>
                        <div id="body">
                            {About_sidebar(props)}
                            <br /><br />
                            <div id="about" className="container">
                                <div className="introText">
                                    {es_section0_text}
                                </div>
                            </div>
                            <br />
                            <div margin-top="50px">
                                <br /><br /><br /><br /><br />
                                <div id="travelMagazine" className="container">
                                    <div className="row">
                                        <div id="travelMagImage" className="col-md-8">
                                            <img src={section1_media} height="600px" width="600px"></img>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="organization-section-header">{es_section1_title}</p>
                                            <br />
                                            <p className="section-text">{section1_text}</p>
                                            <br />
                                            <Qrmodal link={section1_url} buttonText={es_section1_QRbuttonText} modalText={es_section1_QRmodalText}/>
                                        </div>
                                    </div>
                                </div>
                                <br /><br /><br />
                                <div id="impactAwards" className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <p className="organization-section-header"> {es_section2_title} </p>
                                            <br />
                                            <p className="section-text">{es_section2_text}</p>
                                            <br />
                                            <Qrmodal link={section2_url} buttonText={es_section2_QRbuttonText} modalText={es_section2_QRmodalText}/>
                                        </div>
                                        <div className="col-md-8">
                                            <img src={section2_media}></img>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div id="video" className="container">
                                PLACEHOLDER FOR VIDEO
                                {/*
                                    <video src={videoMedia} align="center" controls>
                                    Error loading video
                                    </video>
                                */}
                                </div>
                            </div>
                        </div>
                        <div id="footer">
                        </div>
                    </div>
                </div>
                )
            }
            else if (lang == "de") //german
            {
            return(
                <div>
                <div className = "organization-bg">
                    <div className= "overlay-div"></div>
                    <NavBar
                        onHome={props.onHome}
                        onGuides={props.onGuides}
                        onTowns={props.onTowns}
                        onEvents={props.onEvents}
                        onDirectory={props.onDirectory}
                        onAbout={props.onAbout}
                    />
                    <section className="dieslayBlock">
                        {toggleLang()}
                      </section>
                    <div id="header">
                        <p align = "center" className="imgHeader">{de_header}</p>
                        <p align = "center" className="imgHeader-2">{de_subHeaderText}</p>
                        <br />
                    </div>
                </div>
                <br /><br />
                <div>
                    <div id="body">
                        {About_sidebar(props)}
                        <br /><br />
                        <div id="about" className="container">
                            <div className="introText">
                                {de_section0_text}
                            </div>
                        </div>
                        <br />
                        <div margin-top="50px">
                            <br /><br /><br /><br /><br />
                            <div id="travelMagazine" className="container">
                                <div className="row">
                                    <div id="travelMagImage" className="col-md-8">
                                        <img src={section1_media} height="600px" width="600px"></img>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="organization-section-header">{de_section1_title}</p>
                                        <br />
                                        <p className="section-text">{de_section1_text}</p>
                                        <br />
                                        <Qrmodal link={section1_url} buttonText={de_section1_QRbuttonText} modalText={de_section1_QRmodalText}/>
                                    </div>
                                </div>
                            </div>
                            <br /><br /><br />
                            <div id="impactAwards" className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <p className="organization-section-header"> {de_section2_title} </p>
                                        <br />
                                        <p className="section-text">{de_section2_text}</p>
                                        <br />
                                        <Qrmodal link={section2_url} buttonText={de_section2_QRbuttonText} modalText={de_section2_QRmodalText}/>
                                    </div>
                                    <div className="col-md-8">
                                        <img src={section2_media}></img>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div id="video" className="container">
                            PLACEHOLDER FOR VIDEO
                            {/*
                                <video src={videoMedia} align="center" controls>
                                Error loading video
                                </video>
                            */}
                            </div>
                        </div>
                    </div>
                    <div id="footer">
                    </div>
                </div>
                </div>
                )
            }
            else if (lang == "fr") //french
            {
                return(
                    <div>
                    <div className = "organization-bg">
                        <div className= "overlay-div"></div>
                        <NavBar
                            onHome={props.onHome}
                            onGuides={props.onGuides}
                            onTowns={props.onTowns}
                            onEvents={props.onEvents}
                            onDirectory={props.onDirectory}
                            onAbout={props.onAbout}
                        />
                        <section className="dieslayBlock">
                            {toggleLang()}
                          </section>
                        <div id="header">
                            <p align = "center" className="imgHeader">{fr_header}</p>
                            <p align = "center" className="imgHeader-2">{fr_subHeaderText}</p>
                            <br />
                        </div>
                    </div>
                    <br /><br />
                    <div>
                        <div id="body">
                            {About_sidebar(props)}
                            <br /><br />
                            <div id="about" className="container">
                                <div className="introText">
                                    {fr_section0_text}
                                </div>
                            </div>
                            <br />
                            <div margin-top="50px">
                                <br /><br /><br /><br /><br />
                                <div id="travelMagazine" className="container">
                                    <div className="row">
                                        <div id="travelMagImage" className="col-md-8">
                                            <img src={section1_media} height="600px" width="600px"></img>
                                        </div>
                                        <div className="col-md-4">
                                            <p className="organization-section-header">{fr_section1_title}</p>
                                            <br />
                                            <p className="section-text">{fr_section1_text}</p>
                                            <br />
                                            <Qrmodal link={section1_url} buttonText={fr_section1_QRbuttonText} modalText={fr_section1_QRmodalText}/>
                                        </div>
                                    </div>
                                </div>
                                <br /><br /><br />
                                <div id="impactAwards" className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <p className="organization-section-header"> {fr_section2_title} </p>
                                            <br />
                                            <p className="section-text">{fr_section2_text}</p>
                                            <br />
                                            <Qrmodal link={section2_url} buttonText={fr_section2_QRbuttonText} modalText={fr_section2_QRmodalText}/>
                                        </div>
                                        <div className="col-md-8">
                                            <img src={section2_media}></img>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div id="video" className="container">
                                PLACEHOLDER FOR VIDEO
                                {/*
                                    <video src={videoMedia} align="center" controls>
                                    Error loading video
                                    </video>
                                */}
                                </div>
                            </div>
                        </div>
                        <div id="footer">
                        </div>
                    </div>
                    </div>
                    )
            }
            else
            {
                console.log("ERROR: Invalid Text Parameter Passed In About Function! (error changing languages)")
            }
        })
    }

    return(
        <div>
            <section className = "language-select">

                <div className = "clearB"/>
                {
                    renderPage()
                }
                <div className = "clearB"/>
            </section>
        </div>
    )
}


function LouisSullivan(props)
{


    const [lang, setLang] = useState('en');
    const [screenReader, setScreenReader] = useState(new Audio());

    useEffect(()=>{
        if (lang !== ''){
            screenReader.pause();
            const { en, fr, de, es } = AboutReader;
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
    const renderPage = () => {
        return louisSullivanData.map(item=>{
            const {overlayImage, header, videoMedia, section1_header, section1_text, section1_media, section2_text, section2_media,
                es_header, es_section1_header, es_section1_text, es_section2_text,
                de_header, de_section1_header, de_section1_text, de_section2_text,
                fr_header, fr_section1_header, fr_section1_text, fr_section2_text} = item;
            if (lang == "en")
            {
            return(
                <div>
                    <div className="louisSullivan-bg">
                        <div className="overlay-div"></div>
                        <NavBar
                            onHome={props.onHome}
                            onGuides={props.onGuides}
                            onTowns={props.onTowns}
                            onEvents={props.onEvents}
                            onDirectory={props.onDirectory}
                            onAbout={props.onAbout}
                        />
                        <section className="dieslayBlock">
                            {toggleLang()}
                          </section>
                        <div className="narrower-header">
                            <p align = "center" className="imgHeader"> {header} </p>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    </div>
                    <br /><br />
                    <div id="body">
                        {About_sidebar(props)}
                        <br /><br />
                        PLACEHOLDER FOR VIDEO
                        {/*
                        <video src={videoMedia} align="center" controls>
                        Error loading video
                        </video>
                        */}
                        <div id="about" className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <span className="louisSullivan-section-header">{section1_header}</span>
                                    <br />
                                    <p className="section-text">{section1_text}</p>
                                </div>
                                <div id="imageOfLouisSullivanBuilding" className="col-md-6">
                                <img align="center" margin-left="25px" src={section1_media} height="400px" width="450px"></img>
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-6">
                                    <div id="imageOfFloorPlan" className="col-md-6">
                                        <img src={section2_media} height="400px" width="450px"></img>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <p className="section-text">{section2_text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="footer">
                    </div>
                </div>
                )
            }
            else if (lang == "es")
            {
            return(
                <div>
                    <div className="louisSullivan-bg">
                        <div className="overlay-div"></div>
                        <NavBar
                            onHome={props.onHome}
                            onGuides={props.onGuides}
                            onTowns={props.onTowns}
                            onEvents={props.onEvents}
                            onDirectory={props.onDirectory}
                            onAbout={props.onAbout}
                        />
                        <section className="dieslayBlock">
                            {toggleLang()}
                          </section>
                        <div className="narrower-header">
                            <p align = "center" className="imgHeader"> {es_header} </p>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    </div>
                    <br /><br />
                    <div id="body">
                        {About_sidebar(props)}
                        <br /><br />
                        PLACEHOLDER FOR VIDEO
                        {/*
                        <video src={videoMedia} align="center" controls>
                        Error loading video
                        </video>
                        */}
                        <div id="about" className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <span className="louisSullivan-section-header">{es_section1_header}</span>
                                    <br />
                                    <p className="section-text">{es_section1_text}</p>
                                </div>
                                <div id="imageOfLouisSullivanBuilding" className="col-md-6">
                                <img align="center" margin-left="25px" src={section1_media} height="400px" width="450px"></img>
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-6">
                                    <div id="imageOfFloorPlan" className="col-md-6">
                                        <img src={section2_media} height="400px" width="450px"></img>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <p className="section-text">{es_section2_text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="footer">
                    </div>
                </div>
                )
            }
            else if (lang == "de")
            {
            return(
                <div>
                    <div className="louisSullivan-bg">
                        <div className="overlay-div"></div>
                        <NavBar
                            onHome={props.onHome}
                            onGuides={props.onGuides}
                            onTowns={props.onTowns}
                            onEvents={props.onEvents}
                            onDirectory={props.onDirectory}
                            onAbout={props.onAbout}
                        />
                        <section className="dieslayBlock">
                            {toggleLang()}
                          </section>
                        <div className="narrower-header">
                            <p align = "center" className="imgHeader"> {de_header} </p>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    </div>
                    <br /><br />
                    <div id="body">
                        {About_sidebar(props)}
                        <br /><br />
                        PLACEHOLDER FOR VIDEO
                        {/*
                        <video src={videoMedia} align="center" controls>
                        Error loading video
                        </video>
                        */}
                        <div id="about" className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <span className="louisSullivan-section-header">{de_section1_header}</span>
                                    <br />
                                    <p className="section-text">{de_section1_text}</p>
                                </div>
                                <div id="imageOfLouisSullivanBuilding" className="col-md-6">
                                <img align="center" margin-left="25px" src={section1_media} height="400px" width="450px"></img>
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-6">
                                    <div id="imageOfFloorPlan" className="col-md-6">
                                        <img src={section2_media} height="400px" width="450px"></img>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <p className="section-text">{de_section2_text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="footer">
                    </div>
                </div>
                )
            }
            else if (lang == "fr")
            {
            return(
                <div>
                    <div className="louisSullivan-bg">
                        <div className="overlay-div"></div>
                        <NavBar
                            onHome={props.onHome}
                            onGuides={props.onGuides}
                            onTowns={props.onTowns}
                            onEvents={props.onEvents}
                            onDirectory={props.onDirectory}
                            onAbout={props.onAbout}
                        />
                        <section className="dieslayBlock">
                            {toggleLang()}
                          </section>
                        <div className="narrower-header">
                            <p align = "center" className="imgHeader"> {fr_header} </p>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    </div>
                    <br /><br />
                    <div id="body">
                        {About_sidebar(props)}
                        <br /><br />
                        PLACEHOLDER FOR VIDEO
                        {/*
                        <video src={videoMedia} align="center" controls>
                        Error loading video
                        </video>
                        */}
                        <div id="about" className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <span className="louisSullivan-section-header">{fr_section1_header}</span>
                                    <br />
                                    <p className="section-text">{fr_section1_text}</p>
                                </div>
                                <div id="imageOfLouisSullivanBuilding" className="col-md-6">
                                <img align="center" margin-left="25px" src={section1_media} height="400px" width="450px"></img>
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-6">
                                    <div id="imageOfFloorPlan" className="col-md-6">
                                        <img src={section2_media} height="400px" width="450px"></img>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <p className="section-text">{fr_section2_text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="footer">
                    </div>
                </div>
                )
            }
            else
            {
                console.log("ERROR: Invalid Text Parameter Passed in LouisSullivan Function! (error changing languages)")
            }
        })
    }

    return(
        <div>
            <section className = "language-select">

                <div className = "clearB"/>
                {
                    renderPage()
                }
                <div className = "clearB"/>
            </section>
        </div>
    )
}


function Leadership(props)
{




    const [lang, setLang] = useState('en');
    const [screenReader, setScreenReader] = useState(new Audio());

    useEffect(()=>{
        if (lang !== ''){
            screenReader.pause();
            const { en, fr, de, es } = AboutReader;
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

    const renderPage = () => {
    return leadershipData.map(item=>{
            const {overlayImage, header, subHeaderText, image1, image1_desc, section1_header, person1_pic, person1_name, person2_pic,
                person2_name, person3_pic, person3_name, person4_pic, person4_name, person5_pic, person5_name, person6_pic,
                person6_name, person7_pic, person7_name, person8_pic, person8_name, person9_pic, person9_name, person10_pic,
                person10_name, person11_pic, person11_name, person12_pic, person12_name, person13_pic, person13_name, person14_pic,
                person14_name, person15_pic, person15_name, person16_pic, person16_name, person17_pic, person17_name, person18_pic,
                person18_name, person19_pic, person19_name, person20_pic, person20_name,
                es_header, es_subHeaderText, es_image1_desc, es_section1_header,
                de_header, de_subHeaderText, de_image1_desc, de_section1_header,
                fr_header, fr_subHeaderText, fr_image1_desc, fr_section1_header} = item;
            if (lang == "en")
            {
            return(
                <div>
                    <div className="default-bg">
                        <div className= "overlay-div"></div>
                        <NavBar
                            onHome={props.onHome}
                            onGuides={props.onGuides}
                            onTowns={props.onTowns}
                            onEvents={props.onEvents}
                            onDirectory={props.onDirectory}
                            onAbout={props.onAbout}
                        />
                        <section className="dieslayBlock">
                            {toggleLang()}
                          </section>
                        <div className="narrower-header">
                            <p align = "center" className="imgHeader">{header}</p>
                            <br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    </div>
                    <br /><br />
                    {About_sidebar(props)}
                    <br /><br />
                    <div className="container">
                        <div id="internal team" className="team-header">
                            {subHeaderText}
                            <br /><br />
                            <img src={image1} height="100%" width="100%"></img>
                            <br />
                            <div className="section-text">
                                {image1_desc}
                            </div>
                            <br />
                        </div>
                        <br />
                        <div className="team-header">
                            {section1_header}
                        </div>
                        <div className="board-of-directors">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person1_pic} height="100%" width="100%"></img>
                                    {person1_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person2_pic} height="100%" width="100%"></img>
                                    {person2_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person3_pic} height="100%" width="100%"></img>
                                    {person3_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person4_pic} height="100%" width="100%"></img>
                                    {person4_name}
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person5_pic} height="100%" width="100%"></img>
                                    {person5_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person6_pic} height="100%" width="100%"></img>
                                    {person6_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person7_pic} height="100%" width="100%"></img>
                                    {person7_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person8_pic} height="100%" width="100%"></img>
                                    {person8_name}
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person9_pic} height="100%" width="100%"></img>
                                    {person9_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person10_pic} height="100%" width="100%"></img>
                                    {person10_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person11_pic} height="100%" width="100%"></img>
                                    {person11_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person12_pic} height="100%" width="100%"></img>
                                    {person12_name}
                                </div>
                            </div><br />
                            <br /><br />
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person13_pic} height="100%" width="100%"></img>
                                    {person13_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person14_pic} height="100%" width="100%"></img>
                                    {person14_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person15_pic} height="100%" width="100%"></img>
                                    {person15_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person16_pic} height="100%" width="100%"></img>
                                    {person16_name}
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person17_pic} height="100%" width="100%"></img>
                                    {person17_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person18_pic} height="100%" width="100%"></img>
                                    {person18_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person19_pic} height="100%" width="100%"></img>
                                    {person19_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person20_pic} height="100%" width="100%"></img>
                                    {person20_name}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
            else if (lang == "es")
            {
            return(
                <div>
                    <div className="default-bg">
                        <div className= "overlay-div"></div>
                        <NavBar
                            onHome={props.onHome}
                            onGuides={props.onGuides}
                            onTowns={props.onTowns}
                            onEvents={props.onEvents}
                            onDirectory={props.onDirectory}
                            onAbout={props.onAbout}
                        />
                        <section className="dieslayBlock">
                            {toggleLang()}
                          </section>
                        <div className="narrower-header">
                            <p align = "center" className="imgHeader">{es_header}</p>
                            <br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    </div>
                    <br /><br />
                    {About_sidebar(props)}
                    <br /><br />
                    <div className="container">
                        <div id="internal team" className="team-header">
                            {es_subHeaderText}
                            <br /><br />
                            <img src={image1} height="100%" width="100%"></img>
                            <br />
                            <div className="section-text">
                                {es_image1_desc}
                            </div>
                            <br />
                        </div>
                        <br />
                        <div className="team-header">
                            {es_section1_header}
                        </div>
                        <div className="board-of-directors">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person1_pic} height="100%" width="100%"></img>
                                    {person1_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person2_pic} height="100%" width="100%"></img>
                                    {person2_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person3_pic} height="100%" width="100%"></img>
                                    {person3_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person4_pic} height="100%" width="100%"></img>
                                    {person4_name}
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person5_pic} height="100%" width="100%"></img>
                                    {person5_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person6_pic} height="100%" width="100%"></img>
                                    {person6_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person7_pic} height="100%" width="100%"></img>
                                    {person7_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person8_pic} height="100%" width="100%"></img>
                                    {person8_name}
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person9_pic} height="100%" width="100%"></img>
                                    {person9_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person10_pic} height="100%" width="100%"></img>
                                    {person10_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person11_pic} height="100%" width="100%"></img>
                                    {person11_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person12_pic} height="100%" width="100%"></img>
                                    {person12_name}
                                </div>
                            </div><br />
                            <br /><br />
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person13_pic} height="100%" width="100%"></img>
                                    {person13_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person14_pic} height="100%" width="100%"></img>
                                    {person14_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person15_pic} height="100%" width="100%"></img>
                                    {person15_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person16_pic} height="100%" width="100%"></img>
                                    {person16_name}
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person17_pic} height="100%" width="100%"></img>
                                    {person17_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person18_pic} height="100%" width="100%"></img>
                                    {person18_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person19_pic} height="100%" width="100%"></img>
                                    {person19_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person20_pic} height="100%" width="100%"></img>
                                    {person20_name}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
            else if (lang == "de")
            {
            return(
                <div>
                    <div className="default-bg">
                        <div className= "overlay-div"></div>
                        <NavBar
                            onHome={props.onHome}
                            onGuides={props.onGuides}
                            onTowns={props.onTowns}
                            onEvents={props.onEvents}
                            onDirectory={props.onDirectory}
                            onAbout={props.onAbout}
                        />
                        <section className="dieslayBlock">
                            {toggleLang()}
                          </section>
                        <div className="narrower-header">
                            <p align = "center" className="imgHeader">{de_header}</p>
                            <br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    </div>
                    <br /><br />
                    {About_sidebar(props)}
                    <br /><br />
                    <div className="container">
                        <div id="internal team" className="team-header">
                            {de_subHeaderText}
                            <br /><br />
                            <img src={image1} height="100%" width="100%"></img>
                            <br />
                            <div className="section-text">
                                {de_image1_desc}
                            </div>
                            <br />
                        </div>
                        <br />
                        <div className="team-header">
                            {de_section1_header}
                        </div>
                        <div className="board-of-directors">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person1_pic} height="100%" width="100%"></img>
                                    {person1_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person2_pic} height="100%" width="100%"></img>
                                    {person2_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person3_pic} height="100%" width="100%"></img>
                                    {person3_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person4_pic} height="100%" width="100%"></img>
                                    {person4_name}
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person5_pic} height="100%" width="100%"></img>
                                    {person5_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person6_pic} height="100%" width="100%"></img>
                                    {person6_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person7_pic} height="100%" width="100%"></img>
                                    {person7_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person8_pic} height="100%" width="100%"></img>
                                    {person8_name}
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person9_pic} height="100%" width="100%"></img>
                                    {person9_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person10_pic} height="100%" width="100%"></img>
                                    {person10_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person11_pic} height="100%" width="100%"></img>
                                    {person11_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person12_pic} height="100%" width="100%"></img>
                                    {person12_name}
                                </div>
                            </div><br />
                            <br /><br />
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person13_pic} height="100%" width="100%"></img>
                                    {person13_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person14_pic} height="100%" width="100%"></img>
                                    {person14_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person15_pic} height="100%" width="100%"></img>
                                    {person15_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person16_pic} height="100%" width="100%"></img>
                                    {person16_name}
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person17_pic} height="100%" width="100%"></img>
                                    {person17_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person18_pic} height="100%" width="100%"></img>
                                    {person18_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person19_pic} height="100%" width="100%"></img>
                                    {person19_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person20_pic} height="100%" width="100%"></img>
                                    {person20_name}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
            else if (lang == "fr")
            {
            return(
                <div>
                    <div className="default-bg">
                        <div className= "overlay-div"></div>
                        <NavBar
                            onHome={props.onHome}
                            onGuides={props.onGuides}
                            onTowns={props.onTowns}
                            onEvents={props.onEvents}
                            onDirectory={props.onDirectory}
                            onAbout={props.onAbout}
                        />
                        <section className="dieslayBlock">
                            {toggleLang()}
                          </section>
                        <div className="narrower-header">
                            <p align = "center" className="imgHeader">{fr_header}</p>
                            <br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    </div>
                    <br /><br />
                    {About_sidebar(props)}
                    <br /><br />
                    <div className="container">
                        <div id="internal team" className="team-header">
                            {fr_subHeaderText}
                            <br /><br />
                            <img src={image1} height="100%" width="100%"></img>
                            <br />
                            <div className="section-text">
                                {fr_image1_desc}
                            </div>
                            <br />
                        </div>
                        <br />
                        <div className="team-header">
                            {fr_section1_header}
                        </div>
                        <div className="board-of-directors">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person1_pic} height="100%" width="100%"></img>
                                    {person1_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person2_pic} height="100%" width="100%"></img>
                                    {person2_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person3_pic} height="100%" width="100%"></img>
                                    {person3_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person4_pic} height="100%" width="100%"></img>
                                    {person4_name}
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person5_pic} height="100%" width="100%"></img>
                                    {person5_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person6_pic} height="100%" width="100%"></img>
                                    {person6_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person7_pic} height="100%" width="100%"></img>
                                    {person7_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person8_pic} height="100%" width="100%"></img>
                                    {person8_name}
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person9_pic} height="100%" width="100%"></img>
                                    {person9_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person10_pic} height="100%" width="100%"></img>
                                    {person10_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person11_pic} height="100%" width="100%"></img>
                                    {person11_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person12_pic} height="100%" width="100%"></img>
                                    {person12_name}
                                </div>
                            </div><br />
                            <br /><br />
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person13_pic} height="100%" width="100%"></img>
                                    {person13_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person14_pic} height="100%" width="100%"></img>
                                    {person14_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person15_pic} height="100%" width="100%"></img>
                                    {person15_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person16_pic} height="100%" width="100%"></img>
                                    {person16_name}
                                </div>
                            </div>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={person17_pic} height="100%" width="100%"></img>
                                    {person17_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person18_pic} height="100%" width="100%"></img>
                                    {person18_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person19_pic} height="100%" width="100%"></img>
                                    {person19_name}
                                </div>
                                <div className="col-md-3">
                                    <img src={person20_pic} height="100%" width="100%"></img>
                                    {person20_name}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
            else
            {
                console.log("ERROR: Invalid Text Parameter Passed in Leadership Function! (error changing languages)")
            }
        })
    }

    return(
        <div>
            <section className = "language-select">


                <div className = "clearB"/>
                {
                    renderPage()
                }
                <div className = "clearB"/>
            </section>
        </div>
    )
}


function Collaborators(props)
{



    const [lang, setLang] = useState('en');
    const [screenReader, setScreenReader] = useState(new Audio());

    useEffect(()=>{
        if (lang !== ''){
            screenReader.pause();
            const { en, fr, de, es } = AboutReader;
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
    const renderPage = () => {
        return collaboratorsData.map(item=>{
            const {overlayImage, header, collabHeader1, collabSubHeader1, h1_collab1, h1_collab2, h1_collab3, h1_collab4, h1_collab5,
                h1_pic1, h1_pic2, h1_pic3, h1_pic4, h1_pic5, collabHeader2, collabSubHeader2, h2_collab1, h2_collab2,
                h2_collab3, h2_collab4, h2_collab5, h2_collab6, h2_collab7, h2_collab8, h2_collab9, h2_collab10, h2_pic1,
                h2_pic2, h2_pic3, h2_pic4, h2_pic5, h2_pic6, h2_pic7, h2_pic8, h2_pic9, h2_pic10, collabHeader3, collabSubHeader3,
                h3_collab1, h3_collab2, h3_collab3, h3_collab4, h3_collab5, h3_collab6, h3_collab7, h3_collab8, h3_collab9, h3_collab10,
                h3_collab11, h3_collab12, h3_collab13, h3_collab14, h3_collab15, h3_pic1, h3_pic2, h3_pic3, h3_pic4, h3_pic5, h3_pic6,
                h3_pic7, h3_pic8, h3_pic9, h3_pic10, h3_pic11, h3_pic12, h3_pic13, h3_pic14, h3_pic15,
                h1_url1, h1_url2, h1_url3, h1_url4, h1_url5, h2_url1, h2_url2, h2_url3, h2_url4, h2_url5, h2_url6, h2_url7,
                h2_url8, h2_url9, h2_url10, h3_url1, h3_url2, h3_url3, h3_url4, h3_url5, h3_url6, h3_url7, h3_url8, h3_url9,
                h3_url10, h3_url11, h3_url12, h3_url13, h3_url14, h3_url15,
                es_header, es_collabHeader1, es_collabSubHeader1, es_h1_collab1, es_h1_collab2, es_h1_collab3,
                es_h1_collab4, es_h1_collab5, es_collabHeader2, es_collabSubHeader2, es_h2_collab1, es_h2_collab2,
                es_h2_collab3, es_h2_collab4, es_h2_collab5, es_h2_collab6, es_h2_collab7, es_h2_collab8, es_h2_collab9,
                es_h2_collab10, es_collabHeader3, es_collabSubHeader3, es_h3_collab1, es_h3_collab2, es_h3_collab3, es_h3_collab4,
                es_h3_collab5, es_h3_collab6, es_h3_collab7, es_h3_collab8, es_h3_collab9, es_h3_collab10, es_h3_collab11,
                es_h3_collab12, es_h3_collab13, es_h3_collab14, es_h3_collab15,
                de_header, de_collabHeader1, de_collabSubHeader1, de_h1_collab1, de_h1_collab2, de_h1_collab3, de_h1_collab4,
                de_h1_collab5, de_collabHeader2, de_collabSubHeader2, de_h2_collab1, de_h2_collab2, de_h2_collab3, de_h2_collab4,
                de_h2_collab5, de_h2_collab6, de_h2_collab7, de_h2_collab8, de_h2_collab9, de_h2_collab10, de_collabHeader3,
                de_collabSubHeader3, de_h3_collab1, de_h3_collab2, de_h3_collab3, de_h3_collab4, de_h3_collab5, de_h3_collab6,
                de_h3_collab7, de_h3_collab8, de_h3_collab9, de_h3_collab10, de_h3_collab11, de_h3_collab12, de_h3_collab13,
                de_h3_collab14, de_h3_collab15,
                fr_header, fr_collabHeader1, fr_collabSubHeader1, fr_h1_collab1, fr_h1_collab2, fr_h1_collab3, fr_h1_collab4,
                fr_h1_collab5, fr_collabHeader2, fr_collabSubHeader2, fr_h2_collab1, fr_h2_collab2, fr_h2_collab3, fr_h2_collab4,
                fr_h2_collab5, fr_h2_collab6, fr_h2_collab7, fr_h2_collab8, fr_h2_collab9, fr_h2_collab10, fr_collabHeader3,
                fr_collabSubHeader3, fr_h3_collab1, fr_h3_collab2, fr_h3_collab3, fr_h3_collab4, fr_h3_collab5, fr_h3_collab6,
                fr_h3_collab7, fr_h3_collab8, fr_h3_collab9, fr_h3_collab10, fr_h3_collab11, fr_h3_collab12, fr_h3_collab13,
                fr_h3_collab14, fr_h3_collab15,
                } = item;
            if (lang == "en")
            {
            return(
                <div>
                    <div className="default-bg">
                    <div className= "overlay-div"></div>
                        <NavBar
                            onHome={props.onHome}
                            onGuides={props.onGuides}
                            onTowns={props.onTowns}
                            onEvents={props.onEvents}
                            onDirectory={props.onDirectory}
                            onAbout={props.onAbout}
                        />
                        <section className="dieslayBlock">
                            {toggleLang()}
                          </section>
                        <div className="narrower-header">
                            <p align = "center" className="imgHeader">{header}</p>
                            <br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    </div>
                    <br /><br />
                    {About_sidebar(props)}
                    <br /><br />
                    <div className="container">
                        <div id="state collaborators" className="nudge-right">
                            <span className="team-header">{collabHeader1}</span>
                            <br /><br />
                            <span className="section-text">{collabSubHeader1}</span>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h1_pic1} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url1} buttonText={h1_collab1}
                                    modalText={"Learn more about "  + h1_collab1 + " on your mobile device"}/>
                                </div>
                                <div className="col-md-2">
                                    <img src={h1_pic2} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url2} buttonText={h1_collab2}
                                    modalText={"Learn more about " + h1_collab2 + " on your mobile device"}/>
                                </div>
                                <div className="col-md-2">
                                    <img src={h1_pic3} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url3} buttonText={h1_collab3}
                                    modalText={"Learn more about the " + h1_collab3 + " on your mobile device"}/>
                                </div>
                                <div className="col-md-2">
                                    <img src={h1_pic4} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url4} buttonText={h1_collab4}
                                    modalText={"Learn more about the " + h1_collab4 + " on your mobile device"}/>
                                </div>
                                <div className="col-md-2">
                                    <img src={h1_pic5} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url5} buttonText={h1_collab5}
                                    modalText={"Learn more about " + h1_collab5 + " on your mobile device"}/>
                                </div>
                            </div>
                            <br />
                            <hr></hr>
                        </div>
                        <br /><br /><br />
                        <div id="sales and marketing" className="nudge-right">
                            <span className="team-header">{collabHeader2}</span>
                            <br /><br />
                            <span className="section-text">{collabSubHeader2}</span>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h2_pic1} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url1} buttonText={h2_collab1}
                                    modalText={"Learn more about " + h2_collab1 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic2} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url2} buttonText={h2_collab2}
                                    modalText={"Learn more about " + h2_collab2 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic3} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url3} buttonText={h2_collab3}
                                    modalText={"Learn more about " + h2_collab3 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic4} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url4} buttonText={h2_collab4}
                                    modalText={"Learn more about " + h2_collab4 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic5} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url5} buttonText={h2_collab5}
                                    modalText={"Learn more about " + h2_collab5 + " on your mobile device"}></Qrmodal>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h2_pic6} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url6} buttonText={h2_collab6}
                                    modalText={"Learn more about " + h2_collab6 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic7} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url7} buttonText={h2_collab7}
                                    modalText={"Learn more about " + h2_collab7 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic8} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url8} buttonText={h2_collab8}
                                    modalText={"Learn more about " + h2_collab8 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic9} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url9} buttonText={h2_collab9}
                                    modalText={"Learn more about " + h2_collab9 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    {/**Empty column*/}
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                        <br /><br /><br />
                        <div id="local collaborators" className="nudge-right">
                            <span className="team-header">{collabHeader3}</span>
                            <br /><br />
                            <span className="section-text">{collabSubHeader3}</span>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h3_pic1} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url1} buttonText={h3_collab1}
                                    modalText={"Learn more about " + h3_collab1 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic2} height="180px" width="160px"></img>
                                    {h3_collab2}
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic3} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url3} buttonText={h3_collab3}
                                    modalText={"Learn more about " + h3_collab3 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic4} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url4} buttonText={h3_collab4}
                                    modalText={"Learn more about " + h3_collab4 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic5} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url5} buttonText={h3_collab5}
                                    modalText={"Learn more about " + h3_collab5 + " on your mobile device"}></Qrmodal>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h3_pic6} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url6} buttonText={h3_collab6}
                                    modalText={"Learn more about " + h3_collab6 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic7} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url7} buttonText={h3_collab7}
                                    modalText={"Learn more about " + h3_collab7 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic8} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url8} buttonText={h3_collab8}
                                    modalText={"Learn more about " + h3_collab8 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic9} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url9} buttonText={h3_collab9}
                                    modalText={"Learn more about " + h3_collab9 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic10} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url10} buttonText={h3_collab10}
                                    modalText={"Learn more about " + h3_collab10 + " on your mobile device"}></Qrmodal>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h3_pic11} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url11} buttonText={h3_collab11}
                                    modalText={"Learn more about " + h3_collab11 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic12} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url12} buttonText={h3_collab12}
                                    modalText={"Learn more about " + h3_collab12 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic13} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url13} buttonText={h3_collab13}
                                    modalText={"Learn more about " + h3_collab13 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic14} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url14} buttonText={h3_collab14}
                                    modalText={"Learn more about " + h3_collab14 + " on your mobile device"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    {/*Empty Column*/}
                                </div>
                            </div>
                            <br />
                            {/*If adding more rows is desired, use the following template:
                            <div className="row"
                                <div className="col-md-2">
                                    <img src={imageName} height="200px" width="180px"></img>
                                    name of organization here
                                </div>
                                ^^^ this is a column, there can be up to 5 of these divs in one row div
                            */}
                            <hr></hr>
                        </div>
                        <br /><br /><br />
                    </div>
                </div>
                )
            }
            else if (lang == "es")
            {
            return(
                <div>
                    <div className="default-bg">
                    <div className= "overlay-div"></div>
                        <NavBar
                            onHome={props.onHome}
                            onGuides={props.onGuides}
                            onTowns={props.onTowns}
                            onEvents={props.onEvents}
                            onDirectory={props.onDirectory}
                            onAbout={props.onAbout}
                        />
                        <section className="dieslayBlock">
                            {toggleLang()}
                          </section>
                        <div className="narrower-header">
                            <p align = "center" className="imgHeader">{es_header}</p>
                            <br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    </div>
                    <br /><br />
                    {About_sidebar(props)}
                    <br /><br />
                    <div className="container">
                        <div id="state collaborators" className="nudge-right">
                            <span className="team-header">{es_collabHeader1}</span>
                            <br /><br />
                            <span className="section-text">{es_collabSubHeader1}</span>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h1_pic1} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url1} buttonText={es_h1_collab1}
                                    modalText={"Aprenda más sobre "  + es_h1_collab1 + " en su dispositivo móvil"}/>
                                </div>
                                <div className="col-md-2">
                                    <img src={h1_pic2} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url2} buttonText={es_h1_collab2}
                                    modalText={"Aprenda más sobre " + es_h1_collab2 + " en su dispositivo móvil"}/>
                                </div>
                                <div className="col-md-2">
                                    <img src={h1_pic3} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url3} buttonText={es_h1_collab3}
                                    modalText={"Aprenda más sobre " + es_h1_collab3 + " en su dispositivo móvil"}/>
                                </div>
                                <div className="col-md-2">
                                    <img src={h1_pic4} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url4} buttonText={es_h1_collab4}
                                    modalText={"Aprenda más sobre " + es_h1_collab4 + " en su dispositivo móvil"}/>
                                </div>
                                <div className="col-md-2">
                                    <img src={h1_pic5} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url5} buttonText={es_h1_collab5}
                                    modalText={"Aprenda más sobre " + es_h1_collab5 + " en su dispositivo móvil"}/>
                                </div>
                            </div>
                            <br />
                            <hr></hr>
                        </div>
                        <br /><br /><br />
                        <div id="sales and marketing" className="nudge-right">
                            <span className="team-header">{es_collabHeader2}</span>
                            <br /><br />
                            <span className="section-text">{es_collabSubHeader2}</span>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h2_pic1} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url1} buttonText={es_h2_collab1}
                                    modalText={"Aprenda más sobre " + es_h2_collab1 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic2} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url2} buttonText={es_h2_collab2}
                                    modalText={"Aprenda más sobre " + es_h2_collab2 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic3} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url3} buttonText={es_h2_collab3}
                                    modalText={"Aprenda más sobre " + es_h2_collab3 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic4} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url4} buttonText={es_h2_collab4}
                                    modalText={"Aprenda más sobre " + es_h2_collab4 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic5} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url5} buttonText={es_h2_collab5}
                                    modalText={"Aprenda más sobre " + es_h2_collab5 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h2_pic6} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url6} buttonText={es_h2_collab6}
                                    modalText={"Aprenda más sobre " + es_h2_collab6 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic7} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url7} buttonText={es_h2_collab7}
                                    modalText={"Aprenda más sobre " + es_h2_collab7 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic8} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url8} buttonText={es_h2_collab8}
                                    modalText={"Aprenda más sobre " + es_h2_collab8 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic9} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url9} buttonText={es_h2_collab9}
                                    modalText={"Aprenda más sobre " + es_h2_collab9 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    {/**Empty column*/}
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                        <br /><br /><br />
                        <div id="local collaborators" className="nudge-right">
                            <span className="team-header">{es_collabHeader3}</span>
                            <br /><br />
                            <span className="section-text">{es_collabSubHeader3}</span>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h3_pic1} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url1} buttonText={es_h3_collab1}
                                    modalText={"Aprenda más sobre " + es_h3_collab1 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic2} height="180px" width="160px"></img>
                                    {es_h3_collab2}
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic3} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url3} buttonText={es_h3_collab3}
                                    modalText={"Aprenda más sobre " + es_h3_collab3 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic4} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url4} buttonText={es_h3_collab4}
                                    modalText={"Aprenda más sobre " + es_h3_collab4 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic5} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url5} buttonText={es_h3_collab5}
                                    modalText={"Aprenda más sobre " + es_h3_collab5 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h3_pic6} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url6} buttonText={es_h3_collab6}
                                    modalText={"Aprenda más sobre " + es_h3_collab6 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic7} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url7} buttonText={es_h3_collab7}
                                    modalText={"Aprenda más sobre " + es_h3_collab7 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic8} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url8} buttonText={es_h3_collab8}
                                    modalText={"Aprenda más sobre " + es_h3_collab8 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic9} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url9} buttonText={es_h3_collab9}
                                    modalText={"Aprenda más sobre " + es_h3_collab9 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic10} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url10} buttonText={es_h3_collab10}
                                    modalText={"Aprenda más sobre " + es_h3_collab10 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h3_pic11} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url11} buttonText={es_h3_collab11}
                                    modalText={"Aprenda más sobre " + es_h3_collab11 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic12} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url12} buttonText={es_h3_collab12}
                                    modalText={"Aprenda más sobre " + es_h3_collab12 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic13} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url13} buttonText={es_h3_collab13}
                                    modalText={"Aprenda más sobre " + es_h3_collab13 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic14} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url14} buttonText={es_h3_collab14}
                                    modalText={"Aprenda más sobre " + es_h3_collab14 + " en su dispositivo móvil"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    {/*Empty Column*/}
                                </div>
                            </div>
                            <br />
                            {/*If adding more rows is desired, use the following template:
                            <div className="row"
                                <div className="col-md-2">
                                    <img src={imageName} height="200px" width="180px"></img>
                                    name of organization here
                                </div>
                                ^^^ this is a column, there can be up to 5 of these divs in one row div
                            */}
                            <hr></hr>
                        </div>
                        <br /><br /><br />
                    </div>
                </div>
                )
            }
            else if (lang == "de")
            {
            return(
                <div>
                    <div className="default-bg">
                    <div className= "overlay-div"></div>
                        <NavBar
                            onHome={props.onHome}
                            onGuides={props.onGuides}
                            onTowns={props.onTowns}
                            onEvents={props.onEvents}
                            onDirectory={props.onDirectory}
                            onAbout={props.onAbout}
                        />
                        <section className="dieslayBlock">
                            {toggleLang()}
                          </section>
                        <div className="narrower-header">
                            <p align = "center" className="imgHeader">{de_header}</p>
                            <br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    </div>
                    <br /><br />
                    {About_sidebar(props)}
                    <br /><br />
                    <div className="container">
                        <div id="state collaborators" className="nudge-right">
                            <span className="team-header">{de_collabHeader1}</span>
                            <br /><br />
                            <span className="section-text">{de_collabSubHeader1}</span>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h1_pic1} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url1} buttonText={de_h1_collab1}
                                    modalText={"Erfahren Sie mehr über "  + de_h1_collab1 + " auf Ihrem mobilen Gerät."}/>
                                </div>
                                <div className="col-md-2">
                                    <img src={h1_pic2} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url2} buttonText={de_h1_collab2}
                                    modalText={"Erfahren Sie mehr über " + de_h1_collab2 + " auf Ihrem mobilen Gerät."}/>
                                </div>
                                <div className="col-md-2">
                                    <img src={h1_pic3} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url3} buttonText={de_h1_collab3}
                                    modalText={"Erfahren Sie mehr über " + de_h1_collab3 + " auf Ihrem mobilen Gerät."}/>
                                </div>
                                <div className="col-md-2">
                                    <img src={h1_pic4} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url4} buttonText={de_h1_collab4}
                                    modalText={"Erfahren Sie mehr über " + de_h1_collab4 + " auf Ihrem mobilen Gerät."}/>
                                </div>
                                <div className="col-md-2">
                                    <img src={h1_pic5} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url5} buttonText={de_h1_collab5}
                                    modalText={"Erfahren Sie mehr über " + de_h1_collab5 + " auf Ihrem mobilen Gerät."}/>
                                </div>
                            </div>
                            <br />
                            <hr></hr>
                        </div>
                        <br /><br /><br />
                        <div id="sales and marketing" className="nudge-right">
                            <span className="team-header">{de_collabHeader2}</span>
                            <br /><br />
                            <span className="section-text">{de_collabSubHeader2}</span>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h2_pic1} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url1} buttonText={de_h2_collab1}
                                    modalText={"Erfahren Sie mehr über " + de_h2_collab1 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic2} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url2} buttonText={de_h2_collab2}
                                    modalText={"Erfahren Sie mehr über " + de_h2_collab2 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic3} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url3} buttonText={de_h2_collab3}
                                    modalText={"Erfahren Sie mehr über " + de_h2_collab3 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic4} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url4} buttonText={de_h2_collab4}
                                    modalText={"Erfahren Sie mehr über " + de_h2_collab4 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic5} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url5} buttonText={de_h2_collab5}
                                    modalText={"Erfahren Sie mehr über " + de_h2_collab5 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h2_pic6} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url6} buttonText={de_h2_collab6}
                                    modalText={"Erfahren Sie mehr über " + de_h2_collab6 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic7} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url7} buttonText={de_h2_collab7}
                                    modalText={"Erfahren Sie mehr über " + de_h2_collab7 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic8} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url8} buttonText={de_h2_collab8}
                                    modalText={"Erfahren Sie mehr über " + de_h2_collab8 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic9} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url9} buttonText={de_h2_collab9}
                                    modalText={"Erfahren Sie mehr über " + de_h2_collab9 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    {/**Empty column*/}
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                        <br /><br /><br />
                        <div id="local collaborators" className="nudge-right">
                            <span className="team-header">{de_collabHeader3}</span>
                            <br /><br />
                            <span className="section-text">{de_collabSubHeader3}</span>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h3_pic1} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url1} buttonText={de_h3_collab1}
                                    modalText={"Erfahren Sie mehr über " + de_h3_collab1 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic2} height="180px" width="160px"></img>
                                    {de_h3_collab2}
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic3} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url3} buttonText={de_h3_collab3}
                                    modalText={"Erfahren Sie mehr über " + de_h3_collab3 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic4} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url4} buttonText={de_h3_collab4}
                                    modalText={"Erfahren Sie mehr über " + de_h3_collab4 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic5} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url5} buttonText={de_h3_collab5}
                                    modalText={"Erfahren Sie mehr über " + de_h3_collab5 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h3_pic6} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url6} buttonText={de_h3_collab6}
                                    modalText={"Erfahren Sie mehr über " + de_h3_collab6 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic7} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url7} buttonText={de_h3_collab7}
                                    modalText={"Erfahren Sie mehr über " + de_h3_collab7 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic8} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url8} buttonText={de_h3_collab8}
                                    modalText={"Erfahren Sie mehr über " + de_h3_collab8 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic9} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url9} buttonText={de_h3_collab9}
                                    modalText={"Erfahren Sie mehr über " + de_h3_collab9 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic10} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url10} buttonText={de_h3_collab10}
                                    modalText={"Erfahren Sie mehr über " + de_h3_collab10 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h3_pic11} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url11} buttonText={de_h3_collab11}
                                    modalText={"Erfahren Sie mehr über " + de_h3_collab11 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic12} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url12} buttonText={de_h3_collab12}
                                    modalText={"Erfahren Sie mehr über " + de_h3_collab12 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic13} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url13} buttonText={de_h3_collab13}
                                    modalText={"Erfahren Sie mehr über " + de_h3_collab13 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic14} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url14} buttonText={de_h3_collab14}
                                    modalText={"Erfahren Sie mehr über " + de_h3_collab14 + " auf Ihrem mobilen Gerät."}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    {/*Empty Column*/}
                                </div>
                            </div>
                            <br />
                            {/*If adding more rows is desired, use the following template:
                            <div className="row"
                                <div className="col-md-2">
                                    <img src={imageName} height="200px" width="180px"></img>
                                    name of organization here
                                </div>
                                ^^^ this is a column, there can be up to 5 of these divs in one row div
                            */}
                            <hr></hr>
                        </div>
                        <br /><br /><br />
                    </div>
                </div>
                )
            }
            else if (lang == "fr")
            {
            return(
                <div>
                    <div className="default-bg">
                    <div className= "overlay-div"></div>
                        <NavBar
                            onHome={props.onHome}
                            onGuides={props.onGuides}
                            onTowns={props.onTowns}
                            onEvents={props.onEvents}
                            onDirectory={props.onDirectory}
                            onAbout={props.onAbout}
                        />
                        <section className="dieslayBlock">
                            {toggleLang()}
                          </section>
                        <div className="narrower-header">
                            <p align = "center" className="imgHeader">{fr_header}</p>
                            <br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                    </div>
                    <br /><br />
                    {About_sidebar(props)}
                    <br /><br />
                    <div className="container">
                        <div id="state collaborators" className="nudge-right">
                            <span className="team-header">{fr_collabHeader1}</span>
                            <br /><br />
                            <span className="section-text">{fr_collabSubHeader1}</span>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h1_pic1} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url1} buttonText={fr_h1_collab1}
                                    modalText={"En savoir plus sur "  + fr_h1_collab1 + " sur votre appareil mobile"}/>
                                </div>
                                <div className="col-md-2">
                                    <img src={h1_pic2} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url2} buttonText={fr_h1_collab2}
                                    modalText={"En savoir plus sur " + fr_h1_collab2 + " sur votre appareil mobile"}/>
                                </div>
                                <div className="col-md-2">
                                    <img src={h1_pic3} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url3} buttonText={fr_h1_collab3}
                                    modalText={"En savoir plus sur the " + fr_h1_collab3 + " sur votre appareil mobile"}/>
                                </div>
                                <div className="col-md-2">
                                    <img src={h1_pic4} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url4} buttonText={fr_h1_collab4}
                                    modalText={"En savoir plus sur the " + fr_h1_collab4 + " sur votre appareil mobile"}/>
                                </div>
                                <div className="col-md-2">
                                    <img src={h1_pic5} height="180px" width="160px"></img>
                                    <Qrmodal link={h1_url5} buttonText={fr_h1_collab5}
                                    modalText={"En savoir plus sur " + fr_h1_collab5 + " sur votre appareil mobile"}/>
                                </div>
                            </div>
                            <br />
                            <hr></hr>
                        </div>
                        <br /><br /><br />
                        <div id="sales and marketing" className="nudge-right">
                            <span className="team-header">{fr_collabHeader2}</span>
                            <br /><br />
                            <span className="section-text">{fr_collabSubHeader2}</span>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h2_pic1} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url1} buttonText={fr_h2_collab1}
                                    modalText={"En savoir plus sur " + fr_h2_collab1 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic2} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url2} buttonText={fr_h2_collab2}
                                    modalText={"En savoir plus sur " + fr_h2_collab2 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic3} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url3} buttonText={fr_h2_collab3}
                                    modalText={"En savoir plus sur " + fr_h2_collab3 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic4} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url4} buttonText={fr_h2_collab4}
                                    modalText={"En savoir plus sur " + fr_h2_collab4 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic5} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url5} buttonText={fr_h2_collab5}
                                    modalText={"En savoir plus sur " + fr_h2_collab5 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h2_pic6} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url6} buttonText={fr_h2_collab6}
                                    modalText={"En savoir plus sur " + fr_h2_collab6 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic7} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url7} buttonText={fr_h2_collab7}
                                    modalText={"En savoir plus sur " + fr_h2_collab7 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic8} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url8} buttonText={fr_h2_collab8}
                                    modalText={"En savoir plus sur " + fr_h2_collab8 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h2_pic9} height="180px" width="160px"></img>
                                    <Qrmodal link={h2_url9} buttonText={fr_h2_collab9}
                                    modalText={"En savoir plus sur " + fr_h2_collab9 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    {/**Empty column*/}
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                        <br /><br /><br />
                        <div id="local collaborators" className="nudge-right">
                            <span className="team-header">{fr_collabHeader3}</span>
                            <br /><br />
                            <span className="section-text">{fr_collabSubHeader3}</span>
                            <br /><br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h3_pic1} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url1} buttonText={fr_h3_collab1}
                                    modalText={"En savoir plus sur " + fr_h3_collab1 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic2} height="180px" width="160px"></img>
                                    {fr_h3_collab2}
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic3} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url3} buttonText={fr_h3_collab3}
                                    modalText={"En savoir plus sur " + fr_h3_collab3 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic4} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url4} buttonText={fr_h3_collab4}
                                    modalText={"En savoir plus sur " + fr_h3_collab4 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic5} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url5} buttonText={fr_h3_collab5}
                                    modalText={"En savoir plus sur " + fr_h3_collab5 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h3_pic6} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url6} buttonText={fr_h3_collab6}
                                    modalText={"En savoir plus sur " + fr_h3_collab6 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic7} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url7} buttonText={fr_h3_collab7}
                                    modalText={"En savoir plus sur " + fr_h3_collab7 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic8} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url8} buttonText={fr_h3_collab8}
                                    modalText={"En savoir plus sur " + fr_h3_collab8 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic9} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url9} buttonText={fr_h3_collab9}
                                    modalText={"En savoir plus sur " + fr_h3_collab9 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic10} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url10} buttonText={fr_h3_collab10}
                                    modalText={"En savoir plus sur " + fr_h3_collab10 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={h3_pic11} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url11} buttonText={fr_h3_collab11}
                                    modalText={"En savoir plus sur " + fr_h3_collab11 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic12} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url12} buttonText={fr_h3_collab12}
                                    modalText={"En savoir plus sur " + fr_h3_collab12 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic13} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url13} buttonText={fr_h3_collab13}
                                    modalText={"En savoir plus sur " + fr_h3_collab13 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    <img src={h3_pic14} height="180px" width="160px"></img>
                                    <Qrmodal link={h3_url14} buttonText={fr_h3_collab14}
                                    modalText={"En savoir plus sur " + fr_h3_collab14 + " sur votre appareil mobile"}></Qrmodal>
                                </div>
                                <div className="col-md-2">
                                    {/*Empty Column*/}
                                </div>
                            </div>
                            <br />
                            {/*If adding more rows is desired, use the following template:
                            <div className="row"
                                <div className="col-md-2">
                                    <img src={imageName} height="200px" width="180px"></img>
                                    name of organization here
                                </div>
                                ^^^ this is a column, there can be up to 5 of these divs in one row div
                            */}
                            <hr></hr>
                        </div>
                        <br /><br /><br />
                    </div>
                </div>
                )
            }
            else
            {
                console.log("ERROR: Invalid Text Parameter Passed in Leadership Function! (error changing languages)")
            }
        })
    }

    return(
        <div>
            <section className = "language-select">

                <div className = "clearB"/>
                {
                    renderPage()
                }
                <div className = "clearB"/>
            </section>
        </div>
    )
}

/*
{ These pages might just want to straight-up push to phone or redirect. They require keyboard input and provide downloads.
function Contact()
{
    return(
        <div>
        </div>
    )
}
function Partners()
{
    return(
        <div>
        </div>
    )
}
}*/

export { About, LouisSullivan, Leadership, Collaborators };
