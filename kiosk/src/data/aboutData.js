//Import all media being used
//overlay images
import defaultOverlay from "../assets/image/aboutpics/defaultOverlay.jpg"
import louisSullivanOverlay from "../assets/image/aboutpics/louisSullivanOverlay.jpg"
import organizationOverlay from "../assets/image/aboutpics/organizationOverlay.png"

//about (organization)
import travelGuideImg from "../assets/image/aboutpics/2020_Travel_Guide_Ecomm_Web_Ready.jpg"
import impactAwardImg from "../assets/image/aboutpics/iw-impact-award.jpg"

//louis sullivan
import louisSullivanImg from "../assets/image/aboutpics/history-04-louisSullivan.jpg"
import floorPlanImg from "../assets/image/aboutpics/193101_007-web-louisSullivan.jpg"

//leadership
import bressoudS from "../assets/image/aboutpics/boardMembers/bressoudS.jpg"
import bairdC from "../assets/image/aboutpics/boardMembers/catherineBaird.jpg"
import baloghA from "../assets/image/aboutpics/boardMembers/anneBalogh.jpg"
import birdB from "../assets/image/aboutpics/boardMembers/birdB.jpg"
import dutcherC from "../assets/image/aboutpics/boardMembers/dutcherC.jpg"
import flowersD from "../assets/image/aboutpics/boardMembers/flowersD.jpg"
import fornataroM from "../assets/image/aboutpics/boardMembers/fornataroM.jpg"
import hampshireJ from "../assets/image/aboutpics/boardMembers/hampshireJ.jpg"
import harknessC from "../assets/image/aboutpics/boardMembers/harknessC.jpg"
import harrisM from "../assets/image/aboutpics/boardMembers/HarrisM.jpg"
import livingstonJ from "../assets/image/aboutpics/boardMembers/livingstonJ.jpg"
import lorasoJ from "../assets/image/aboutpics/boardMembers/lorasoJ.jpg"
import mcmanusS from "../assets/image/aboutpics/boardMembers/mcmanusS.jpg"
import misnerB from "../assets/image/aboutpics/boardMembers/misnerB.jpg"
import nelsonC from "../assets/image/aboutpics/boardMembers/nelsonC.jpg"
import petreyD from "../assets/image/aboutpics/boardMembers/petreyD.jpg"
import proudfitK from "../assets/image/aboutpics/boardMembers/proudfitK.jpg"
import internalTeam from "../assets/image/aboutpics/boardMembers/theTeam.jpeg"
import treciakA from "../assets/image/aboutpics/boardMembers/treciakA.jpg"
import weaverB from "../assets/image/aboutpics/boardMembers/weaverB.jpg"
import wilhelmK from "../assets/image/aboutpics/boardMembers/wilhelmK.jpg"

//collaborators
import placeHolderImage from "../assets/image/aboutpics/collaboratorPics/elc-directory-placeholder-01.jpg"
import ohioTourism from "../assets/image/aboutpics/collaboratorPics/ohio-tourism.png"
import ohioHistoryConnection from "../assets/image/aboutpics/collaboratorPics/ohio-history-connection.png"
import ohioHotelAndLodgingAssociation from "../assets/image/aboutpics/collaboratorPics/ohio-hotel-and-lodging-association.png"
import ohioTravelAssociation from "../assets/image/aboutpics/collaboratorPics/ohio-travel-association.png"
import worldHeritageOhio from "../assets/image/aboutpics/collaboratorPics/world-heritage-ohio.png"
import greatLakesPublishing from "../assets/image/aboutpics/collaboratorPics/greatlakespublishing.png"
import citySceneMediaGroup from "../assets/image/aboutpics/collaboratorPics/City_scene_media_group.png"
import martinDigital from "../assets/image/aboutpics/collaboratorPics/Martin_Digital_edited.png"
import _614Magazine from "../assets/image/aboutpics/collaboratorPics/614_updated.png"
import stockAndBarrel from "../assets/image/aboutpics/collaboratorPics/stock_and_barrel_edited.png"
import _1870Magazine from "../assets/image/aboutpics/collaboratorPics/1870_edited.png"
import inspirePRgroup from "../assets/image/aboutpics/collaboratorPics/inspire_pr_Edit.png"
import ohioTravelPavillion from "../assets/image/aboutpics/collaboratorPics/Ohio_Travel_Pavillion.png"
import adRack from "../assets/image/aboutpics/collaboratorPics/Ad-Rack.png"
import newarkRotaryClub from "../assets/image/aboutpics/collaboratorPics/Newark_Rotory.png"
import lickingCountyChamberOfCommerce from "../assets/image/aboutpics/collaboratorPics/LCCC.png"
import lickingCountyHistoricalSociety from "../assets/image/aboutpics/collaboratorPics/LCHS.png"
import lickingCountyFoundation from "../assets/image/aboutpics/collaboratorPics/LCF.png"
import newAlbanyChamberOfCommerce from "../assets/image/aboutpics/collaboratorPics/New_Albany_Chamber.jpg"
import cityOfHeath from "../assets/image/aboutpics/collaboratorPics/City_of_heath.png"
import unitedWayOfLickingCounty from "../assets/image/aboutpics/collaboratorPics/United_way.jpg"
import AmericanRedCross from "../assets/image/aboutpics/collaboratorPics/American_Red_Cross.png"
import granvilleAreaChamberOfCommerce from "../assets/image/aboutpics/collaboratorPics/Granville_Chamber.png"
import buckeyeLakeRegionChamberOfCommerce from "../assets/image/aboutpics/collaboratorPics/buckeyelake.png"
import culturalAllianceOfLickingCounty from "../assets/image/aboutpics/collaboratorPics/collab-who.jpg"


