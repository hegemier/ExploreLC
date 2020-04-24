import React from "react";
import { Qrmodal, NavBar } from "../../components/"
//All media and exact text displayed is controlled within these data files
import { aboutData, louisSullivanData, leadershipData, collaboratorsData } from "../../data/aboutData.js"

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
    var lang = "en";
    return aboutData.map(item=>{
        const {overlayImage, header, subHeaderText, section0_text, section1_title, section1_text, section1_media, section1_url, 
            section1_QRbuttonText, section1_QRmodalText, section2_title, section2_text, section2_url, section2_media,
            section2_QRbuttonText, section2_QRmodalText, videoMedia} = item;
        if (lang = "en")
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
    })
}


function LouisSullivan(props)
{
    var lang = "en";
    return louisSullivanData.map(item=>{
        const {overlayImage, header, videoMedia, section1_header, section1_text, section1_media, section2_text, section2_media} = item;
        if (lang = "en")
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
                    <div id="header">
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
    })
}


function Leadership(props)
{
    var lang = "en";
    return leadershipData.map(item=>{
        const {overlayImage, header, subHeaderText, image1, image1_desc, section1_header, person1_pic, person1_name, person2_pic,
            person2_name, person3_pic, person3_name, person4_pic, person4_name, person5_pic, person5_name, person6_pic, 
            person6_name, person7_pic, person7_name, person8_pic, person8_name, person9_pic, person9_name, person10_pic, 
            person10_name, person11_pic, person11_name, person12_pic, person12_name, person13_pic, person13_name, person14_pic, 
            person14_name, person15_pic, person15_name, person16_pic, person16_name, person17_pic, person17_name, person18_pic, 
            person18_name, person19_pic, person19_name, person20_pic, person20_name} = item;
        if (lang = "en")
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
                    <div id="header">
                        <p align = "center" className="imgHeader">{header}</p>
                        <br /><br /><br /><br /><br />
                    </div>
                </div>
                <br /><br />
                {About_sidebar(props)}
                <div className="container">
                    <div id="internal team">
                        {subHeaderText}
                        <br />
                        <img src={image1} height="100%" width="100%"></img>
                        <br />
                        {image1_desc}
                        <br />
                    </div>
                    <br />
                    {section1_header}
                    <div id="boardOfDirectors">
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
    })
}


