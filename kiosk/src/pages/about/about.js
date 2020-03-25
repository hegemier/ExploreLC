import React from "react";
import { Qrmodal, NavBar } from "../../components/"
import travelGuideImg from "../pics/2020_Travel_Guide_Ecomm_Web_Ready.jpg"
import impactAwardImg from "../pics/iw-impact-award.jpg"
//import exploreLCvid from "../videos/Explore Licking County.mp4"

function About(props)
{
        return(
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

            <div>
                <div id="header">
                    <p align = "center"><strong>About our organization</strong></p>
                    <p align = "center">It's our mission to help you Explore Licking County</p>
                    <br />
                </div>
                <div id="body">
                    <ul className="float-left">
                        <li>
                            <a href="https://explorelc.org/organization">ORGANIZATION</a>
                        </li>
                        <li>
                            <a href="https://explorelc.org/louis-sullivan">LOUIS SULLIVAN</a>
                        </li>
                        <li>
                            <a href="https://explorelc.org/leadership">LEADERSHIP</a>
                        </li>
                        <li>
                            <a href="https://explorelc.org/collaborators">COLLABORATORS</a>
                        </li>
                        <li>
                            <Qrmodal link={"https://explorelc.org/contact"} buttonText={"CONTACT"} modalText={"Contact us using your mobile device"}/>
                        </li>
                        <li>
                            <Qrmodal link={"https://explorelc.org/partners"} buttonText={"PARTNERS"} modalText={"See how you can partner with us using your mobile device"}/>
                        </li>
                    </ul>
                    <div id="about" className="container">
                        <div>
                            <strong>Explore Licking County</strong> is here to help our community and visitors find their way to
                            a one of a kind Licking County experience. We tell the story of people and their experiences and let those
                            stories advocate our love for our county.
                        </div>
                    </div>
                    <br />
                    <div id="travelMagazine" className="container">
                        <div className="row">
                            <div id="travelMagImage" className="col-md-8">
                                <img src={travelGuideImg} height="600px" width="600px"></img>
                            </div>
                            <div className="col-md-4">
                                <span> 2020 TRAVEL MAGAZINE </span>
                                <br />
                                Whether or not you stay on the beaten path or venture off is up to you... It's all worth the trip.
                                Check out our latest travel magazine and explore.
                                <Qrmodal link={"https://explorelc.org/guide/2020-travel-magazine"} buttonText={"GET THE TRAVEL MAGAZINE"} modalText={"Request a copy of the travel magazine using your device"}/>
                                {/*qr modal to push magazine to phone */}
                            </div>
                        </div>
                    </div>
                    <br />
                    <div id="impactAwards" className="container">
                        <div className="row">
                            <div className="col-md-4">  
                                <span> IMPACT AWARDS </span>
                                <br />
                                Every year the Impact Awards are presented by Explore Licking County to outstanding tourism partners.
                                While we value all partners in our network, we wish to acknowledge those who go above and beyond.
                            </div>              
                            <div className="col-md-8">
                                <img src={impactAwardImg}></img>
                                {/*modal link to redirect to impact award page*/}
                            </div>
                        </div>
                    </div>
                    <br />
                    PLACEHOLDER FOR VIDEO
                    {/*
                        <video src="exploreLCvid" align="center" controls>
                         Your browser does not support the video tag.
                        </video>  
                    */}
                </div>
                <div id="footer">
                </div>
            </div>
          </div>
        )
};


function  LouisSullivan()
{
    return(
        <div>
            <div id="header">
                <p align = "center"><strong>The Louis Sullivan Building</strong></p>
                <br />
            </div>
            <div id="body">
                <video src="kiosk/src/Sullivan Restoration Part One" align="center" controls>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div id="footer">
            </div>
        </div>
    )
}


function Leadership()
{
    return(
        <div>
        </div>
    )
}


function Collaborators()
{
    return(
        <div>
        </div>
    )
}


{{/* These pages might just want to straight-up push to phone or redirect. They require keyboard input and provide downloads.
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
*/}}

export { About }