const aboutData = [
    {
        overlayImage : organizationOverlay,
        header : "About our organization",
        subHeaderText: "It's our mission to help you Explore Licking County",
        section0_text : "Explore Licking County is here to help our community and visitors find their way to a one of a kind Licking County experience. We tell the story of people and their experiences and let those stories advocate our love for our county.",
        section1_title : "2020 TRAVEL MAGAZINE",
        section1_text : "Whether or not you stay on the beaten path or venture off is up to you... It's all worth the trip. Check out our latest travel magazine and explore.",
        section1_media : travelGuideImg, 
        section1_url : "https://explorelc.org/guide/2020-travel-magazine",
        section1_QRbuttonText : "GET THE 2020 TRAVEL MAGAZINE",
        section1_QRmodalText : "Use your mobile device to request a copy of the travel magazine",
        section2_title : "IMPACT AWARDS",
        section2_text : "Every year the Impact Awards are presented by Explore Licking County to outstanding tourism partners. While we value all partners in our network, we wish to acknowledge those who go above and beyond.",
        section2_media : impactAwardImg,
        section2_url : "https://explorelc.org/impact-awards",
        section2_QRbuttonText : "IMPACT AWARDS",
        section2_QRmodalText : "Use your mobile device to learn about the Impact Awards Ceremony",
        videoMedia : null
    }
];

const louisSullivanData = [
    {
        overlayImage : louisSullivanOverlay,
        header : "The Louis Sullivan Building",
        videoMedia : "",
        section1_header : "ABOUT",
        section1_text : "The Louis Sullivan Building of Newark has graced the Courthouse Square for over a century at One North Third Street.  It was built in 1914 and opened its doors on August 25, 1915 as The Home Building Association Company, commonly known as “The Old Home”.  One of only eight banks designed by noted American architect Louis Sullivan, it is both a national treasure and a treasured piece of Central Ohio’s heritage.  Through the years, the Sullivan Building was also home to a butcher shop, a jewelry store and eventually an ice cream parlor.  With each new tenant the interior was altered, but the building’s historic and architectural significance never changed.  In 1973, it was added to the National Register of Historic Places.",
        section1_media : louisSullivanImg,
        section2_text : "In 2013, the building was generously gifted to the Licking County Foundation by Newark native, Stephen Jones.  Since early 2014, the Licking County Foundation and a team of community volunteers known as Team Sullivan have been working to develop a plan for the Louis Sullivan Building of Newark’s restoration and reuse.  The vision has always been to create a valuable space that is financially self-sustaining and open for the public to enjoy, celebrate and study.  Today, the team continues to work with that goal in mind by creating a new home for Explore Licking County.",
        section2_media : floorPlanImg
    }
];

const leadershipData = [
    {
        overlayImage : defaultOverlay,
        header : "The one and only Explore Licking County team",
        subHeaderText : "The internal team",
        image1 : internalTeam,
        image1_desc : "Image taken at Denison Art Space: Garrett Martin, Dan Moder, Carol Thress, Alex Trujillo",
        section1_header: "Board of directors",
        person1_pic : bressoudS,
        person1_name : "Suzzanne Bressoud - Board Chair 20/21",
        person2_pic : fornataroM,
        person2_name : "Mike Fornataro - Immediate Past Chair",
        person3_pic : proudfitK,
        person3_name : "Kendra Proudfit - Board Treasurer",
        person4_pic : misnerB,
        person4_name : "Britanny Misner",
        person5_pic : birdB,
        person5_name : "Bryn Bird",
        person6_pic : flowersD,
        person6_name : "Duane Flowers",
        person7_pic : harrisM,
        person7_name : "Michael Harris",
        person8_pic : hampshireJ,
        person8_name : "Jude Hampshire",
        person9_pic : petreyD,
        person9_name : "Dee Dee Petrey",
        person10_pic : nelsonC,
        person10_name : "Cherie Nelson",
        person11_pic : mcmanusS,
        person11_name : "Stephanie McManus",
        person12_pic : treciakA,
        person12_name : "Amy Treciak",
        person13_pic : weaverB,
        person13_name : "Bill Weaver",
        person14_pic : dutcherC,
        person14_name : "Chip Dutcher",
        person15_pic : bairdC,
        person15_name : "Catherine Baird",
        person16_pic : harknessC,
        person16_name : "Chirs Harkness",
        person17_pic : livingstonJ,
        person17_name : "Jay Livingston",
        person18_pic : wilhelmK,
        person18_name : "Kim Wilhelm",
        person19_pic : baloghA,
        person19_name : "Anne Balogh",
        person20_pic : lorasoJ,
        person20_name : "Janice LoRaso"
    }
];

