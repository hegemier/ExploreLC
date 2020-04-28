import Guides_en from './Guides_en.mp3';
import Guides_fr from './Guides_fr.mp3';
import Guides_gr from './Guides_gr.mp3';
import Guides_sp from './Guides_sp.mp3';

const GuidesReader = {
    en: new Audio(Guides_en),
    fr: new Audio(Guides_fr),
    gr: new Audio(Guides_gr),
    sp: new Audio(Guides_sp)
};

export { GuidesReader };