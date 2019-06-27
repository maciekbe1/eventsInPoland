import React, { useContext } from "react";
import Jumbotron from "../components/HomePage/Jumbotron";
// import FindPopularEvent from "../components/HomePage/FindPopularEvent";
import Destination from "../components/HomePage/Destination";
import "../assets/styles/homepage.scss";
import LatestEvents from "../components/HomePage/LatestEvents";
import HomeNews from "../components/HomePage/HomeNews";
import LastMinute from "../components/HomePage/LastMinute";
// import Calendar from "../pages/Calendar";
import Context from "../context";

const HomePage = () => {
    const context = useContext(Context);
    const content = context.state.homepage;

    if (!content) {
        return null;
    } else {
        return (
            <div className="homepage-wrapper container">
                {/* <FindPopularEvent /> */}
                <div className="row">
                    <div className="col-lg-9">
                        <Jumbotron content={content} />

                        {/* <Calendar /> */}
                    </div>
                    <div className="col-lg-3 mt-5 mb-5">
                        <HomeNews />
                    </div>
                </div>
                <LatestEvents content={content} />
                <LastMinute content={content} />
                <Destination content={content} />
            </div>
        );
    }
};

export default HomePage;