const collaboratorsData = [
    {
        overlayImage : defaultOverlay,
        header : "We celebrate the collaborators that are part of our story.",
        collabHeader1: "State collaborators",
        collabSubHeader1: "We reach beyond our border and force the partnerships that spark our creativity and fuel the passion.",
        h1_collab1 : "Ohio Tourism",
        h1_collab2 : "Ohio History Connection",
        h1_collab3 : "Ohio Hotel & Lodging Association",
        h1_collab4 : "Ohio Travel Association",
        h1_collab5 : "World Heritage Ohio",
        h1_pic1 : ohioTourism,
        h1_pic2 : ohioHistoryConnection,
        h1_pic3 : ohioHotelAndLodgingAssociation,
        h1_pic4 : ohioTravelAssociation,
        h1_pic5 : worldHeritageOhio,
        collabHeader2 : "Sales & Marketing",
        collabSubHeader2 : "Some people call it sales, we call it storytelling. We make the story available to larger audiences through our friendships with the marketing community.",
        h2_collab1 : "Great Lakes Publishing",
        h2_collab2 : "Cityscene Media Group",
        h2_collab3 : "Martin Digital",
        h2_collab4 : "614 Magazine",
        h2_collab5 : "Stock & Barrel",
        h2_collab6 : "1870 Magazine",
        h2_collab7 : "Inspire PR Group",
        h2_collab8 : "Ohio Travel Pavillion",
        h2_collab9 : "Ad-Rack",
        h2_collab10 : null,
        h2_pic1 : greatLakesPublishing,
        h2_pic2 : citySceneMediaGroup,
        h2_pic3 : martinDigital,
        h2_pic4 : _614Magazine,
        h2_pic5 : stockAndBarrel,
        h2_pic6 : _1870Magazine,
        h2_pic7 : inspirePRgroup,
        h2_pic8 : ohioTravelPavillion,
        h2_pic9 : adRack,
        h2_pic10 : null,
        collabHeader3 : "Local collaborators",
        collabSubHeader3 : "There is pride and enthusiasm in our communities, and we shake hands locally to keep the momentum.",
        h3_collab1 : "Licking County Historical Alliance",
        h3_collab2 : "Newark Rotary Club",
        h3_collab3 : "Licking County Chamber of Commerce",
        h3_collab4 : "Licking County Historical Society",
        h3_collab5 : "Licking County Foundation",
        h3_collab6 : "New Albany Chamber of Commerce",
        h3_collab7 : "Pataskala Chamber of Commerce",
        h3_collab8 : "City of Newark",
        h3_collab9 : "City of Heath",
        h3_collab10 : "United Way of Licking County",
        h3_collab11 : "American Red Cross East & South Central Ohio",
        h3_collab12 : "Granville Area Chamber of Commerce",
        h3_collab13 : "Buckeye Lake Region Chamber of Commerce",
        h3_collab14 : "Cultural Alliance of Licking County",
        h3_collab15 : "",
        h3_pic1 : placeHolderImage,
        h3_pic2 : newarkRotaryClub,
        h3_pic3 : lickingCountyChamberOfCommerce,
        h3_pic4 : lickingCountyHistoricalSociety,
        h3_pic5 : lickingCountyFoundation,
        h3_pic6 : newAlbanyChamberOfCommerce,
        h3_pic7 : placeHolderImage,
        h3_pic8 : placeHolderImage,
        h3_pic9 : cityOfHeath,
        h3_pic10 : unitedWayOfLickingCounty,
        h3_pic11 : AmericanRedCross,
        h3_pic12 : granvilleAreaChamberOfCommerce,
        h3_pic13 : buckeyeLakeRegionChamberOfCommerce,
        h3_pic14 : culturalAllianceOfLickingCounty,
        h3_pic15 : ""
    }
];

export { aboutData, louisSullivanData, leadershipData, collaboratorsData };