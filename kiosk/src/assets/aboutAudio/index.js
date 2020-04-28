import about_en from './aboutenaudio.mp3';
import about_fr from './aboutfraudio.mp3';
import about_de from './aboutdeaudio.mp3';
import about_es from './aboutesaudio.mp3';

const AboutReader = {
    en: new Audio(about_en),
    fr: new Audio(about_fr),
    de: new Audio(about_de),
    es: new Audio(about_es)
};

export { AboutReader };
