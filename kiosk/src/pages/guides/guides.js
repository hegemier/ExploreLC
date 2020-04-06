import React, { useState } from 'react';
import { NavBar, Qrmodal } from '../../components/';
import { GuidesData } from '../../data';

const Guides = (props)=>{
    const {
        onHome, onGuides, onTowns,
        onEvents, onDirectory, onAbout
    } = props;
    const [lang, setLang] = useState('en');

    const renderGuidesCards = ()=>{
        return GuidesData.map(each=>{
            const { id, title, image, url } = each;
            const { en, gr, fr,sp } = title;

            return (
                <div key={id} className="card floatL">
                    <img
                        className="card-img-top fixedDemension"
                        src={image}
                        alt={title}/>
                    <div className="card-body">
                        <h5 className="card-title">
                            {
                                (lang === 'en')?en:
                                (lang === 'gr')?gr:
                                (lang === 'fr')?fr:sp
                            }
                        </h5>
                        <p className="card-text">
                            
                        </p>
                        <Qrmodal link={url}/>
                    </div>
                </div>
            );
        });
    };

    const toggleLang = ()=>{
        return (
            <div className="displayFlex LRPadding10">
                <button
                    type="button"
                    onClick={()=>setLang('en')}
                    className={(lang === 'en')?"btn btn-dark LRPadding10":"btn btn-light LRPadding10"}>
                    {(lang === 'en')?'English':(lang === 'gr')?'Englisch':(lang === 'fr')?'Anglais':'Ingles'}
                </button>
                <button
                    type="button"
                    onClick={()=>setLang('gr')}
                    className={(lang === 'gr')?"btn btn-dark LRPadding10":"btn btn-light LRPadding10"}>
                    {(lang === 'en')?'German':(lang === 'gr')?'Deutsch':(lang === 'fr')?'Allemande':'Alemán'}
                </button>
                <button
                    type="button"
                    onClick={()=>setLang('fr')}
                    className={(lang === 'fr')?"btn btn-dark LRPadding10":"btn btn-light LRPadding10"}>
                    {(lang === 'en')?'French':(lang === 'gr')?'Französisch':(lang === 'fr')?'Français':'Francés'}
                </button>
                <button
                    type="button"
                    onClick={()=>setLang('sp')}
                    className={(lang === 'sp')?"btn btn-dark LRPadding10":"btn btn-light LRPadding10"}>
                    {(lang === 'en')?'Spanish':(lang === 'gr')?'Spanisch':(lang === 'fr')?'Espagnol':'Español'}
                </button>
            </div>
        );
    };

    return (
        <div className="displayBlock">
            <section id="guideBanner">
                <NavBar
                    onHome={onHome}
                    onGuides={onGuides}
                    onTowns={onTowns}
                    onEvents={onEvents}
                    onDirectory={onDirectory}
                    onAbout={onAbout}
                />
            </section>

            <section className="displayBlock">
                {toggleLang()}
                <div>
                    <div className="clearB"/>
                        {renderGuidesCards()}
                    <div className="clearB"/>
                </div>
                {/* <div className="width60perc">
                    
                </div>
                <div className="width40perc">
                    Ads to be here
                </div> */}
            </section>


        </div>
    );
};

export { Guides };
