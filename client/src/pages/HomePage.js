import React from "react";
import Jumbotron from "../components/HomePage/Jumbotron";
// import FindPopularEvent from "../components/HomePage/FindPopularEvent";
import Destination from "../components/HomePage/Destination";
import "../assets/styles/homepage.scss";
import LatestEvents from "../components/HomePage/LatestEvents";
import HomeNews from "../components/HomePage/HomeNews";
// import Calendar from "../pages/Calendar";

const HomePage = () => {
    return (
        <div className="homepage-wrapper container-fluid">
            {/* <FindPopularEvent /> */}
            <div className="row">
                <div className="col-sm-9">
                    <Jumbotron />
                    <LatestEvents />
                    {/* <Calendar /> */}
                </div>
                <div className="col-sm-3">
                    <HomeNews />
                </div>
            </div>

            <Destination />
        </div>
    );
};

export default HomePage;
