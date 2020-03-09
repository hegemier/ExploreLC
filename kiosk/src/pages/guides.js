import React from 'react';
import { NavBar, ControlBar } from '../components';
import Qrmodal from '../components/qrmodal';
import { GuidesData } from '../data';

const Guides = ()=>{

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
                <NavBar/>
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

            <ControlBar/>
        </div>
    );
};

export { Guides };