
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

const list = {
  en: {
    1: "Village Flower Basket is a boutique flower shop located in the rural village of Granville, OH. Village Flower Basket is known for their personal approach to designing, and offering a mindful and individual experience with flowers.",
    2: "Bouncin Bean Coffee & tea coffee is a local cafeteria in downtown Croton, Ohio, serving coffee, tea and food to key customers. To make a menu of the coolest and most visible drinks, you can find your favorite drinks here, including espresso, latte, smoothie, and even tea. Velvet Ice cream cake and so on. We can meet the biggest market in the world in Hartford",
    3: "Old School Bakery Cafe serves gourmet coffee made with locally roasted, small-batch beans. Old School opened in September of 2019 and knew from the start that supporting other local businesses was a top priority. They shopped around and found the best local bean, and customers agree.\n" +
    "Old School Bakery Cafe is proud to be a part of the Johnstown community. They sell locally made goods and host crafts and book clubs to engage with the community.",
    4: "North Shore Coffee is a locally owned, locally operated coffee shop, proudly serving organic, locally roasted One Line Coffee. Each and every bean is Fair Trade Certified and comes directly from farm, to roasters, to your cup! North Shore Coffee’s goal is to serve quality coffee to the Buckeye Lake Region. Being a lake community creates such a fun and unique environment, in efforts to promote a clean Buckeye Lake we also use biodegradable, compostable and eco-friendly products.",
    5: "Mouthwatering pizza done right is what you can expect with every trip you make to Plaza Pizza. When you have an insatiable hankering for the tastiest, most-delectable pizza around, plan a trip today to our family-owned and -operated pizza restaurant in Newark, OH.",
    6: "Black Run Farm is a 280+ acre farm that features three ceremony sites and a reception hall. Black Run is also home to the historic Heisey Lodge that was first built in 1880. The surrounding woods and rustic charm of the farm offer a beautiful and unique backdrop to your special day!",
    7: "Cornell School is a classic example of how public education functioned in Rural America in the late 20th century. This one-room schoolhouse was built in 1886 and served students until 1923. The structure was donated to the Friends of Cornell School by Tom and Gloria Miller of Alexandria, Ohio. It was moved from their property to its present location in May of 1991. Cornell School has been operating as a living history program for area schools since 1996.",
    8: "The Denison University Biological Reserve is a 350 acre site used for student education and research. Hiking trails are open to the public and are suitable for walking, running and mountain biking. The reserve is locate on the east side of SR 661, on the north end of the Village of Granville. Trail Map. Video Tour.\n" +
    "\n" +
    "The purpose of the Reserve is to enhance the education of students in Biology and the Environmental Sciences through their courses, independent research and casual visitation to the Reserve. This is accomplished by providing opportunities for field studies of native Ohio flora and fauna as well as discrete biological communities that are maintained in as intact a condition as is possible given the land use history of the Reserve and the resources of DU. Consequently, one of the general goals of the Reserve is to maximize the number of representative habitats and species that the area can support.",
    9: "Denison University is a leading liberal arts college where faculty and students collaborate in research, civic engagement, & cultivation of independent thinking. As a leader among the nation's top residential liberal arts colleges, Denison has earned a reputation for academic rigor that is rivaled only by its commitment to preparing students for a lifetime of personal, professional and civic success.",
    10: "Feel welcome the moment you arrive at DoubleTree by Hilton Newark, Ohio with a freshly baked chocolate chip cookie on arrival. Make yourself at home at this hotel in one of our 117 inviting guest rooms equipped with complimentary WiFi, a 37-inch TV, and a refrigerator. Upgrade to a spacious suite with a separate living area – ideal for families and extended stays. Swim in the heated indoor pool, work out in the 24-hour fitness center, or simply relax beside the welcoming patio fireplace.\n" +
    "\n" +
    "Also at DoubleTree by Hilton Newark, they understand how critical meetings and events are to the success of an organization.  Their goal is to provide you with both the most professional and engaging teams as well as convenient planning resources to make your next experience a success. Whether reserving a boardroom or the grand ballroom, you’re sure to find the perfect meeting space at this hotel.",
    11: "The Town Hall was dedicated in 1885 on the public square in Johnstown. On the second floor of the building is a fine Opera House, one of the only five remaining in Ohio.",
    12: "NEWORK Space is an affordable coworking community of freelancers, entrepreneurs, small businesses, commuters, and academics. We have fast Wifi, printing and all the amenities you need to have a productive workday. We accommodate small and large meetings and events. Located on the downtown Newark Square in a historic, beautifully renovated building, our three-story, 6,000 square foot office space provides a variety of offices, seating areas, and private meeting rooms. We accommodate small and large meetings and events.",
    13: "The Octagon Earthworks consist of a circular earthen enclosure connected to an octagonal enclosure by a short segment of parallel walls. The Octagon Earthworks formed one part of the Newark Earthworks, the largest set of geometric earthworks built by the Hopewell culture (100 B.C. to 500 A.D.) of pre-contact American Indian people. The circle encloses about 20 acres and the octagon about 50 acres.",
    14: "The Ohio State University at Newark provides access to the university by extending Ohio State courses, programs, research, and service to many Ohio communities.",
    15: "Beautifully anchoring the north side of the historic downtown Newark Square, The Midland Theatre an 1,200-seat theatre built in 1928.  After extensive renovations, the Theatre is now a state of the art performance venue and concert hall.  The Midland also can be the host for your next function.  With private bookings available, the theatre can take an everyday meeting and turn it into a one of a kind event.",
    16: "Since 1970, Velvet’s Ye Olde Mill has been a destination serving up delicious ice cream, food and memories. Join them in Utica to spend a day surrounded by ice cream!  Each year, more than 150,000 come to Licking County Ohio to be at one with nature and get their fill of the freshest ice cream they’ve ever tasted at Ye Olde Mill. With 20 picturesque acres of rolling hills and thick forests, Ye Olde Mill provides the perfect setting for family fun, reunions, weddings and more.",
  },
  fr: {
    1: "The country Flower basket is a boutique, in Granville village, Ohio.Le panier de fleurs du village est connu pour son mode de conception unique et offre une expérience de fleurs à l 'intention et personnalisée.",
    2: "Bouncin 'Bean Coffee & Tea café est une cafétéria locale au centre de Croton, Ohio, qui fournit du café, du thé et de la nourriture à de grands clients.Bouncin 'Bean café s' est engagé à utiliser les aliments les plus frais et de qualité, y compris le broyage quotidien de haricots frais de qualité, pour produire un menu contenant les boissons les plus rafraîchissantes et les plus visibles.Vous trouverez ici tout ce que vous aimez le plus, y compris le café concentré, le latte, le sable glacé et même le thé de qualité.Mais ce n 'est pas tout.Boucin 'Bean offre des sandwichs pour le petit déjeuner, des sandwichs pour le déjeuner, des glaces en velours, des gâteaux, etc.On peut se retrouver à Hartford, le plus grand marché du monde.",
    3: "Il s' agit de la boulangerie de l 'ancienne école, du café gastronomique de svette, du locagorstein, de kleingborn. Le café de l' ancienne école, entre septembre 2019 et ustavon, entre la première et la première ville, entre la première et la première et entre la première et la deuxième.Je m'appelle Stoltz, je suis Johanston, vous êtes le propriétaire des Warren and Buch clubs, et je suis jamaïne.",
    4: "North Shore coffee est une cafétéria locale qui offre fièrement une ligne de café organique et cuisiné localement.Chaque haricot est certifié par un commerce équitable, directement de la ferme, grille - pain, votre tasse!L'objectif du café de la côte nord est de fournir un café de qualité dans la région des sept lacs feuilles.En tant que communauté lacustre, nous avons créé un environnement aussi intéressant et unique en son genre, et nous utilisons également des produits biodégradables, composibles et respectueux de l'environnement pour promouvoir un lac de sept feuilles propre.",
    5: "Chaque fois que vous allez à la pizza de la place, vous pouvez vous attendre à ce que la pizza soit parfaite.Quand vous aurez envie de la pizza la plus délicieuse et la plus délicieuse, il est prévu d 'aller aujourd' hui à notre restaurant à Newark, dans l 'Ohio.",
    6: "Die Black Run Farm ist ein 280+-Hektar-Bauernhof mit drei Zeremonien und einer Empfangshalle.In Black Run befindet sich auch die historische Heisey Lodge, die in 1880 gebaut wurde.Die umliegenden Wälder und der rustikale Charme der Farm bieten eine schöne und einzigartige Kulisse für Ihren besonderen Tag!",
    7: "L'école Cornell est un exemple classique d'enseignement public dans les zones rurales des États - Unis à la fin du XXe siècle.Cette école, qui n'a qu'une seule salle de classe, a été construite en 1886 et a servi les élèves jusqu'en 1923.Ce bâtiment a été donné par Tom et Gloria Miller, d 'Alexandrie, Ohio, à des amis de l' Université Cornell.En mai 1991, elle a été transférée de ses biens à sa position actuelle.L 'Université Cornell est un projet d' histoire vivante des écoles régionales depuis 1996.",
    8: "La réserve biologique de l'Université Denise couvre une superficie de 350 hectares pour l'éducation et la recherche des étudiants.Les sentiers à pied sont ouverts au public et adaptés à la marche, à la course et au vélo de montagne.La zone protégée est située à l'est du SR 661, à l'extrémité nord du village de Granville.Feuille de route.Une tournée vidéo.L'objectif des zones protégées est de renforcer l'enseignement des sciences biologiques et environnementales à l'intention des élèves grâce à des programmes d'études, à des études indépendantes et à des visites irrégulières dans les zones protégées.Cela s'est fait en offrant la possibilité de mener des recherches sur le terrain sur la faune et la flore locales de l'Ohio et sur les communautés biologiques séparées, qui sont restées aussi complètes que possible compte tenu de l'histoire de l'utilisation des terres dans les zones protégées et des ressources du Dupont.L'un des objectifs généraux des zones protégées est donc de maximiser le nombre d'habitats et d'espèces représentatifs que la région peut soutenir.",
    9: "L'Université Denise est une école de lettres de premier plan, où les enseignants et les étudiants coopèrent dans les domaines de la recherche, de la participation civique et de la formation de réflexion indépendante.En tant que chef de file dans les pensionnats littéraires des États - Unis, Denise a acquis une réputation académique rigoureuse qui ne peut être combattue qu'en s'employant à préparer les élèves au succès de leur vie personnelle, professionnelle et civique.",
    10: "A votre arrivée à l 'hôtel dubletree, Hilton Newark, Ohio, avec un biscuit au chocolat qui vient d' être cuisiné, vous êtes les bienvenus.Données à titre indicatif uniquement, elles ne sont pas intégrées dans les notes d 'hôtels Ctrip.La promotion à une suite spacieuse, dotée d 'un espace de vie indépendant, est une option idéale pour la famille et le logement à long terme.Nager à l 'intérieur d' une piscine thermostatique, faire de l 'exercice au centre de gym 24 heures sur 24 ou se détendre à côté d' une cheminée de terrasse de bienvenue.Toujours à l'hôtel dubletree, Hilton Newark, ils ont compris l'importance des réunions et manifestations pour le succès de l'Organisation.Leur objectif est de vous fournir l 'équipe la plus professionnelle et la plus attrayante et de faciliter la planification des ressources pour que votre prochaine expérience soit couronnée de succès.Données à titre indicatif uniquement, elles ne sont pas intégrées dans les notes d 'hôtels Ctrip.",
    11: "L'hôtel de ville s'est tenu sur la place publique de Johnston en 1885.Le deuxième étage est un bel opéra, l 'un des cinq derniers Opéras de l' Ohio.",
    12: "Le Nework Space est une communauté de coopératives d'un coût abordable composée de travailleurs indépendants, d'entrepreneurs, de petites entreprises, de travailleurs et d'universitaires.Nous avons un réseau sans fil rapide, l 'impression et toutes les facilités, vous avez besoin d' une journée de travail productive.Nous avons accueilli des conférences et des manifestations.Nos trois étages, d'une superficie de 6 000 pieds carrés, sont situés dans un immeuble ancien et bien aménagé de Newark Square, dans le Centre de la Ville, qui offre des bureaux, des sièges et des salles de réunion privées.Nous avons accueilli des conférences et des manifestations.",
    13: "Les travaux de terrassement en octogonale comprennent un mur en sol circulaire relié au mur en octogonal par un petit tronçon de mur parallèle.Le projet de terrassement octogonal fait partie du projet de terrassement de Newark, qui est le plus vaste ensemble géométrique de terrains construits par la culture hopwell (100 à 500 av. J. - C.Ce cercle s' étend sur environ 20 hectares, en octogonal sur environ 50 hectares.",
    14: "L'Université de l'Ohio à Newark offre l'accès à l'Université en élargissant ses programmes, projets, recherches et services à de nombreuses communautés de l'Ohio.",
    15: "La belle ancre est fixée au nord de la place de Newark, dans le centre historique de la Ville, et le théâtre Midland a été construit en 1928 avec 1 200 places.Après une grande rénovation, le théâtre est maintenant un théâtre et une salle de musique de pointe.Midland peut aussi être l 'hôte de votre prochaine fonction.Avec une réservation privée, le théâtre peut se réunir une fois par jour pour en faire un événement unique.",
    16: "Depuis 1970, yeolde Mill, en velours, est la destination de la glace, de la nourriture et du souvenir.Joignez - vous à eux et passez la journée à yotica!Chaque année, plus de 150 000 personnes viennent dans le comté de like, dans l 'Ohio, pour s' intégrer à la nature et déguster la glace la plus fraîche qu' ils aient goûtée au Moulin de yerod.Avec 20 hectares de montagnes et de forêts denses, y Olde Mill offre un environnement parfait pour les loisirs, le regroupement, les mariages, etc.",
  },
  de: {
    1: "Village Flower Basket ist ein Boutique-Blumenladen im ländlichen Dorf Granville, OH.Village Flower Basket ist bekannt für ihre persönliche Herangehensweise an die Gestaltung und bietet eine aufmerksame und individuelle Erfahrung mit Blumen.",
    2: "Bouncin Bean Coffee ist eine lokale Cafeteria in der Innenstadt von Croton, Ohio und serviert Kaffee, Tee und Essen für wichtige Kunden.Um ein Menü der coolsten und sichtbarsten Getränke zu machen, finden Sie hier Ihre Lieblingsgetränke, einschließlich Espresso, Latte, Smoothie, und sogar Tee.Velvet Eis Kuchen und so weiter.Wir können den größten Markt der Welt in Hartford treffen",
    3: "Das Old School Bakery Cafe serviert Gourmet-Kaffee mit lokal gerösteten, kleinen Bohnen.Die Old School eröffnete im September des 2019 und wusste von Anfang an, dass die Unterstützung anderer lokaler Unternehmen eine oberste Priorität sei.Sie kauften herum und fanden die beste lokale Bohnen, und die Kunden stimmen zu.Das Old School Bakery Cafe ist stolz, Teil der Johnstown Community zu sein.Sie verkaufen lokal hergestellte Waren und Host-Handwerk und Buchclubs, um sich mit der Gemeinde zu beschäftigen.",
    4: "North Shore Coffee ist ein lokal geführter, lokal betriebener Café, der stolz Bio-Kaffee, lokal geröstet One Line Coffee, serviert.Jede Bohne ist Fair Trade Certified und kommt direkt von der Farm, zu Röster, zu Ihrem Becher!Das Ziel von North Shore Coffee ist es, der Region Buckeye Lake Qualitätskaffee zu servieren.Als Seegemeinde schaffen wir eine so lustige und einzigartige Umgebung, um einen sauberen Buckeye Lake zu fördern, verwenden wir auch biologisch abbaubare, kompostierbare und umweltfreundliche Produkte.",
    5: "Die leckere Pizza richtig gemacht ist, was Sie mit jeder Reise zu Plaza Pizza erwarten.Wenn Sie ein unersättliches Verlangen nach der schmackhaftesten, köstlichsten Pizza haben, planen Sie heute einen Ausflug in unser familiengeführtes und betriebenes Pizza-Restaurant in Newark, OH.",
    6: "Die Black Run Farm ist ein 280+-Hektar-Bauernhof mit drei Zeremonien und einer Empfangshalle.In Black Run befindet sich auch die historische Heisey Lodge, die in 1880 gebaut wurde.Die umliegenden Wälder und der rustikale Charme der Farm bieten eine schöne und einzigartige Kulisse für Ihren besonderen Tag!",
    7: "Cornell School ist ein klassisches Beispiel dafür, wie die öffentliche Bildung Ende des zwanzigsten Jahrhunderts in Rural America funktionierte.Diese Einzimmerschule wurde in 1886 gebaut und diente Schülern bis 19203.Die Struktur wurde der Friends of Cornell School von Tom und Gloria Miller aus Alexandria, Ohio gespendet.Sie wurde im Mai 1991 von ihrem Eigentum an ihren heutigen Standort verlegt.Die Cornell School ist seit 1996 ein lebendiges Geschichtsprogramm für die Schulen in der Region.",
    8: "Das Bioreservat der Denison University ist ein 350-Hektar-Standort, der für die Studentenerziehung und -forschung genutzt wird.Die Wanderwege sind öffentlich zugänglich und eignen sich zum Wandern, Laufen und Mountainbiken.Das Reservat befindet sich auf der Ostseite der SR 661, am nördlichen Ende des Dorfes Granville.Karte der Spur.Video Tour.Ziel des Reservats ist es, die Ausbildung von Biologen und Umweltwissenschaften durch ihre Kurse, unabhängige Forschung und gelegentliche Besuche im Reservat zu verbessern.Dies wird durch die Bereitstellung von Möglichkeiten für Feldstudien über einheimische Flora und Fauna in Ohio sowie diskrete biologische Gemeinschaften, die in einem so intakten Zustand wie möglich gehalten werden, angesichts der Bodennutzungsgeschichte des Reservats und der Ressourcen von DU.Daher besteht eines der allgemeinen Ziele der Reserve darin, die Anzahl der repräsentativen Lebensräume und Arten zu maximieren, die das Gebiet unterstützen kann.",
    9: "Die Denison University ist ein führendes Liberal Arts College, in dem Fakultät und Studenten an Forschung, Bürgerbeteiligung und eigenständigem Denken mitwirken.Als führend in den Top-Colleges für liberale Künste hat sich Denison einen Ruf für akademische Strenge verdient, der nur durch sein Engagement, die Schüler auf ein Leben voller persönlicher, beruflicher und staatsbürgerlicher Erfolge vorzubereiten, rivalisiert wird.",
    10: "Fühlen Sie sich willkommen, wenn Sie bei Ihrer Ankunft im DoubleTree by Hilton Newark, Ohio, mit einem frisch gebackenen Schokoladenkekse ankommen.Fühlen Sie sich wie zu Hause in einem unserer 117 einladenden Gästezimmer mit kostenlosem WLAN, einem 37-Zoll-TV und einem Kühlschrank.Upgrade auf eine großzügige Suite mit separatem Wohnbereich (im Folgenden: Kombi-Suite), ideal für Familien und längere Aufenthalte.Schwimmen Sie im beheizten Innenpool, trainieren Sie im 24-Stunden-Fitnesscenter oder entspannen Sie einfach am gemütlichen Patio-Kamin.Auch im DoubleTree by Hilton Newark verstehen sie, wie wichtig Treffen und Veranstaltungen für den Erfolg einer Organisation sind.Ihr Ziel ist es, Ihnen sowohl professionelle und engagierte Teams als auch komfortable Planungsressourcen zur Verfügung zu stellen, um Ihre nächste Erfahrung zu einem Erfolg zu machen.Ganz gleich, ob Sie sich einen Sitzungssaal oder einen großen Ballsaal reservieren, Sie sind sicher, dass Sie den perfekten Tagungsraum in diesem Hotel finden.",
    11: "Das Rathaus wurde in 1885 auf dem öffentlichen Platz in Johnstown gewidmet.Auf der zweiten Etage des Gebäudes befindet sich ein schönes Opernhaus, eines der wenigen fünf verbleibenden in Ohio.",
    12: "NEWORK Space ist eine erschwingliche Coworking Community von Freiberuflern, Unternehmern, kleinen Unternehmen, Pendlern und Akademikern.Wir haben schnelles Wifi, Drucken und alle Annehmlichkeiten, die Sie brauchen, um einen produktiven Arbeitstag zu haben.Wir beherbergen kleine und große Treffen und Veranstaltungen.Am Newark Square in einem historischen, wunderschön renovierten Gebäude gelegen, bietet unser dreistöckiger, 6,000 quadratischer Büroraum eine Vielzahl von Büros, Sitzplätzen und privaten Tagungsräumen.Wir beherbergen kleine und große Treffen und Veranstaltungen.",
    13: "Die Octagon Earthworks bestehen aus einem kreisförmigen Erdengehäuse, das mit einem achteckigen Gehäuse durch ein kurzes Segment von parallelen Wänden verbunden ist.Die Octagon Earthworks bildeten einen Teil der Newark Earthworks, dem größten Satz geometrischer Erdwerke, die von der Hopewell-Kultur (100 B.C. bis 500 A.D.) des amerikanischen Volkes gebaut wurden.Der Kreis umschließt etwa zwanzig Hektar und das Oktagon etwa 50-Hektar.",
    14: "Die Ohio State University in Newark bietet Zugang zur Universität, indem sie die Ohio State Kurse, Programme, Recherchen und Dienstleistungen für viele Ohio Communities erweitert.",
    15: "Das Midland Theatre ist ein 1,200-Sitztheater, das in den 1920er Jahren gebaut wurde.Nach umfangreichen Renovierungsarbeiten ist das Theater heute ein hochmoderner Veranstaltungsort und Konzertsaal.Die Midland kann auch der Host für Ihre nächste Funktion sein.Mit privaten Buchungen kann das Theater ein alltägliches Treffen abhalten und es in eine einzigartige Veranstaltung verwandeln.",
    16: "Seit 1970.000.000.Jh Olde Mill ist ein Ziel, das leckere Eis, Essen und Erinnerungen serviert.Begleiten Sie sie in Utica, um einen Tag mit Eiscreme zu verbringen!Jedes Jahr kommen mehr als 1500000 in das Licking County Ohio, um sich mit der Natur zu vereinen und sich das frischeste Eis zu gönnen, das sie je in Ye Olde Mill probiert haben.Die Ye Olde Mill bietet mit 20 malerischen Hektar sanfter Hügel und dichten Wäldern die perfekte Kulisse für Familienspaß, Versammlungen, Hochzeiten und vieles mehr.",
  },
  es: {
    1: "La canasta rural es una boutique en Granville, Ohio, conocida por su diseño único, que le ofrece una experiencia de flores personalizada y atenta.",
    2: "Bouncin Bean Coffee es una cafetería local en el Centro de Croton, Ohio, que proporciona café, té y comida a clientes importantes, y para preparar los menús de bebidas más geniales y visibles, por favor encuentre aquí sus bebidas favoritas, incluidos el café condensado, el latte y el hielo.Y té, helado de terciopelo, etc. podríamos encontrar el mercado más grande del mundo en Hartford.",
    3: "Los cafés de panaderías antiguas, que abrieron sus cafés tradicionales en septiembre de 2019, sabían desde el principio que el apoyo de otras empresas locales era una prioridad, y compraron los mejores frijoles locales, y los clientes estuvieron de acuerdo.Se enorgullecen de formar parte de la comunidad de Johnston, que vende productos locales y organiza clubes de artesanía y lectura para tratar con la comunidad.",
    4: "¡North Shore Coffee es una cafetería local que se enorgullece de ofrecer café orgánico, café de primera línea hecho localmente, cada grano de café certificado de comercio justo, directamente de la granja, la panadería y su taza!Como comunidad costera, hemos creado un entorno interesante y singular para promover la limpieza de los lagos de las siete hojas y también hemos utilizado productos biodegradables, orgánicos y ambientalmente inocuos.",
    5: "Si tienes un deseo insaciable de la mejor y más deliciosa pizza, hoy planeas ir a nuestra casa en Newark a dirigir un restaurante de pizza, oh.",
    6: "La granja de carreras negras, con una superficie de más de 280 hectáreas, tiene tres rituales y un salón de recepción, además de la histórica cabaña de hesi, construida en 1880, y el encanto rural de los bosques y las granjas que la rodean ofrece un contexto hermoso y único para sus días especiales.",
    7: "La escuela Cornell, un ejemplo clásico del funcionamiento de la educación pública rural en los Estados Unidos a finales del siglo XX, fue fundada en 1886 para prestar servicios a los estudiantes hasta 1923 y está estructurada por los Amigos de la escuela Cornell de Tom y gloria Miller, de Alejandría.En mayo de 1991 se trasladó de su propiedad a su ubicación actual, y la escuela Cornell ha sido un proyecto histórico vivo para las escuelas de la región desde 1996.",
    8: "La Reserva biológica de la Universidad de Denison abarca 350 hectáreas y se utiliza para la educación y la investigación de los estudiantes; los senderos son públicos y son apropiados para los viajes a pie, las carreras y las bicicletas de montaña.El objetivo de las zonas protegidas es mejorar la formación de biólogos y científicos ambientales mediante sus cursos, investigaciones independientes y visitas ocasionales a las zonas protegidas, lo que se logra ofreciendo la oportunidad de realizar estudios sobre el terreno de la flora y la fauna locales.Habida cuenta de la historia del uso de la tierra en las zonas protegidas y de los recursos de DuPont, el Estado de Ohio y, en la medida de lo posible, las comunidades biológicas separadas, uno de los objetivos generales de las zonas protegidas es aumentar al máximo el número de hábitats representativos y especies que las apoyan.Sí.",
    9: "La Universidad de dennison es una de las principales escuelas de artes y oficios, en las que profesores y estudiantes participan en la investigación, la participación cívica y el pensamiento independiente.Es competitivo preparar a los estudiantes para una vida personal, profesional y cívica satisfactoria.",
    10: 'Cuando llegues al Hotel Doubletree, Hilton Newark, Ohio, con un pastel de chocolate recién hecho, podrás disfrutar del Wi - Fi gratis en una de nuestras 117 habitaciones.Un televisor de 37 pulgadas y un refrigerador, que se elevan a una suite amplia con una zona de vida independiente (en lo sucesivo "Suite modular"), que es la opción ideal para la familia y la residencia permanente, nadan en piscinas térmicas interiores, hacen ejercicio las 24 horas del día en el Centro de gimnasia o se relajan en una cómoda chimenea de patio, o en un hotel de dos árboles en Hilton Newark.Su objetivo es ofrecerle un equipo profesional y leal, así como unos recursos de planificación cómodos, para que su próxima experiencia sea un éxito.Ya sea que reserve una Sala de conferencias o un salón de banquetes grande, encontrará en este hotel la Sala de conferencias más perfecta.',
    11: "En 1885 se construyó el ayuntamiento para la plaza pública de Johnston, y el segundo piso es un hermoso teatro de ópera, uno de los cinco que quedan en Ohio.",
    12: "Newwork Space es una comunidad cooperativa y asequible de trabajadores independientes, empresarios, pequeñas empresas, viajeros y académicos, y tenemos acceso rápido a WiFi, impresión y todos los servicios que necesita.Nuestra Oficina, de 6.000 m2, ofrece una amplia gama de oficinas en un edificio de larga data y bien amueblado en la plaza Newark.Nos ocupamos de los asientos y las Salas de conferencias privadas.",
    13: "El proyecto de ocho ángulos consiste en una casa rodante que está conectada a una casa rodante de ocho ángulos por medio de un pequeño muro paralelo, que forma parte del proyecto de tierras de Newark, el mayor proyecto geométrico de los Estados Unidos, que abarca desde la Cultura Hopewell (100 a 500 a.C.).El círculo tiene unas 20 hectáreas y un octágono de unas 50 hectáreas.",
    14: "La Universidad Estatal de Ohio, con sede en Newark, ofrece acceso a la Universidad a muchas comunidades de Ohio ampliando sus programas, proyectos, investigaciones y servicios.",
    15: "El teatro Midland tiene 1.200 asientos.El teatro, que ha sido objeto de importantes obras de renovación, es ahora un lugar y un salón de música de última generación, y Midland puede actuar como su próximo moderador funcional.",
    16: "Desde 1970, JH olde Mill ha sido un destino de helados deliciosos, comida y recuerdos, y los ha acompañado durante un día de helados en Utica.Todos los años, más de 15.000 personas llegan al condado de Leck, Ohio, para unirse a la naturaleza y disfrutar del helado más fresco que hayan probado en yeodemir, que posee 20 hectáreas de lindas colinas y bosques densos y ofrece un entorno perfecto para la recreación familiar, las fiestas, las bodas, etc.",
  }
}

