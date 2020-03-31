import React from "react";
import { Qrmodal, NavBar } from "../../components/"

//the following are all images used in the about pages
import travelGuideImg from "../pics/2020_Travel_Guide_Ecomm_Web_Ready.jpg"
import impactAwardImg from "../pics/iw-impact-award.jpg"
import louisSullivanImg from "../pics/history-04-louisSullivan.jpg"
import floorPlanImg from "../pics/193101_007-web-louisSullivan.jpg"
import bressoudS from "../pics/boardMembers/bressoudS.jpg"
import bairdC from "../pics/boardMembers/bairdC.jpg"
import baloghA from "../pics/boardMembers/baloghA.jpg"
import birdB from "../pics/boardMembers/birdB.jpg"
import dutcherC from "../pics/boardMembers/dutcherC.jpg"
import flowersD from "../pics/boardMembers/flowersD.jpg"
import fornataroM from "../pics/boardMembers/fornataroM.jpg"
import hampshireJ from "../pics/boardMembers/hampshireJ.jpg"
import harknessC from "../pics/boardMembers/harknessC.jpg"
import harrisM from "../pics/boardMembers/HarrisM.jpg"
import livingstonJ from "../pics/boardMembers/livingstonJ.jpg"
import lorasoJ from "../pics/boardMembers/lorasoJ.jpg"
import mcmanusS from "../pics/boardMembers/mcmanusS.jpg"
import misnerB from "../pics/boardMembers/misnerB.jpg"
import nelsonC from "../pics/boardMembers/nelsonC.jpg"
import petreyD from "../pics/boardMembers/petreyD.jpg"
import proudfitK from "../pics/boardMembers/proudfitK.jpg"
import internalTeam from "../pics/boardMembers/theTeam.jpeg"
import treciakA from "../pics/boardMembers/treciakA.jpg"
import weaverB from "../pics/boardMembers/weaverB.jpg"
import wilhelmK from "../pics/boardMembers/wilhelmK.jpg"
//import exploreLCvid from "../videos/Explore Licking County.mp4"
//import that one video for the louis sullivan page

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
                            ORGANIZATION
                        </li>
                        <li>
                            <button>
                                type="button"
                                onClick={()=>onAbout_LouisSullivan()}
                                class="btn btn-outline-light btn-lg">
                                LOUIS SULLIVAN
                            </button>
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
                    <div id="video" className="container">
                    PLACEHOLDER FOR VIDEO
                    {/*
                        <video src="exploreLCvid" align="center" controls>
                         Your browser does not support the video tag.
                        </video>  
                    */}
                    </div>
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
                <ul className="float-left">
                    <li>
                        <button>
                        type="button"
                        onClick={()=>onAbout()}
                        class="btn btn-outline-light btn-lg">
                        ORGANIZATION
                        </button>
                    </li>
                    <li>
                        LOUIS SULLIVAN
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
                PLACEHOLDER FOR VIDEO
                {/*
                <div id="video">
                    <video src="kiosk/src/Sullivan Restoration Part One" align="center" controls>
                        Your browser does not support the video tag.
                    </video>
                </div>
                */}
                <div id="about" className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <span>ABOUT</span>
                            <br />
                            The Louis Sullivan Building of Newark has graced the Courthouse Square for over a century
                            at One North Third Street.  It was built in 1914 and opened its doors on August 25, 1915 
                            as The Home Building Association Company, commonly known as “The Old Home”.  One of only eight 
                            banks designed by noted American architect Louis Sullivan, it is both a national treasure and
                             a treasured piece of Central Ohio’s heritage.  Through the years, the Sullivan Building was 
                             also home to a butcher shop, a jewelry store and eventually an ice cream parlor. 
                              With each new tenant the interior was altered, but the building’s historic and architectural
                               significance never changed.  In 1973, it was added to the National Register of Historic Places.
                        </div>
                        <div id="imageOfLouisSullivanBuilding" className="col-md-6">
                        <img src={louisSullivanImg}></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div id="imageOfFloorPlan" className="col-md-6">
                                <img src={floorPlanImg}></img>
                            </div>
                        </div>
                        <div className="col-md-6">
                            In 2013, the building was generously gifted to the Licking County Foundation by Newark native,
                             Stephen Jones.  Since early 2014, the Licking County Foundation and a team of community
                              volunteers known as Team Sullivan have been working to develop a plan for the Louis 
                              Sullivan Building of Newark’s restoration and reuse.  The vision has always been to 
                              create a valuable space that is financially self-sustaining and open for the public to enjoy, 
                              celebrate and study.  Today, the team continues to work with that goal in mind by creating a new 
                              home for Explore Licking County.   
                        </div>
                    </div>
                </div>
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
            <div id="header">
                The internal team
                <img src={internalTeam}></img>
                Image taken at Denison Art Space:
                Garrett, Dan Moder, Carol Thress, Alex Trujillo
            </div>
            <div className="container">
                <div id="boardOfDirectors">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={bressoudS}></img>
                            Suzanne Bressoud - Board Chair 20/21
                        </div>
                        <div className="col-md-3">
                            <img src={fornataroM}></img>
                            Mike Fornataro - Immediate Past Chair
                        </div>
                        <div className="col-md-3">
                            <img src={proudfitK}></img>
                            Kendra Proudfit - Board Treasurer
                        </div>
                        <div className="col-md-3">
                            <img src={misnerB}></img>
                            Brittany Misner - Board Secretary
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={birdB}></img>
                            Bryn Bird
                        </div>
                        <div className="col-md-3">
                            <img src={flowersD}></img>
                            Duane Flowers
                        </div>
                        <div className="col-md-3">
                            <img src={harrisM}></img>
                            Michael Harris
                        </div>
                        <div className="col-md-3">
                            <img src={hampshireJ}></img>
                            Jude Hampshire
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={petreyD}></img>
                            Dee Dee Petrey
                        </div>
                        <div className="col-md-3">
                            <img src={nelsonC}></img>
                            Cherie Nelson
                        </div>
                        <div className="col-md-3">
                            <img src={mcmanusS}></img>
                            Stephanie McManus
                        </div>
                        <div className="col-md-3">
                            <img src={treciakA}></img>
                            Amy Treciak
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={weaverB}></img>
                            Bill Weaver
                        </div>
                        <div className="col-md-3">
                            <img src={dutcherC}></img>
                            Chip Dutcher
                        </div>
                        <div className="col-md-3">
                            <img src={bairdC}></img>
                            Catherine Baird
                        </div>
                        <div className="col-md-3">
                            <img src={harknessC}></img>
                            Christoper Harkness
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={livingstonJ}></img>
                            Jay Livingston
                        </div>
                        <div className="col-md-3">
                            <img src={wilhelmK}></img>
                            Kim Wilhelm
                        </div>
                        <div className="col-md-3">
                            <img src={baloghA}></img>
                            Anne Balogh
                        </div>
                        <div className="col-md-3">
                            <img src={lorasoJ}></img>
                            Janice LoRaso
                        </div>
                    </div>
                </div>
            </div>
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
