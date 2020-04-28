import Towns_en from './towns_en_audio.mp3';
import Towns_fr from './towns_fr_audio.mp3';
import Towns_de from './towns_de_audio.mp3';
import Towns_es from './towns_es_audio.mp3';

const TownsReader = {
    en: new Audio(Towns_en),
    fr: new Audio(Towns_fr),
    de: new Audio(Towns_de),
    es: new Audio(Towns_es)
};

export { TownsReader };
