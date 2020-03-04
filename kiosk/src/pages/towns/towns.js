import React from "react"
import Qrmodal from "./qrmodal"
import "./towns.scss"
import newark from './townpics/newark.jpg'
import granville from './townpics/granville.jpg'
import heath from './townpics/heath.jpg'
import utica from './townpics/utica.jpg'
import johnstown from './townpics/johnstown.jpg'
import hebron from './townpics/hebron.jpg'
import buckeyelake from './townpics/buckeyelake.jpg'
import hartford from './townpics/hartford.jpg'
import pataskala from './townpics/pataskala.jpg'

function Towns() {
  //this list will be converted into a grid of cards where you can click on a card and view information
  const townarray = [
    {
      id: 1,
      img: newark,
      name: "Newark, Ohio",
      boldtext: "With a bustling downtown rich in history and the arts, Newark is experiencing a revitalization like no other.",
      text: "Sip a latte on a sun-dappled patio just below a hip loft apartment; spend an afternoon browsing the latest art exhibit at the Denison Art Space; beat the rush for a peck of peaches at the Canal Market District. Rainy day? The Works has you covered with a gamut of hands-on STEM activities for all ages, including the 30-foot, 4K projection SciDome planetarium. A seamless marriage of history, culture and the arts with a distinct nod toward the future, Newark is a place where great things are happening--and it shows in a tangible sense of community pride.",
      link: "https://explorelc.org/guide/newark" //use this to kick users to the phone app, so there needs to be some kind of function here
    },
    {
      id: 2,
      img: granville,
      name: "Granville, Ohio",
      boldtext: "New England charm with Midwestern flair.",
      text: "Home to the acclaimed Denison University and a postcard-worthy Main Street (also known as Broadway), Granville is the ideal place to experience marvels of history, art, education and nature within a half-mile radius. Join the locals on a hot summer evening, sampling the newest flavor from Whit’s Frozen Custard as you stroll past boutique shops and restaurants; stop into the picturesque Granville Inn for a farm-to-table meal; take a minute to marvel at the stately Bryn Du Mansion before the band tunes up for its annual Concert on the Green summer series. Also, don’t forget your bike: From here, you can easily access the T.J. Evans bike path and head west toward Johnstown or east toward Newark.",
      link: "https://explorelc.org/guide/granville"
    },
    {
      id: 3,
      img: heath,
      name: "Heath, Ohio",
      boldtext: "Your one-stop destination for shopping, dining and recreation, Heath is a perfect blend of commerce and community.",
      text: "While it boasts extensive retail options--from home improvement stores to restaurants to the Indian Mound Mall--Heath is a beacon of economic diversity. Consider the historic Davis-Shai House, an 1861 Gothic Revival home-turned-cultural center, which every year draws large crowds to its elegant Victorian Christmas. Recreational opportunities abound thanks to a network of bike paths and an impressive water park. Heath is also home to the Heath-Newark-Licking County Port Authority, where the 350-acre campus of the Central Ohio Aerospace and Technology Center is located.",
      link: "https://explorelc.org/guide/heath"
    },
    {
      id: 4,
      img: utica,
      name: "Utica, Ohio",
      boldtext: "With equal parts quaintness and country, the village of Utica is a hidden gem waiting to be discovered.",
      text: "Best known as the home of Velvet Ice Cream--whose annual Utica Sertoma Ice Cream festival at Ye Olde Mill, its idyllic headquarters along Ohio 13, draws attendees from across the state--this northern Licking County hamlet is also the site of one-of-a-kind shops such as Farmers Daughters on Main, where you can pick up the latest in farmhouse decor or participate in a crafting class.  As weather permits, stop by one of several orchards and fruit farms to taste the bounty of the local harvest--or better yet, pick it yourself. Craving comfort food? Watt’s Family Restaurant has ample helpings of meatloaf and fresh-baked pies calling your name.",
      link: "https://explorelc.org/guide/newark-85mxm"
    },
    {
      id: 5,
      img: johnstown,
      name: "Johnstown, Ohio",
      boldtext: "Look no further than Johnstown for evidence that central Ohio’s rolling fields are more than corn and soybeans",
      text: "Equestrian centers, vineyards and golf courses are just a few of the ways Johnstown is sharing its wide-open space. Stop downtown to peruse antique and artisan shops and sample a local microbrew before snapping a few photos of the Johnstown Opera House, one of only five in the state. If you happen to plan your visit with Swapper’s Day, the village’s popular long-standing flea market, you’re sure to go home with a gem or two. Johnstown is also the western trailhead for the T.J. Evans bike trails: Hop on here to stroll past the ancient site where mastodon bones were found, and it’s a scenic 15-mile ride to Newark.",
      link: "https://explorelc.org/guide/johnstown"
    },
    {
      id: 6,
      img: hebron,
      name: "Hebron, Ohio",
      boldtext: "A burgeoning manufacturing sector combined with strong roots make Hebron a community with deep local pride.",
      text: "Situated along the Historic National Road, Hebron is home to National Trail Raceway, whose NHRA-sanctioned quarter-mile track draws scores of drag-racing fans each season. Bargain hunters should be sure to cruise through the weekend after Memorial Day for the Historic National Road Yard Sale, held on U.S. 40 from Illinois to Maryland. Locals and visitors alike can’t make the trek to downtown Hebron without sharing a famous, mouthwatering stromboli from Clay’s Cafe. In the fall, city-dwellers flock to Pigeon Roost Farm, where pumpkins, corn mazes, hayrides and old-fashioned fun abound.",
      link: "https://explorelc.org/guide/hebron"
    },
    {
      id: 7,
      img: buckeyelake,
      name: "Buckeye Lake, Ohio",
      boldtext: "Everything you could ask for in a lakeside escape, minus the long drive.",
      text: "Whether you’re a boater looking for the best view of the Fourth of July fireworks, a craft beer connoisseur hankering for the latest offerings at Buckeye Lake Brewery or seeking out the perfect date night (watching the sun set over the water as you toast to the good life, of course), this southern Licking County haven is the getaway you’ve been searching for. Recent revitalization efforts have transformed the former “Playground of Ohio” back into a hotspot: One where families can enjoy a picnic lunch on a warm summer day, nature lovers can marvel at the one-of-a-kind Cranberry Bog and foodies can sample the best cuisine the lake has to offer. No boat? No problem. The four-mile Buckeye Lake Dam offers a perfect opportunity for a scenic stroll, jog or bike ride--no life jacket required.",
      link: "https://explorelc.org/guide/buckeye-lake"
    },
    {
      id: 8,
      img: hartford,
      name: "Hartford, Ohio",
      boldtext: "Perhaps best known for “The Biggest Little Fair in the World,” Hartford is a country escape just a jaunt away from the city.",
      text: "One evening at the fair is all it takes to experience a little bit of everything Licking County has to offer: Camaraderie, home cooking and some friendly competition. Any other time of year, hop onto the country road and prepare to breathe in the open air as you take in panoramic views of the simple life: Vast sky, farmers’ fields and maybe a cow or three. Named after the town of Hartford, Connecticut, this village boasts tight-knit eastern roots situated under the boundless central Ohio sky.",
      link: "https://explorelc.org/guide/hartford"
    },
    {
      id: 9,
      img: pataskala,
      name: "Pataskala, Ohio",
      boldtext: "Drive 20 miles east of Columbus and you’ll have no trouble catching glimpses of small-town life in Pataskala.",
      text: "The festive Pataskala Street Fair, for example, which faithfully draws a crowd each summer for carnival-style food, music, entertainment and fun in support of the local fire department. Or the nostalgic Nutcracker Restaurant, whose ‘50s diner-style decor and homestyle cooking have been winning over picky eaters for decades. Golfers will be pleased to know Pataskala boasts four places to hit the links, while history buffs should add the stately Sterling Theater and Mead-Needham Museum to their “must-see” lists. No matter your exploration preferences, Pataskala has something for you to discover.",
      link: "https://explorelc.org/guide/pataskala"
    },
  ]

    const threeGrid = () => { //automatically returning component
      return townarray.map(item=>{
        const {id, img, name, boldtext, text, link} = item;
        return (
          <div key = {id} className="card floatL width33">
          <img src={img} className = "card-img-top imgprops" alt={name}/>
          <div className = "card-body">
            <h5 className="card-title">{name}</h5>
            <h6>{boldtext}</h6>
            <p>{text}</p>
            <Qrmodal link = {link}/>
            </div>
          </div>
        )
      })
    } //add navbar later

  return (
    <div>
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
