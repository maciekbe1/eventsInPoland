import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../../api/api";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import parse from "html-react-parser";
const LatestEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getToken(process.env.REACT_APP_USER_DATA_KEY).then(res => {
            fetchEvents(res);
        });

        const fetchEvents = async res => {
            const result = await axios({
                method: "get",
                url: process.env.REACT_APP_EVENTS_DETAILS,
                headers: {
                    Authorization: res.data.token
                }
            });
            const sorted = result.data.sort(function(a, b) {
                // console.log(a);
                return (
                    new Date(b.event.from_date) - new Date(a.event.from_date)
                );
            });
            setEvents(sorted);
            setLoading(true);
        };
    }, []);
    // console.log(events);
    const onChangeText = html => {
        const tmp = document.createElement("div");
        tmp.innerHTML = html;
        return tmp.textContent.slice(0, 150) || tmp.innerText.slice(0, 150);
    };
    function txt_content(txt) {
        if (typeof txt == "object") {
            let newtxt = txt.filter((item, index, arr) => {
                if (!item.type) {
                    return arr.splice(index, 1);
                }
                return arr;
            });
            return newtxt;
        } else {
            return txt;
        }
    }
    return (
        <div className="last-events mt-2">
            <div className="bg-primary last-events-title">
                <h3 className="text-white p-2">Latest Events</h3>
            </div>
            <div className="last-events-list row container-fluid">
                {!loading ? (
                    <Loading />
                ) : (
                    events.slice(0, 4).map((event, index) => {
                        return (
                            <div
                                className="last-events-item col-sm-6 my-3"
                                key={index}
                            >
                                <div className="d-flex justify-content-between">
                                    <p>{event.eventDetails[4].text_value}</p>
                                    <p>{event.event.from_date}</p>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <Link
                                            to={`/all-events/event/${
                                                event.event.id
                                            }`}
                                        >
                                            {parse(
                                                event.eventDetails[5].text_value
                                            )}
                                        </Link>
                                    </div>
                                    <div className="col-sm test-text">
                                        <h5>{event.event.title}</h5>
                                        <div>
                                            {onChangeText(
                                                txt_content(
                                                    parse(
                                                        event.eventDetails[2]
                                                            .text_value
                                                    )
                                                )
                                            )}
                                            ...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default LatestEvents;