const townarray = [
  {
    id: 1,
    img: village,
    // name: "Newark, Ohio",
    // text: "Sip a latte on a sun-dappled patio just below a hip loft apartment; spend an afternoon browsing the latest art exhibit at the Denison Art Space; beat the rush for a peck of peaches at the Canal Market District. Rainy day? The Works has you covered with a gamut of hands-on STEM activities for all ages, including the 30-foot, 4K projection SciDome planetarium. A seamless marriage of history, culture and the arts with a distinct nod toward the future, Newark is a place where great things are happening--and it shows in a tangible sense of community pride.",
    link: "HTTPS://WWW.FACEBOOK.COM/VILLAGE-FLOWER-BASKET-117288926750/" //use this to kick users to the phone app, so there needs to be some kind of function here
  },
  {
    id: 2,
    img: bouncin,
    link: "HTTPS://WWW.FACEBOOK.COM/BOUNCINBEAN/"
  },
  {
    id: 3,
    img: oldschool,
    link: "https://explorelc.org/guide/heath"
  },
  {
    id: 4,
    img: north,
    link: "https://m.facebook.com/North-Shore-Coffee-Co"
  },
  {
    id: 5,
    img: plaza,
    link: "HTTPS://WWW.FACEBOOK.COM/PLAZA-PIZZA-129063147189527/"
  },
  {
    id: 6,
    img: black,
    link: "HTTPS://WWW.FACEBOOK.COM/BLACKRUNFARMSEVENTS/"
  },
  {
    id: 7,
    img: cornell,
    link: "HTTPS://WWW.FACEBOOK.COM/CORNELLSCHOOL"
  },
  {
    id: 8,
    img: denbio,
    link: ""
  },
  {
    id: 9,
    img: dension,
    link: "HTTPS://WWW.FACEBOOK.COM/DENISONUNIVERSITY/"
  },
  {
    id: 10,
    img: doubletree,
    link: ""
  },
  {
    id: 11,
    img: johnstown,
    link: ""
  },
  {
    id: 12,
    img: nework,
    link: "HTTPS://WWW.FACEBOOK.COM/NEWORKSPACE/"
  },
  {
    id: 13,
    img: octogon,
    link: ""
  },
  {
    id: 14,
    img: ohio,
    link: "HTTPS://WWW.FACEBOOK.COM/OHIOSTATEUNIVERSITYNEWARK/"
  },
  {
    id: 15,
    img: midland,
    link: "HTTPS://WWW.FACEBOOK.COM/THEMIDLANDTHEATRE/"
  },
  {
    id: 16,
    img: velvet,
    link: "HTTPS://WWW.FACEBOOK.COM/VELVETICECREAM"
  },
]

export const getList = (local) => {
  return townarray.map(item => {
    item.boldtext = list[local][item.id]
    return item
  })
}

export default townarray