import React, { useEffect, useState } from "react";
import { getContentBpower } from "../api/api";
import Jumbotron from "../components/HomePage/Jumbotron";
// import FindPopularEvent from "../components/HomePage/FindPopularEvent";
import Destination from "../components/HomePage/Destination";
import "../assets/styles/homepage.scss";
import LatestEvents from "../components/HomePage/LatestEvents";
import HomeNews from "../components/HomePage/HomeNews";
import LastMinute from "../components/HomePage/LastMinute";
// import Calendar from "../pages/Calendar";

const HomePage = () => {
    const [content, setContent] = useState();

    useEffect(() => {
        const getContent = getContentBpower(12);
        getContent.then(res => setContent(res));
    }, []);

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
                    <div className="col-lg-3">
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
