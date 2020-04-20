import React from "react";
import { Qrmodal, NavBar } from "../../components/"

//style
import "../../sass/about.scss"
import "../../sass/fonts.scss"

//the following are all images used in the about pages//

//Organization and Louis Sullivan
import travelGuideImg from "./pics/2020_Travel_Guide_Ecomm_Web_Ready.jpg"
import impactAwardImg from "./pics/iw-impact-award.jpg"
import louisSullivanImg from "./pics/history-04-louisSullivan.jpg"
import floorPlanImg from "./pics/193101_007-web-louisSullivan.jpg"

//Leadership
import bressoudS from "./pics/boardMembers/bressoudS.jpg"
import bairdC from "./pics/boardMembers/catherineBaird.jpg"
import baloghA from "./pics/boardMembers/anneBalogh.jpg"
import birdB from "./pics/boardMembers/birdB.jpg"
import dutcherC from "./pics/boardMembers/dutcherC.jpg"
import flowersD from "./pics/boardMembers/flowersD.jpg"
import fornataroM from "./pics/boardMembers/fornataroM.jpg"
import hampshireJ from "./pics/boardMembers/hampshireJ.jpg"
import harknessC from "./pics/boardMembers/harknessC.jpg"
import harrisM from "./pics/boardMembers/HarrisM.jpg"
import livingstonJ from "./pics/boardMembers/livingstonJ.jpg"
import lorasoJ from "./pics/boardMembers/lorasoJ.jpg"
import mcmanusS from "./pics/boardMembers/mcmanusS.jpg"
import misnerB from "./pics/boardMembers/misnerB.jpg"
import nelsonC from "./pics/boardMembers/nelsonC.jpg"
import petreyD from "./pics/boardMembers/petreyD.jpg"
import proudfitK from "./pics/boardMembers/proudfitK.jpg"
import internalTeam from "./pics/boardMembers/theTeam.jpeg"
import treciakA from "./pics/boardMembers/treciakA.jpg"
import weaverB from "./pics/boardMembers/weaverB.jpg"
import wilhelmK from "./pics/boardMembers/wilhelmK.jpg"

//collaborators
import placeHolderImage from "./pics/collaboratorPics/elc-directory-placeholder-01.jpg"
import ohioTourism from "./pics/collaboratorPics/ohio-tourism.png"
import ohioHistoryConnection from "./pics/collaboratorPics/ohio-history-connection.png"
import ohioHotelAndLodgingAssociation from "./pics/collaboratorPics/ohio-hotel-and-lodging-association.png"
import ohioTravelAssociation from "./pics/collaboratorPics/ohio-travel-association.png"
import worldHeritageOhio from "./pics/collaboratorPics/world-heritage-ohio.png"
import greatLakesPublishing from "./pics/collaboratorPics/greatlakespublishing.png"
import citySceneMediaGroup from "./pics/collaboratorPics/City_scene_media_group.png"
import martinDigital from "./pics/collaboratorPics/Martin_Digital_edited.png"
import _614Magazine from "./pics/collaboratorPics/614_updated.png"
import stockAndBarrel from "./pics/collaboratorPics/stock_and_barrel_edited.png"
import _1870Magazine from "./pics/collaboratorPics/1870_edited.png"
import inspirePRgroup from "./pics/collaboratorPics/inspire_pr_Edit.png"
import ohioTravelPavillion from "./pics/collaboratorPics/Ohio_Travel_Pavillion.png"
import adRack from "./pics/collaboratorPics/Ad-Rack.png"
import newarkRotaryClub from "./pics/collaboratorPics/Newark_Rotory.png"
import lickingCountyChamberOfCommerce from "./pics/collaboratorPics/LCCC.png"
import lickingCountyHistoricalSociety from "./pics/collaboratorPics/LCHS.png"
import lickingCountyFoundation from "./pics/collaboratorPics/LCF.png"
import newAlbanyChamberOfCommerce from "./pics/collaboratorPics/New_Albany_Chamber.jpg"
import cityOfHeath from "./pics/collaboratorPics/City_of_heath.png"
import unitedWayOfLickingCounty from "./pics/collaboratorPics/United_way.jpg"
import AmericanRedCross from "./pics/collaboratorPics/American_Red_Cross.png"
import granvilleAreaChamberOfCommerce from "./pics/collaboratorPics/Granville_Chamber.png"
import buckeyeLakeRegionChamberOfCommerce from "./pics/collaboratorPics/buckeyelake.png"
import culturalAllianceOfLickingCounty from "./pics/collaboratorPics/collab-who.jpg"


