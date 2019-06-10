import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../../api/api";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import parse from "html-react-parser";

const LatestEvents = props => {
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
                return (
                    new Date(b.event.from_date) - new Date(a.event.from_date)
                );
            });
            setEvents(sorted);
            setLoading(true);
        };
    }, []);

    const onChangeText = html => {
        const tmp = document.createElement("div");
        tmp.innerHTML = html;
        let txt = tmp.textContent.slice(0, 150) || tmp.innerText.slice(0, 150);
        if (txt.length > 149) {
            return txt + "...";
        } else {
            return txt;
        }
    };
    function txt_content(txt) {
        if (typeof txt == "object") {
            let newtxt = txt.filter((item, index, arr) => {
                if (!item.type) {
                    return arr.splice(index, 1);
                }
                return null;
            });
            return newtxt;
        } else {
            return txt;
        }
    }

    return (
        <div className="last-events mt-2">
            <div className="bg-primary last-events-title">
                <h3 className="text-white p-2">{props.content.text_12}</h3>
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
                                        <h5>
                                            <Link
                                                className="latest-events-title"
                                                to={`/all-events/event/${
                                                    event.event.id
                                                }`}
                                            >
                                                {event.event.title}
                                            </Link>
                                        </h5>
                                        <div>
                                            {onChangeText(
                                                txt_content(
                                                    parse(
                                                        event.eventDetails[2]
                                                            .text_value
                                                    )
                                                )
                                            )}
                                            <Link
                                                to={`/all-events/event/${
                                                    event.event.id
                                                }`}
                                            >
                                                {" "}
                                                read more
                                            </Link>
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
