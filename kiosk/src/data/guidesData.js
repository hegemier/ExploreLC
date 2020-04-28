import {
    EnjoyingWhatsAroundYou, CelebratingLife, BeverageTrail, PathFinderRoutes, GoodTimesRolling, SeeingThroughLens, HistoricSites, VenuesLickingCounty
} from '../assets/image';

import { GuidesReader } from '../assets/audio';

const GuidesData = [
    {
        id : 1,
        title: {
            en: "Enjoying What's Around you",
            gr: "Genießen, was um dich herum ist",
            fr: "Profiter de ce qui vous entoure",
            sp: "Disfrutando lo que te rodea"
        },
        image: EnjoyingWhatsAroundYou,
        url: 'https://explorelc.org/guide/enjoying-whats-around-you'
    },
    {
        id : 2,
        title: {
            en: "Celebrating Life",
            gr: "Das Leben feiern",
            fr: "Célébrer la vie",
            sp: "Celebrando la vida"
        },
        image: CelebratingLife,
        url: 'https://explorelc.org/guide/celebrating-life'
    },
    {
        id : 3,
        title: {
            en: "Beverage Trail",
            gr: "Getränkespur",
            fr: "Sentier des boissons",
            sp: "Camino de bebidas"
        },
        image: BeverageTrail,
        url: 'https://explorelc.org/guide/beverage-trail'
    },
    {
        id : 4,
        title: {
            en: "Pathfinder Routes",
            gr: "Pathfinder-Routen",
            fr: "Itinéraires Pathfinder",
            sp: "Rutas Pathfinder"
        },
        image: EnjoyingWhatsAroundYou,
        url: 'https://explorelc.org/pathfinder'
    },

    {
        id : 5,
        title: {
          en: "The Good Times Keep Rolling",
          fr: "Les bons moments continuent de rouler",
          gr: "Die guten Zeiten rollen weiter",
          sp: "Los buenos tiempos siguen rodando"

        },
        image: GoodTimesRolling,
        url: 'https://explorelc.org/guide/the-good-times-keep-rolling'
    },
    {
        id : 6,
        title: {
          en: "Seeing Through a New Lens",
          sp: "Ver a través de una nueva lente",
          fr: "Voir à travers une nouvelle lentille",
          gr: "Durch eine neue Linse sehen"
        },
        image: SeeingThroughLens,
        url: 'https://explorelc.org/guide/seeing-through-a-new-lens'
    },
    {
        id : 7,
        title: {
          en: "Historic Sites",
          gr: "Historische Stätten",
          fr: "Sites historiques",
          sp: "Sitios históricos"
        },
        image: HistoricSites,
        url: 'https://explorelc.org/guide/historic-sites'
    },
    {
        id : 8,
        title: {
          en: "Venues in Licking County",
          sp: "Lugares en el condado de Licking",
          gr: "Veranstaltungsorte in Licking County",
          fr: "Lieux à Licking County"
        },
        image: VenuesLickingCounty,
        url: 'https://explorelc.org/guide/venues'
    }

];

export { GuidesData, GuidesReader };
