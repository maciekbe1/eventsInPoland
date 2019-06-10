import React, { useEffect, useState } from "react";
import { getContentBpower } from "../api/api";
import Jumbotron from "../components/HomePage/Jumbotron";
// import FindPopularEvent from "../components/HomePage/FindPopularEvent";
import Destination from "../components/HomePage/Destination";
import "../assets/styles/homepage.scss";
import LatestEvents from "../components/HomePage/LatestEvents";
import HomeNews from "../components/HomePage/HomeNews";
// import Calendar from "../pages/Calendar";

const HomePage = () => {
    const [content, setContent] = useState();

    useEffect(() => {
        const getContent = getContentBpower(12);
        getContent.then(res => setContent(res));
    }, []);

    console.log(content);

    if (!content) {
        return null;
    } else {
        return (
            <div className="homepage-wrapper container-fluid">
                {/* <FindPopularEvent /> */}
                <div className="row">
                    <div className="col-sm-9">
                        <Jumbotron content={content} />
                        <LatestEvents content={content} />
                        {/* <Calendar /> */}
                    </div>
                    <div className="col-sm-3">
                        <HomeNews />
                    </div>
                </div>

                <Destination content={content} />
            </div>
        );
    }
};

export default HomePage;
