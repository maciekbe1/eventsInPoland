import React, { useContext, useEffect } from 'react';
import {Link} from "react-router-dom";

import Context from '../../context'

const LatestEvents = () => {
    const context = useContext(Context);
    const checkImage = (path) => {
        try {
            return require(`../../assets/images/${path}.jpg`);
        } catch (err) {
            return require(`../../assets/images/default.jpg`);
        }
    };
    let content = null;
    useEffect(() => {
        
        if (context.state.events.length === 0) {
            content = <h1>Loading...</h1>
        } else {
            // if(context.isAuth) {
            //     content = context.premiumevents.slice(0, 4).map((item, index) => {
            //         return (
            //             <div key={index} className="col-sm-3 col-6">
            //                 <div className="partners-logo">
            //                     <Link to={`/all-events/event/${item.kli_id.value}`}>
            //                         <img alt={""} src={checkImage(item.kli_id.value)} />
            //                     </Link>
            //                 </div>
            //             </div>
            //         )
            //     });
            // } else {
            //     content = context.premiumevents.slice(0, 4).map((item, index) => {
            //         return (
            //             <div key={index} className="col-sm-3 col-6" data-toggle="modal" data-target="#loginModal">
            //                 <div className="partners-logo">
            //                     <Link to={`/all-events/event/${item.kli_id.value}`}>
            //                         <img alt={""} src={checkImage(item.kli_id.value)} />
            //                     </Link>
            //                 </div>
            //             </div>
            //         )
            //     });
            // }
            content = context.state.events.slice(0, 4).map((item, index) => {
                    return (
                        <div key={index} className="col-sm-3 col-6">
                            <div className="partners-logo">
                                <Link to={`/all-events/event/${item.id}`}>
                                    <img alt={item.id} src={checkImage(item.id)} />
                                </Link>
                            </div>
                        </div>
                    )
                });
        }
    }, [])
    
    return (
        <div className="our-partners">
            <div className="container">
                <div className="text-center">
                    <h2>Latest Events</h2>
                </div>
                <div className="row">
                { content }
                </div>
            </div>
        </div>
    );
}

export default LatestEvents