//videos
//import exploreLCvid from "../videos/Explore Licking County.mp4"
//import that one video for the louis sullivan page

function About_sidebar(props)
/* Contained here is the sidebar for the about pages. By clicking on the names of the pages,
 * users can navigate between them.
 */
{
    return(
    <ul className="float-left">
        <span> ABOUT </span>
        <li>
            <button
                type = "button"
                onClick={()=>props.onAbout()}
                class="about-page">
                ORGANIZATION
            </button>           
        </li>
        <li>
            <button
                type = "button"
                onClick={()=>props.onAbout_louisSullivan()}
                class="about-page">
                LOUIS SULLIVAN
            </button>
        </li>
        <li>
            <button
                type = "button"
                onClick={()=>props.onAbout_leadership()}
                class="about-page">
                LEADERSHIP
            </button>
        </li>
        <li>
            <button
                type = "button"
                onClick={()=>props.onAbout_collaborators()}
                class="about-page">
                COLLABORATORS
            </button>
        </li>
        <li>
            <Qrmodal link={"https://explorelc.org/contact"} buttonText={"CONTACT"} modalText={"Contact us using your mobile device"}/>
        </li>
        <li>
            <Qrmodal link={"https://explorelc.org/partners"} buttonText={"PARTNERS"} modalText={"See how you can partner with us using your mobile device"}/>
        </li>
    </ul>
    )
}

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
                    <p align = "center" className="imgHeader"><strong>About our organization</strong></p>
                    <p align = "center">It's our mission to help you Explore Licking County</p>
                    <br />
                </div>
                <div id="body">
                    {About_sidebar(props)}
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
                                <Qrmodal link={"https://explorelc.org/guide/2020-travel-magazine"} buttonText={"GET THE TRAVEL MAGAZINE"} modalText={"Request a copy of the travel magazine using your mobile device"}/>
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
}


function  LouisSullivan(props)
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
            <div id="header">
                <p align = "center"><strong>The Louis Sullivan Building</strong></p>
                <br />
            </div>
            <div id="body">
                {About_sidebar(props)}
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
                        <img src={louisSullivanImg} height="95%" width="95%"></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div id="imageOfFloorPlan" className="col-md-6">
                                <img src={floorPlanImg} height="190%" width="220%"></img>
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


