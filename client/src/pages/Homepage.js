import React from 'react';
import Jumbotron from '../components/HomePage/Jumbotron';
import FindPopularEvent from '../components/HomePage/FindPopularEvent';
import Destination from '../components/HomePage/Destination';
import '../assets/styles/homepage.scss';
import LatestEvents from "../components/HomePage/LatestEvents";

const Homepage = () => {
    return (
        <div className="homepage-wrapper">
            <Jumbotron />
            <FindPopularEvent />
            <LatestEvents/>
            <Destination />
        </div>
    );
}

export default Homepage;