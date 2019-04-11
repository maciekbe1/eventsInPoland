import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import AuthContext from '../context/auth-context'
import GlobalState from '../context/global-context';

function OurPartners() {
    const authContext = useContext(AuthContext);
    const globalState = useContext(GlobalState);

    const checkImage = (path) => {
        try {
            return require(`../../assets/images/${path}.jpg`);
        } catch (err) {
            return require(`../../assets/images/default.jpg`);
        }
    };
    let content = null;
    if (globalState.premiumClinics.length === 0) {
        content = <h1>Loading...</h1>
    } else {
        if(authContext.isAuth) {
            content = globalState.premiumClinics.slice(0, 4).map((item, index) => {
                return (
                    <div key={index} className="col-sm-3 col-6">
                        <div className="partners-logo">
                            <Link to={`/all-clinics/clinic/${item.kli_id.value}`}>
                                <img alt={""} src={checkImage(item.kli_id.value)} />
                            </Link>
                        </div>
                    </div>
                )
            });
        } else {
            content = globalState.premiumClinics.slice(0, 4).map((item, index) => {
                return (
                    <div key={index} className="col-sm-3 col-6" data-toggle="modal" data-target="#loginModal">
                        <div className="partners-logo">
                            <Link to={`/all-clinics/clinic/${item.kli_id.value}`}>
                                <img alt={""} src={checkImage(item.kli_id.value)} />
                            </Link>
                        </div>
                    </div>
                )
            });
        }
    }
    return (
        <div className="our-partners">
            <div className="container">
                <div className="text-center">
                    <h2>Our Partners</h2>
                </div>
                <div className="row">
                { content }
                </div>
            </div>
        </div>
    );
}

export default OurPartners