function Leadership(props)
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
            <div id="header">
                <p align = "center"><strong>The one and only Explore Licking county team</strong></p>
                <br />
            </div>
            {About_sidebar(props)}
            <div className="container">
                <div id="internal team">
                    The internal team
                    <br />
                    <img src={internalTeam} height="100%" width="100%"></img>
                    <br />
                    Image taken at Denison Art Space:
                    <br />
                    Garrett Martin, Dan Moder, Carol Thress, Alex Trujillo
                    <br />
                </div>
                <div id="boardOfDirectors">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={bressoudS} height="100%" width="100%"></img>
                            Suzanne Bressoud - Board Chair 20/21
                        </div>
                        <div className="col-md-3">
                            <img src={fornataroM} height="100%" width="100%"></img>
                            Mike Fornataro - Immediate Past Chair
                        </div>
                        <div className="col-md-3">
                            <img src={proudfitK} height="100%" width="100%"></img>
                            Kendra Proudfit - Board Treasurer
                        </div>
                        <div className="col-md-3">
                            <img src={misnerB} height="100%" width="100%"></img>
                            Brittany Misner - Board Secretary
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-md-3">
                            <img src={birdB} height="100%" width="100%"></img>
                            Bryn Bird
                        </div>
                        <div className="col-md-3">
                            <img src={flowersD} height="100%" width="100%"></img>
                            Duane Flowers
                        </div>
                        <div className="col-md-3">
                            <img src={harrisM} height="100%" width="100%"></img>
                            Michael Harris
                        </div>
                        <div className="col-md-3">
                            <img src={hampshireJ} height="100%" width="100%"></img>
                            Jude Hampshire
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-md-3">
                            <img src={petreyD} height="100%" width="100%"></img>
                            Dee Dee Petrey
                        </div>
                        <div className="col-md-3">
                            <img src={nelsonC} height="100%" width="100%"></img>
                            Cherie Nelson
                        </div>
                        <div className="col-md-3">
                            <img src={mcmanusS} height="100%" width="100%"></img>
                            Stephanie McManus
                        </div>
                        <div className="col-md-3">
                            <img src={treciakA} height="100%" width="100%"></img>
                            Amy Treciak
                        </div>
                    </div><br />
                    <br /><br />
                    <div className="row">
                        <div className="col-md-3">
                            <img src={weaverB} height="100%" width="100%"></img>
                            Bill Weaver
                        </div>
                        <div className="col-md-3">
                            <img src={dutcherC} height="100%" width="100%"></img>
                            Chip Dutcher
                        </div>
                        <div className="col-md-3">
                            <img src={bairdC} height="100%" width="100%"></img>
                            Catherine Baird
                        </div>
                        <div className="col-md-3">
                            <img src={harknessC} height="100%" width="100%"></img>
                            Christoper Harkness
                        </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-md-3">
                            <img src={livingstonJ} height="100%" width="100%"></img>
                            Jay Livingston
                        </div>
                        <div className="col-md-3">
                            <img src={wilhelmK} height="100%" width="100%"></img>
                            Kim Wilhelm
                        </div>
                        <div className="col-md-3">
                            <img src={baloghA} height="100%" width="100%"></img>
                            Anne Balogh
                        </div>
                        <div className="col-md-3">
                            <img src={lorasoJ} height="100%" width="100%"></img>
                            Janice LoRaso
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function Collaborators(props)
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
            <div id="header">
                <p align = "center"><strong>We celebrate the collaborators that are part of our story</strong></p>
                <br />
            </div>
            {About_sidebar(props)}
            <div className="container">
                <div id="state collaborators">
                    <span>State collborators</span>
                    <br />
                    We reach beyond our borders and forge the partnerships that spark our creativity and fuel the passion.
                    <br /><br />
                    <div className="row">
                        <div className="col-md-2">
                            <img src={ohioTourism} height="200px" width="180px"></img>
                            <Qrmodal link={"https://ohio.org/"} buttonText={"Ohio Tourism"} modalText={"Learn more about Ohio Tourism on your mobile device"}/>
                        </div>
                        <div className="col-md-2">
                            <img src={ohioHistoryConnection} height="200px" width="180px"></img>
                            <Qrmodal link={"https://www.ohiohistory.org/"} buttonText={"Ohio History Connection"} modalText={"Learn more about Ohio History Connection on your mobile device"}/>
                        </div>
                        <div className="col-md-2">
                            <img src={ohioHotelAndLodgingAssociation} height="200px" width="180px"></img>
                            <Qrmodal link={"https://www.ohiolodging.com/"} buttonText={"Ohio Hotel and Lodging Association"} modalText={"Learn more about the Ohio Hotel and Lodging Association on your mobile device"}/>
                        </div>
                        <div className="col-md-2">
                            <img src={ohioTravelAssociation} height="200px" width="180px"></img>
                            <Qrmodal link={"https://www.ohiotravel.org/aws/OHTRV/pt/sp/home_page"} buttonText={"Ohio Travel Association"} modalText={"Learn more about the Ohio Travel Association on your mobile device"}/>
                        </div>
                        <div className="col-md-2">
                            <img src={worldHeritageOhio} height="200px" width="180px"></img>
                            <Qrmodal link={"http://worldheritageohio.org/"} buttonText={"World Heritage Ohio"} modalText={"Learn more about World Heritage Ohio on your mobile device"}/>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <br /><br /><br />
                <div id="sales and marketing">
                    <span>Sales and marketing</span>
                    <br />
                    Some people call it sales, we call it storytelling.
                    We make the story available to larger audiences through our friendships with the marketing community.
                    <br /><br />
                    <div className="row">
                        <div className="col-md-2">
                            <img src={greatLakesPublishing} height="200px" width="180px"></img>
                            Great Lakes Publishing
                        </div>
                        <div className="col-md-2">
                            <img src={citySceneMediaGroup} heigh="200px" width="180px"></img>
                            Cityscene Media Group
                        </div>
                        <div className="col-md-2">
                            <img src={martinDigital} heigh="200px" width="180px"></img>
                            Martin Digital
                        </div>
                        <div className="col-md-2">
                            <img src={_614Magazine} heigh="200px" width="180px"></img>
                            614 Magazine
                        </div>
                        <div className="col-md-2">
                            <img src={stockAndBarrel} heigh="200px" width="180px"></img>
                            Stock & Barrel
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <img src={_1870Magazine} heigh="200px" width="180px"></img>
                            1870 Magazine
                        </div>
                        <div className="col-md-2">
                            <img src={inspirePRgroup} heigh="200px" width="180px"></img>
                            Inspire PR Group
                        </div>
                        <div className="col-md-2">
                            <img src={ohioTravelPavillion} heigh="200px" width="180px"></img>
                            Ohio Travel Pavillion
                        </div>
                        <div className="col-md-2">
                            <img src={adRack} heigh="200px" width="180px"></img>
                            Ad-Rack
                        </div>
                        <div className="col-md-2">
                            {/**Empty column*/}
                        </div>
                    </div>
                </div>
                <hr></hr>
                <br /><br /><br />
                <div id="local collaborators">
                    <span>Local collaborators</span>
                    <br />
                    There is pride and enthusiasm in our communities, and we shake hands locally to keep the momentum.
                    <br /><br />
                    <div className="row">
                        <div className="col-md-2">
                            <img src={placeHolderImage} height="200px" width="180px"></img>
                            Licking County Historical Alliance
                        </div>
                        <div className="col-md-2">
                            <img src={newarkRotaryClub} height="200px" width="180px"></img>
                            Newark Rotary Club
                        </div>
                        <div className="col-md-2">
                            <img src={lickingCountyChamberOfCommerce} height="200px" width="180px"></img>
                            Licking County Chamber of Commerce
                        </div>
                        <div className="col-md-2">
                            <img src={lickingCountyHistoricalSociety} height="200px" width="180px"></img>
                            Licking County Historical Society
                        </div>
                        <div className="col-md-2">
                            <img src={lickingCountyFoundation} height="200px" width="180px"></img>
                            Licking County Foundation
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <img src={newAlbanyChamberOfCommerce} height="200px" width="180px"></img>
                            New Albany Chamber of Commerce
                        </div>
                        <div className="col-md-2">
                            <img src={placeHolderImage} height="200px" width="180px"></img>
                            Pataskala Chamber of Commerce
                        </div>
                        <div className="col-md-2">
                            <img src={placeHolderImage} height="200px" width="180px"></img>
                            City of Newark
                        </div>
                        <div className="col-md-2">
                            <img src={cityOfHeath} height="200px" width="180px"></img>
                            City of Heath
                        </div>
                        <div className="col-md-2">
                            <img src={unitedWayOfLickingCounty} height="200px" width="180px"></img>
                            United Way of Licking County
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <img src={AmericanRedCross} height="200px" width="180px"></img>
                            American Red Cross East and South Central Ohio
                        </div>
                        <div className="col-md-2">
                            <img src={granvilleAreaChamberOfCommerce} height="200px" width="180px"></img>
                            Granville Area Chamber of Commerce
                        </div>
                        <div className="col-md-2">
                            <img src={buckeyeLakeRegionChamberOfCommerce} height="200px" width="180px"></img>
                            Buckeye Lake Region Chamber of Commerce
                        </div>
                        <div className="col-md-2">
                            <img src={culturalAllianceOfLickingCounty} height="200px" width="180px"></img>
                            Cultural Alliance of Licking County
                        </div>
                        <div className="col-md-2">
                            {/*Empty Column*/}
                        </div>
                    </div>
                    {/*If adding more rows is desired, use the following template:
                    <div className="row"
                        <div className="col-md-2">
                            <img src={imageName} height="200px" width="180px"></img>
                            name of organization here
                        </div>
                        ^^^ this is a column, there can be up to 5 of these divs in one row div
                    */}
                </div>
                <hr></hr>
                <br /><br /><br />
            </div>
        </div>
    )
}


{/* These pages might just want to straight-up push to phone or redirect. They require keyboard input and provide downloads.
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
*/}

export { About, LouisSullivan, Leadership, Collaborators };