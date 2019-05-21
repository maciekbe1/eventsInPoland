import React from "react";
import data from "../../database/popularCityEvents.json";
import { Link } from "react-router-dom";
// import Context from '../../context'

const FindPopularEvent = () => {
    // const context = useContext(Context)
    return (
        <div className="find-event">
            <div className="container">
                <div className="row">
                    <h2>Find Event from popular Cities</h2>
                    {/*
                        {data.map((item, index) => {
                            if(context.state.isAuth){
                                return (
                                <Link className="popular-card card col-lg-3 col-sm-6 text-white" to={`/find-popular/${item.type}`} key={index}>
                                        <img src={require(`../../assets/images/${item.img}`)} className="card-img" alt="..." />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">{item.city}</h5>
                                        </div>
                                </Link>
                                )
                            } else {
                                return (
                                    <div className="popular-card card col-lg-3 col-sm-6 text-white" key={index} data-toggle="modal" data-target="#loginModal">
                                        <img src={require(`../../assets/images/${item.img}`)} className="card-img" alt="..." />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title">{item.city}</h5>
                                        </div>
                                    </div>
                                 )
                             }
                         })}
                        */}
                    {data.map((item, index) => {
                        return (
                            <Link
                                className="popular-card card col-lg-3 col-sm-6 text-white"
                                to={`/find-popular/${item.type}`}
                                key={index}
                            >
                                <img
                                    src={require(`../../assets/images/${
                                        item.img
                                    }`)}
                                    className="card-img"
                                    alt="..."
                                />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">{item.city}</h5>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FindPopularEvent;
