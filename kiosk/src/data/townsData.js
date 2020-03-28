import {
    newark, granville, heath, utica, johnstown, hebron, buckeyelake, hartford, pataskala
} from '../assets/image/townpics';

const TownsData = [
  {
    id: 1,
    img: newark,
    name: "Newark, Ohio",
    boldtext: "With a bustling downtown rich in history and the arts, Newark is experiencing a revitalization like no other.",
    text: "Sip a latte on a sun-dappled patio just below a hip loft apartment; spend an afternoon browsing the latest art exhibit at the Denison Art Space; beat the rush for a peck of peaches at the Canal Market District. Rainy day? The Works has you covered with a gamut of hands-on STEM activities for all ages, including the 30-foot, 4K projection SciDome planetarium. A seamless marriage of history, culture and the arts with a distinct nod toward the future, Newark is a place where great things are happening--and it shows in a tangible sense of community pride.",
    boldtext_es: "Con un bullicioso centro lleno de historia y artes, Newark está experimentando una revitalización como ninguna otra.",
    text_es: "Bebe un café con leche en un patio cubierto de sol justo debajo de un moderno apartamento tipo loft; pasar una tarde navegando por la última exposición de arte en el Denison Art Space; supera la prisa por un picotazo de duraznos en el Distrito del Mercado del Canal. ¿Día lluvioso? The Works lo tiene cubierto con una gama de actividades prácticas de STEM para todas las edades, incluido el planetario SciDome de proyección de 4K de 30 pies. Newark, un matrimonio perfecto de historia, cultura y artes con un claro guiño hacia el futuro, es un lugar donde están sucediendo grandes cosas, y se muestra en un sentido tangible de orgullo comunitario.",
    boldtext_de: "Mit einer geschäftigen Innenstadt voller Geschichte und Kunst erlebt Newark eine Revitalisierung wie keine andere.",
    text_de: "Trinken Sie einen Latte auf einer sonnendurchfluteten Terrasse direkt unter einem angesagten Loft-Apartment. Verbringen Sie einen Nachmittag in der neuesten Kunstausstellung im Denison Art Space. Schlagen Sie den Ansturm auf einen Schuss Pfirsiche im Canal Market District. Regnerischer Tag? The Works bietet Ihnen eine Reihe praktischer STEM-Aktivitäten für alle Altersgruppen, einschließlich des 30-Fuß-SciDome-Planetariums mit 4K-Projektion. Newark ist eine nahtlose Verbindung von Geschichte, Kultur und Kunst mit einem deutlichen Blick auf die Zukunft. Es ist ein Ort, an dem großartige Dinge geschehen - und dies zeigt sich in einem spürbaren Gefühl des Gemeinschaftsstolzes.",
    boldtext_fr: "Avec un centre-ville animé riche en histoire et en arts, Newark connaît une revitalisation pas comme les autres.",
    text_fr: "Sirotez un café au lait sur une terrasse ensoleillée juste en dessous d'un loft branché; passer un après-midi à parcourir la dernière exposition d'art au Denison Art Space; battre la ruée pour un pic de pêches au Canal Market District. Jour de pluie? The Works vous propose une gamme d'activités pratiques STEM pour tous les âges, y compris le planétarium SciDome 4K de 30 pieds. Mariage harmonieux de l'histoire, de la culture et des arts avec un clin d'œil distinct vers l'avenir, Newark est un endroit où de grandes choses se produisent - et cela se manifeste dans un sentiment tangible de fierté communautaire.",
    link: "https://explorelc.org/guide/newark"
  },
  {
    id: 2,
    img: granville,
    name: "Granville, Ohio",
    boldtext: "New England charm with Midwestern flair.",
    text: "Home to the acclaimed Denison University and a postcard-worthy Main Street (also known as Broadway), Granville is the ideal place to experience marvels of history, art, education and nature within a half-mile radius. Join the locals on a hot summer evening, sampling the newest flavor from Whit’s Frozen Custard as you stroll past boutique shops and restaurants; stop into the picturesque Granville Inn for a farm-to-table meal; take a minute to marvel at the stately Bryn Du Mansion before the band tunes up for its annual Concert on the Green summer series. Also, don’t forget your bike: From here, you can easily access the T.J. Evans bike path and head west toward Johnstown or east toward Newark.",
    boldtext_es: "Encanto de Nueva Inglaterra con un toque del medio oeste.",
    text_es: "Hogar de la aclamada Universidad de Denison y una calle principal digna de una postal (también conocida como Broadway), Granville es el lugar ideal para experimentar maravillas de la historia, el arte, la educación y la naturaleza dentro de un radio de media milla. Únase a los lugareños en una calurosa tarde de verano, probando el sabor más nuevo de las natillas congeladas de Whit mientras pasea por boutiques y restaurantes; detente en el pintoresco Granville Inn para una comida de la granja a la mesa; tómese un minuto para maravillarse con la majestuosa Bryn Du Mansion antes de que la banda se sintonice para su serie anual de verano Concierto en el verde. Además, no olvides tu bicicleta: desde aquí, puedes acceder fácilmente al T.J. Camino para bicicletas Evans y dirígete hacia el oeste hacia Johnstown o hacia el este hacia Newark.",
    boldtext_de: "New England Charme mit Midwestern Flair.",
    text_de: "Granville beherbergt die renommierte Denison University und eine postkartenwürdige Hauptstraße (auch als Broadway bekannt) und ist der ideale Ort, um in einem Umkreis von 800 m Wunder der Geschichte, Kunst, Bildung und Natur zu erleben. Begleiten Sie die Einheimischen an einem heißen Sommerabend und probieren Sie den neuesten Geschmack von Whit's Frozen Custard, während Sie an Boutiquen und Restaurants vorbei schlendern. Besuchen Sie das malerische Granville Inn, um eine Mahlzeit vom Bauernhof bis zum Tisch zu genießen. Nehmen Sie sich eine Minute Zeit, um das stattliche Bryn Du Mansion zu bestaunen, bevor sich die Band auf ihre jährliche Concert on the Green-Sommerserie einstellt. Vergessen Sie auch nicht Ihr Fahrrad: Von hier aus können Sie bequem auf den T.J. Evans Radweg und fahren Sie nach Westen in Richtung Johnstown oder nach Osten in Richtung Newark.",
    boldtext_fr: "Charme de la Nouvelle-Angleterre avec une touche Midwestern.",
    text_fr: "Abritant la célèbre université Denison et une rue principale digne d'une carte postale (également connue sous le nom de Broadway), Granville est l'endroit idéal pour découvrir des merveilles d'histoire, d'art, d'éducation et de nature dans un rayon d'un demi-mile. Rejoignez les locaux lors d'une chaude soirée d'été, en dégustant la toute nouvelle saveur de Whit's Frozen Custard en vous promenant dans les boutiques et restaurants; arrêtez-vous dans le pittoresque Granville Inn pour un repas de la ferme à la table; prenez une minute pour vous émerveiller devant le majestueux Bryn Du Mansion avant que le groupe ne se prépare pour sa série annuelle Concert on the Green. N'oubliez pas non plus votre vélo: à partir d'ici, vous pouvez facilement accéder au T.J. Piste cyclable Evans et dirigez-vous vers l'ouest en direction de Johnstown ou vers l'est en direction de Newark.",
    link: "https://explorelc.org/guide/granville"
  },
  {
    id: 3,
    img: heath,
    name: "Heath, Ohio",
    boldtext: "Your one-stop destination for shopping, dining and recreation, Heath is a perfect blend of commerce and community.",
    text: "While it boasts extensive retail options--from home improvement stores to restaurants to the Indian Mound Mall--Heath is a beacon of economic diversity. Consider the historic Davis-Shai House, an 1861 Gothic Revival home-turned-cultural center, which every year draws large crowds to its elegant Victorian Christmas. Recreational opportunities abound thanks to a network of bike paths and an impressive water park. Heath is also home to the Heath-Newark-Licking County Port Authority, where the 350-acre campus of the Central Ohio Aerospace and Technology Center is located.",
    boldtext_es: ,
    text_es: ,
    boldtext_de: ,
    text_de: ,
    boldtext_fr: ,
    text_fr: ,
    link: "https://explorelc.org/guide/heath"
  },
  {
    id: 4,
    img: utica,
    name: "Utica, Ohio",
    boldtext: "With equal parts quaintness and country, the village of Utica is a hidden gem waiting to be discovered.",
    text: "Best known as the home of Velvet Ice Cream--whose annual Utica Sertoma Ice Cream festival at Ye Olde Mill, its idyllic headquarters along Ohio 13, draws attendees from across the state--this northern Licking County hamlet is also the site of one-of-a-kind shops such as Farmers Daughters on Main, where you can pick up the latest in farmhouse decor or participate in a crafting class.  As weather permits, stop by one of several orchards and fruit farms to taste the bounty of the local harvest--or better yet, pick it yourself. Craving comfort food? Watt’s Family Restaurant has ample helpings of meatloaf and fresh-baked pies calling your name.",
    boldtext_es: ,
    text_es: ,
    boldtext_de: ,
    text_de: ,
    boldtext_fr: ,
    text_fr: ,
    link: "https://explorelc.org/guide/newark-85mxm"
  },
  {
    id: 5,
    img: johnstown,
    name: "Johnstown, Ohio",
    boldtext: "Look no further than Johnstown for evidence that central Ohio’s rolling fields are more than corn and soybeans",
    text: "Equestrian centers, vineyards and golf courses are just a few of the ways Johnstown is sharing its wide-open space. Stop downtown to peruse antique and artisan shops and sample a local microbrew before snapping a few photos of the Johnstown Opera House, one of only five in the state. If you happen to plan your visit with Swapper’s Day, the village’s popular long-standing flea market, you’re sure to go home with a gem or two. Johnstown is also the western trailhead for the T.J. Evans bike trails: Hop on here to stroll past the ancient site where mastodon bones were found, and it’s a scenic 15-mile ride to Newark.",
    boldtext_es: ,
    text_es: ,
    boldtext_de: ,
    text_de: ,
    boldtext_fr: ,
    text_fr: ,
    link: "https://explorelc.org/guide/johnstown"
  },
  {
    id: 6,
    img: hebron,
    name: "Hebron, Ohio",
    boldtext: "A burgeoning manufacturing sector combined with strong roots make Hebron a community with deep local pride.",
    text: "Situated along the Historic National Road, Hebron is home to National Trail Raceway, whose NHRA-sanctioned quarter-mile track draws scores of drag-racing fans each season. Bargain hunters should be sure to cruise through the weekend after Memorial Day for the Historic National Road Yard Sale, held on U.S. 40 from Illinois to Maryland. Locals and visitors alike can’t make the trek to downtown Hebron without sharing a famous, mouthwatering stromboli from Clay’s Cafe. In the fall, city-dwellers flock to Pigeon Roost Farm, where pumpkins, corn mazes, hayrides and old-fashioned fun abound.",
    boldtext_es: ,
    text_es: ,
    boldtext_de: ,
    text_de: ,
    boldtext_fr: ,
    text_fr: ,
    link: "https://explorelc.org/guide/hebron"
  },
  {
    id: 7,
    img: buckeyelake,
    name: "Buckeye Lake, Ohio",
    boldtext: "Everything you could ask for in a lakeside escape, minus the long drive.",
    text: "Whether you’re a boater looking for the best view of the Fourth of July fireworks, a craft beer connoisseur hankering for the latest offerings at Buckeye Lake Brewery or seeking out the perfect date night (watching the sun set over the water as you toast to the good life, of course), this southern Licking County haven is the getaway you’ve been searching for. Recent revitalization efforts have transformed the former “Playground of Ohio” back into a hotspot: One where families can enjoy a picnic lunch on a warm summer day, nature lovers can marvel at the one-of-a-kind Cranberry Bog and foodies can sample the best cuisine the lake has to offer. No boat? No problem. The four-mile Buckeye Lake Dam offers a perfect opportunity for a scenic stroll, jog or bike ride--no life jacket required.",
    boldtext_es: ,
    text_es: ,
    boldtext_de: ,
    text_de: ,
    boldtext_fr: ,
    text_fr: ,
    link: "https://explorelc.org/guide/buckeye-lake"
  },
  {
    id: 8,
    img: hartford,
    name: "Hartford, Ohio",
    boldtext: "Perhaps best known for “The Biggest Little Fair in the World,” Hartford is a country escape just a jaunt away from the city.",
    text: "One evening at the fair is all it takes to experience a little bit of everything Licking County has to offer: Camaraderie, home cooking and some friendly competition. Any other time of year, hop onto the country road and prepare to breathe in the open air as you take in panoramic views of the simple life: Vast sky, farmers’ fields and maybe a cow or three. Named after the town of Hartford, Connecticut, this village boasts tight-knit eastern roots situated under the boundless central Ohio sky.",
    boldtext_es: ,
    text_es: ,
    boldtext_de: ,
    text_de: ,
    boldtext_fr: ,
    text_fr: ,
    link: "https://explorelc.org/guide/hartford"
  },
  {
    id: 9,
    img: pataskala,
    name: "Pataskala, Ohio",
    boldtext: "Drive 20 miles east of Columbus and you’ll have no trouble catching glimpses of small-town life in Pataskala.",
    text: "The festive Pataskala Street Fair, for example, which faithfully draws a crowd each summer for carnival-style food, music, entertainment and fun in support of the local fire department. Or the nostalgic Nutcracker Restaurant, whose ‘50s diner-style decor and homestyle cooking have been winning over picky eaters for decades. Golfers will be pleased to know Pataskala boasts four places to hit the links, while history buffs should add the stately Sterling Theater and Mead-Needham Museum to their “must-see” lists. No matter your exploration preferences, Pataskala has something for you to discover.",
    boldtext_es: ,
    text_es: ,
    boldtext_de: ,
    text_de: ,
    boldtext_fr: ,
    text_fr: ,
    link: "https://explorelc.org/guide/pataskala"
  },
];

export { TownsData };
