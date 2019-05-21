import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../api/api";

const Event = props => {
    const [event, setEvent] = useState();
    useEffect(() => {
        getToken(process.env.REACT_APP_USER_DATA_KEY).then(res => {
            axios({
                method: "get",
                url: `https://b2ng.bpower2.com/index.php/restApi/request/model/SzanseSprzedazy/params/{"pipeline":13, "id": ${
                    props.match.params.event
                }}`,
                headers: {
                    Authorization: res.data.token
                }
            })
                .then(res => {
                    setEvent(res.data.data.objects[0]);
                })
                .catch(error => {
                    console.log(error);
                });
        });
    }, []);
    console.log(event);
    const dateConverter = (start, end) => {
        if (start) {
            const date = new Date(start);
            const startDay =
                date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
            const startMonth =
                date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
            const startYear = date.getFullYear();
            return `${startDay}.${startMonth}.${startYear}`;
        }
        if (end) {
            const date = new Date(end);
            const endDay =
                date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
            const endMonth =
                date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
            const endYear = date.getFullYear();
            return `${endDay}.${endMonth}.${endYear}`;
        }
    };
    let content = "";
    if (event) {
        content = (
            <div>
                <h2>{event.title}</h2>
                <p>date start: {dateConverter(event.from_date)}</p>
                <p>date end: {dateConverter(event.to_date)}</p>
            </div>
        );
    } else {
        return null;
    }
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <div className="container d-flex flex-wrap">
                        <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/all-events">All Events</Link>
                        </li>
                        <li
                            className="breadcrumb-item active"
                            aria-current="page"
                        >
                            {event ? event.title : null}
                        </li>
                    </div>
                </ul>
            </nav>
            <div className="container event-subpage">{content}</div>
        </div>
    );
};
export default Event;
