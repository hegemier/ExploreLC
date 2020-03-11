import React from 'react';
import { NavBar, ControlBar, Qrmodal } from '../../components/';
import { GuidesData } from '../../data';

const Guides = (props)=>{
    const {
        onHome, onGuides, onTowns,
        onEvents, onDirectory, onAbout
    } = props;

    const renderGuidesCards = ()=>{
        return GuidesData.map(each=>{
            const { id, title, image, url } = each;

            return (
                <div key={each.id} className="card floatL">
                    <img
                        className="card-img-top fixedDemension"
                        src={image}
                        alt={title}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
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

            <section className="displayFlex">
                <div className="width60perc">
                    <div className="clearB"/>
                    {renderGuidesCards()}
                    <div className="clearB"/>
                </div>
                <div className="width40perc">
                    Ads to be here
                </div>
            </section>


        </div>
    );
};

export { Guides };