function Collaborators(props)
{
    var lang = "en";
    return collaboratorsData.map(item=>{
        const {overlayImage, header, collabHeader1, collabSubHeader1, h1_collab1, h1_collab2, h1_collab3, h1_collab4, h1_collab5,
            h1_pic1, h1_pic2, h1_pic3, h1_pic4, h1_pic5, collabHeader2, collabSubHeader2, h2_collab1, h2_collab2,
            h2_collab3_, h2_collab4, h2_collab5, h2_collab6, h2_collab7, h2_collab8, h2_collab9, h2_collab10, h2_pic1,
            h2_pic2, h2_pic3, h2_pic4, h2_pic5, h2_pic6, h2_pic7, h2_pic8, h2_pic9, h2_pic10, collabHeader3, collabSubHeader3,
            h3_collab1, h3_collab2, h3_collab3, h3_collab4, h3_collab5, h3_collab6, h3_collab7, h3_collab8, h3_collab9, h3_collab10,
            h3_collab11, h3_collab12, h3_collab13, h3_collab14, h3_collab15, h3_pic1, h3_pic2, h3_pic3, h3_pic4, h3_pic5, h3_pic6,
            h3_pic7, h3_pic8, h3_pic9, h3_pic10, h3_pic11, h3_pic12, h3_pic13, h3_pic14, h3_pic15} = item;
        if (lang = "en")
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
                    <p align = "center"><strong>{header}</strong></p>
                    <br />
                </div>
                {About_sidebar(props)}
                <div className="container">
                    <div id="state collaborators">
                        <span>{collabHeader1}</span>
                        <br />
                        {collabSubHeader1}
                        <br /><br />
                        <div className="row">
                            <div className="col-md-2">
                                <img src={h1_pic1} height="200px" width="180px"></img>
                                <Qrmodal link={"https://ohio.org/"} buttonText={"Ohio Tourism"} modalText={"Learn more about Ohio Tourism on your mobile device"}/>
                            </div>
                            <div className="col-md-2">
                                <img src={h1_pic2} height="200px" width="180px"></img>
                                <Qrmodal link={"https://www.ohiohistory.org/"} buttonText={"Ohio History Connection"} modalText={"Learn more about Ohio History Connection on your mobile device"}/>
                            </div>
                            <div className="col-md-2">
                                <img src={h1_pic3} height="200px" width="180px"></img>
                                <Qrmodal link={"https://www.ohiolodging.com/"} buttonText={"Ohio Hotel and Lodging Association"} modalText={"Learn more about the Ohio Hotel and Lodging Association on your mobile device"}/>
                            </div>
                            <div className="col-md-2">
                                <img src={h1_pic4} height="200px" width="180px"></img>
                                <Qrmodal link={"https://www.ohiotravel.org/aws/OHTRV/pt/sp/home_page"} buttonText={"Ohio Travel Association"} modalText={"Learn more about the Ohio Travel Association on your mobile device"}/>
                            </div>
                            <div className="col-md-2">
                                <img src={h1_pic5} height="200px" width="180px"></img>
                                <Qrmodal link={"http://worldheritageohio.org/"} buttonText={"World Heritage Ohio"} modalText={"Learn more about World Heritage Ohio on your mobile device"}/>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <br /><br /><br />
                    <div id="sales and marketing">
                        <span>{collabHeader2}</span>
                        <br />
                        {collabSubHeader2}
                        <br /><br />
                        <div className="row">
                            <div className="col-md-2">
                                <img src={h2_pic1} height="200px" width="180px"></img>
                                Great Lakes Publishing
                            </div>
                            <div className="col-md-2">
                                <img src={h2_pic2} heigh="200px" width="180px"></img>
                                Cityscene Media Group
                            </div>
                            <div className="col-md-2">
                                <img src={h2_pic3} heigh="200px" width="180px"></img>
                                Martin Digital
                            </div>
                            <div className="col-md-2">
                                <img src={h2_pic4} heigh="200px" width="180px"></img>
                                614 Magazine
                            </div>
                            <div className="col-md-2">
                                <img src={h2_pic5} heigh="200px" width="180px"></img>
                                Stock & Barrel
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <img src={h2_pic6} heigh="200px" width="180px"></img>
                                1870 Magazine
                            </div>
                            <div className="col-md-2">
                                <img src={h2_pic7} heigh="200px" width="180px"></img>
                                Inspire PR Group
                            </div>
                            <div className="col-md-2">
                                <img src={h2_pic8} heigh="200px" width="180px"></img>
                                Ohio Travel Pavillion
                            </div>
                            <div className="col-md-2">
                                <img src={h2_pic9} heigh="200px" width="180px"></img>
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
                        <span>{collabHeader3}</span>
                        <br />
                        {collabSubHeader3}
                        <br /><br />
                        <div className="row">
                            <div className="col-md-2">
                                <img src={h3_pic1} height="200px" width="180px"></img>
                                Licking County Historical Alliance
                            </div>
                            <div className="col-md-2">
                                <img src={h3_pic2} height="200px" width="180px"></img>
                                Newark Rotary Club
                            </div>
                            <div className="col-md-2">
                                <img src={h3_pic3} height="200px" width="180px"></img>
                                Licking County Chamber of Commerce
                            </div>
                            <div className="col-md-2">
                                <img src={h3_pic4} height="200px" width="180px"></img>
                                Licking County Historical Society
                            </div>
                            <div className="col-md-2">
                                <img src={h3_pic5} height="200px" width="180px"></img>
                                Licking County Foundation
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <img src={h3_pic6} height="200px" width="180px"></img>
                                New Albany Chamber of Commerce
                            </div>
                            <div className="col-md-2">
                                <img src={h3_pic7} height="200px" width="180px"></img>
                                Pataskala Chamber of Commerce
                            </div>
                            <div className="col-md-2">
                                <img src={h3_pic8} height="200px" width="180px"></img>
                                City of Newark
                            </div>
                            <div className="col-md-2">
                                <img src={h3_pic9} height="200px" width="180px"></img>
                                City of Heath
                            </div>
                            <div className="col-md-2">
                                <img src={h3_pic10} height="200px" width="180px"></img>
                                United Way of Licking County
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <img src={h3_pic11} height="200px" width="180px"></img>
                                American Red Cross East and South Central Ohio
                            </div>
                            <div className="col-md-2">
                                <img src={h3_pic12} height="200px" width="180px"></img>
                                Granville Area Chamber of Commerce
                            </div>
                            <div className="col-md-2">
                                <img src={h3_pic13} height="200px" width="180px"></img>
                                Buckeye Lake Region Chamber of Commerce
                            </div>
                            <div className="col-md-2">
                                <img src={h3_pic14} height="200px" width="180px"></img>
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
    })
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
