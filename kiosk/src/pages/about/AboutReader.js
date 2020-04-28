import about_en from "../../assets/aboutAudio/about_en.mp3"
import about_es from "../../assets/aboutAudio/about_es.mp3"
import about_de from "../../assets/aboutAudio/about_de.mp3"
import about_fr from "../../assets/aboutAudio/about_fr.mp3"


const AboutReader = {
    en: new Audio(about_en),
    fr: new Audio(about_fr),
    de: new Audio(about_de),
    es: new Audio(about_es)
};

export { AboutReader };
