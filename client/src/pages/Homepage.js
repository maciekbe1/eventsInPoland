import React from "react";
import Jumbotron from "../components/homepage/Jumbotron";
import FindPopularEvent from "../components/homepage/FindPopularEvent";
import Destination from "../components/homepage/Destination";
import "../assets/styles/homepage.scss";
import LatestEvents from "../components/homepage/LatestEvents";

const HomePage = () => {
    return (
        <div className="homepage-wrapper">
            <Jumbotron />
            <FindPopularEvent />
            <LatestEvents />
            <Destination />
        </div>
    );
};

export default HomePage;
