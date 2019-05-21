import React from "react";
import Jumbotron from "../components/HomePage/Jumbotron";
import FindPopularEvent from "../components/HomePage/FindPopularEvent";
import Destination from "../components/HomePage/Destination";
import "../assets/styles/homepage.scss";
// import LatestEvents from "../components/HomePage/LatestEvents";
import Calendar from "../pages/Calendar";

const HomePage = () => {
    return (
        <div className="homepage-wrapper">
            <Jumbotron />
            <FindPopularEvent />
            {/* <LatestEvents /> */}
            <Calendar />
            <Destination />
        </div>
    );
};

export default HomePage;
