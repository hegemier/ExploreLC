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
            const { en, kr, jp, gr } = title;

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
                                (lang === 'kr')?kr:
                                (lang === 'jp')?jp:gr
                            }
                        </h5>
                        <p className="card-text">
                            Enjoy
                        </p>
                        <Qrmodal link={url}/>
                    </div>
                </div>
            );
        });
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
                <div className="displayFlex LRPadding10">
                    <button type="button" class={
                        (lang === 'en')?"btn btn-dark":"btn btn-light"}>En</button>
                    <button type="button" class={
                        (lang === 'kr')?"btn btn-dark":"btn btn-light"}>Kr</button>
                    <button type="button" class={
                        (lang === 'jp')?"btn btn-dark":"btn btn-light"}>Jp</button>
                    <button type="button" class={
                        (lang === 'gr')?"btn btn-dark":"btn btn-light"}>Gr</button>
                </div>
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
