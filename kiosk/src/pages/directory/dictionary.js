import React from "react"
import { Qrmodal, NavBar } from "../../components/"
import "./dictionary.scss"
import village from './images/VILLAGE FLOWER  BASKET.jpg'
import bouncin from './images/BOUNCIN BEAN COFFEE.jpg'
import oldschool from './images/OLD SCHOOL CAFE.jpg'
import  north from './images/NORTH SHORE COFFEE.jpg'
import  plaza from './images/PLAZA.JPG'
import  black from './images/BLACK RUN FARMS.jpg'
import cornell from './images/Cornell_School.jpg'
import denbio from './images/DENISON BIOLOGICAL RESERVE.jpg'
import dension from './images/Denison_UNIVERSITY.jpeg'
import doubletree from './images/DoubleTree_By_Hilton.jpg'
import johnstown from './images/Johnstown_Town_hall_And_Opera_House.jpg'
import nework from './images/nework space.jpg'
import octogon from './images/Octogon_EARTHWORKS.jpg'
import ohio from './images/THE OHIO STATE UNIVERSITY.jpg'
import midland from './images/The_midland_theater.jpg'
import velvet from './images/Velvet_IceCream.jpg'

function Directory(props) {
  //this list will be converted into a grid of cards where you can click on a card and view information
  const townarray = [
    {
      id: 1,
      img: village,
      // name: "Newark, Ohio",
      boldtext: "Village Flower Basket is a boutique flower shop located in the rural village of Granville, OH. Village Flower Basket is known for their personal approach to designing, and offering a mindful and individual experience with flowers.",
      // text: "Sip a latte on a sun-dappled patio just below a hip loft apartment; spend an afternoon browsing the latest art exhibit at the Denison Art Space; beat the rush for a peck of peaches at the Canal Market District. Rainy day? The Works has you covered with a gamut of hands-on STEM activities for all ages, including the 30-foot, 4K projection SciDome planetarium. A seamless marriage of history, culture and the arts with a distinct nod toward the future, Newark is a place where great things are happening--and it shows in a tangible sense of community pride.",
      link: "HTTPS://WWW.FACEBOOK.COM/VILLAGE-FLOWER-BASKET-117288926750/" //use this to kick users to the phone app, so there needs to be some kind of function here
    },
    {
      id: 2,
      img: bouncin,
      boldtext: "Bouncin’ Bean Coffee & Tea Café is a local coffee shop in the heart of Croton, Ohio, set out to serve great customers with delicious coffee, tea, and food. Bouncin’ Bean Café is committed to using the freshest quality ingredients, including premium beans ground fresh daily, to craft a menu full of the most refreshing and eye-opening drinks around. And you’ll find all your favorites here, including robustly flavored espresso, lattes, smoothies, and even a selection of fine teas. But that’s not all. Bouncin’ Bean offers breakfast sandwiches, as well as lunch sandwiches, Velvet ice cream, pastries and so much more!  Find us right down the road from The Biggest Little Fair In The World; the Hartford Fairgrounds.",
      link: "HTTPS://WWW.FACEBOOK.COM/BOUNCINBEAN/"
    },
    {
      id: 3,
      img: oldschool,
      boldtext: "Old School Bakery Cafe serves gourmet coffee made with locally roasted, small-batch beans. Old School opened in September of 2019 and knew from the start that supporting other local businesses was a top priority. They shopped around and found the best local bean, and customers agree.\n" +
          "Old School Bakery Cafe is proud to be a part of the Johnstown community. They sell locally made goods and host crafts and book clubs to engage with the community.",
      link: "https://explorelc.org/guide/heath"
    },
    {
      id: 4,
      img: north,
      boldtext: "North Shore Coffee is a locally owned, locally operated coffee shop, proudly serving organic, locally roasted One Line Coffee. Each and every bean is Fair Trade Certified and comes directly from farm, to roasters, to your cup! North Shore Coffee’s goal is to serve quality coffee to the Buckeye Lake Region. Being a lake community creates such a fun and unique environment, in efforts to promote a clean Buckeye Lake we also use biodegradable, compostable and eco-friendly products.",
      link: "https://m.facebook.com/North-Shore-Coffee-Co"
    },
    {
      id: 5,
      img: plaza,
      boldtext: "Mouthwatering pizza done right is what you can expect with every trip you make to Plaza Pizza. When you have an insatiable hankering for the tastiest, most-delectable pizza around, plan a trip today to our family-owned and -operated pizza restaurant in Newark, OH.",
      link: "HTTPS://WWW.FACEBOOK.COM/PLAZA-PIZZA-129063147189527/"
    },
    {
      id: 6,
      img: black,
      boldtext: "Black Run Farm is a 280+ acre farm that features three ceremony sites and a reception hall. Black Run is also home to the historic Heisey Lodge that was first built in 1880. The surrounding woods and rustic charm of the farm offer a beautiful and unique backdrop to your special day!",
      link: "HTTPS://WWW.FACEBOOK.COM/BLACKRUNFARMSEVENTS/"
    },
    {
      id: 7,
      img: cornell,
      boldtext: "Cornell School is a classic example of how public education functioned in Rural America in the late 20th century. This one-room schoolhouse was built in 1886 and served students until 1923. The structure was donated to the Friends of Cornell School by Tom and Gloria Miller of Alexandria, Ohio. It was moved from their property to its present location in May of 1991. Cornell School has been operating as a living history program for area schools since 1996.",
      link: "HTTPS://WWW.FACEBOOK.COM/CORNELLSCHOOL"
    },
    {
      id: 8,
      img: denbio,
      boldtext: "The Denison University Biological Reserve is a 350 acre site used for student education and research. Hiking trails are open to the public and are suitable for walking, running and mountain biking. The reserve is locate on the east side of SR 661, on the north end of the Village of Granville. Trail Map. Video Tour.\n" +
          "\n" +
          "The purpose of the Reserve is to enhance the education of students in Biology and the Environmental Sciences through their courses, independent research and casual visitation to the Reserve. This is accomplished by providing opportunities for field studies of native Ohio flora and fauna as well as discrete biological communities that are maintained in as intact a condition as is possible given the land use history of the Reserve and the resources of DU. Consequently, one of the general goals of the Reserve is to maximize the number of representative habitats and species that the area can support.",
      link: ""
    },
    {
      id: 9,
      img: dension,
      boldtext: "Denison University is a leading liberal arts college where faculty and students collaborate in research, civic engagement, & cultivation of independent thinking. As a leader among the nation's top residential liberal arts colleges, Denison has earned a reputation for academic rigor that is rivaled only by its commitment to preparing students for a lifetime of personal, professional and civic success.",
      link: "HTTPS://WWW.FACEBOOK.COM/DENISONUNIVERSITY/"
    },
    {
      id: 10,
      img: doubletree,
      boldtext: "Feel welcome the moment you arrive at DoubleTree by Hilton Newark, Ohio with a freshly baked chocolate chip cookie on arrival. Make yourself at home at this hotel in one of our 117 inviting guest rooms equipped with complimentary WiFi, a 37-inch TV, and a refrigerator. Upgrade to a spacious suite with a separate living area – ideal for families and extended stays. Swim in the heated indoor pool, work out in the 24-hour fitness center, or simply relax beside the welcoming patio fireplace.\n" +
          "\n" +
          "Also at DoubleTree by Hilton Newark, they understand how critical meetings and events are to the success of an organization.  Their goal is to provide you with both the most professional and engaging teams as well as convenient planning resources to make your next experience a success. Whether reserving a boardroom or the grand ballroom, you’re sure to find the perfect meeting space at this hotel.",
      link: ""
    },
    {
      id: 11,
      img: johnstown,
      boldtext: "The Town Hall was dedicated in 1885 on the public square in Johnstown. On the second floor of the building is a fine Opera House, one of the only five remaining in Ohio.",
      link: ""
    },
    {
      id: 12,
      img: nework,
      boldtext: "NEWORK Space is an affordable coworking community of freelancers, entrepreneurs, small businesses, commuters, and academics. We have fast Wifi, printing and all the amenities you need to have a productive workday. We accommodate small and large meetings and events. Located on the downtown Newark Square in a historic, beautifully renovated building, our three-story, 6,000 square foot office space provides a variety of offices, seating areas, and private meeting rooms. We accommodate small and large meetings and events.",
      link: "HTTPS://WWW.FACEBOOK.COM/NEWORKSPACE/"
    },
    {
      id: 13,
      img: octogon,
      boldtext: "The Octagon Earthworks consist of a circular earthen enclosure connected to an octagonal enclosure by a short segment of parallel walls. The Octagon Earthworks formed one part of the Newark Earthworks, the largest set of geometric earthworks built by the Hopewell culture (100 B.C. to 500 A.D.) of pre-contact American Indian people. The circle encloses about 20 acres and the octagon about 50 acres.",
      link: ""
    },
    {
      id: 14,
      img: ohio,
      boldtext: "The Ohio State University at Newark provides access to the university by extending Ohio State courses, programs, research, and service to many Ohio communities.",
      link: "HTTPS://WWW.FACEBOOK.COM/OHIOSTATEUNIVERSITYNEWARK/"
    },
    {
      id: 15,
      img: midland,
      boldtext: "Beautifully anchoring the north side of the historic downtown Newark Square, The Midland Theatre an 1,200-seat theatre built in 1928.  After extensive renovations, the Theatre is now a state of the art performance venue and concert hall.  The Midland also can be the host for your next function.  With private bookings available, the theatre can take an everyday meeting and turn it into a one of a kind event.",
      link: "HTTPS://WWW.FACEBOOK.COM/THEMIDLANDTHEATRE/"
    },
    {
      id: 16,
      img: velvet,
      boldtext: "Since 1970, Velvet’s Ye Olde Mill has been a destination serving up delicious ice cream, food and memories. Join them in Utica to spend a day surrounded by ice cream!  Each year, more than 150,000 come to Licking County Ohio to be at one with nature and get their fill of the freshest ice cream they’ve ever tasted at Ye Olde Mill. With 20 picturesque acres of rolling hills and thick forests, Ye Olde Mill provides the perfect setting for family fun, reunions, weddings and more.",
      link: "HTTPS://WWW.FACEBOOK.COM/VELVETICECREAM"
    },
  ]

    const threeGrid = () => { //automatically returning component
      return townarray.map(item=>{ //map the town data onto the cards and define classes for later modification
        const {id, img,  boldtext,  link} = item;
        return (
          <div key = {id} className="card floatL width33">
          <img src={img} className = "card-img-top imgprops"  />
          <div className = "card-body">
            <h6>{boldtext}</h6>
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

export { Directory }
