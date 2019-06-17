import React, { useContext, useEffect, useState } from "react";
import "../assets/styles/eventspage.scss";
import { Link } from "react-router-dom";
import { getToken } from "../api/api";
import axios from "axios";
import Context from "../context";
import { dateConverter } from "../containers/date";
import Square from "../components/EventsPage/Squqre";
import Loading from "../components/Loading/Loading";

const EventsPage = props => {
    const context = useContext(Context);
    const { dispatch } = useContext(Context);
    const [content, setContent] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getToken(process.env.REACT_APP_USER_DATA_KEY).then(res => {
            let arrOfEvent = [];
            axios({
                method: "get",
                url: process.env.REACT_APP_EVENTS_DETAILS,
                headers: {
                    Authorization: res.data.token
                }
            })
                .then(res => {
                    res.data.map(event => {
                        return arrOfEvent.push(event);
                    });
                    dispatch({ type: "GET_EVENTS", payload: arrOfEvent });
                    setIsLoading(false);
                })
                .catch(error => {
                    console.log(error);
                });
        });
        if (props.location.state !== undefined) {
            dispatch({
                type: "SEARCH_EVENT_BY_NAME",
                payload: props.location.state.eventName
            });
        } else {
            dispatch({ type: "SEARCH_EVENT_BY_NAME", payload: "" });
        }
    }, []);

    useEffect(() => {
        let events = [];
        context.state.events.map(event => {
            return event.event.type !== "Hotels" ? events.push(event) : null;
        });

        let filteredItems = events;
        const filtered = filteredItems.filter(item => {
            return (
                item.event.title
                    .toLowerCase()
                    .indexOf(context.state.searchEventByName.toLowerCase()) !==
                -1
            );
        });
        const content = filtered.map((event, index) => {
            const start = dateConverter(event.event.from_date);
            const end = dateConverter(event.event.to_date);
            const date = start === end ? start : start + " - " + end;
            if (
                dateConverter(context.state.startEventDate) <= start &&
                dateConverter(context.state.endEventDate) >= start
            ) {
                return (
                    <Square
                        key={index}
                        title={event.event.title}
                        date={date}
                        id={event.event.id}
                        img={event.eventDetails}
                    />
                );
            } else if (dateConverter(context.state.startEventDate) == null) {
                return (
                    <Square
                        key={index}
                        title={event.event.title}
                        date={date}
                        id={event.event.id}
                        img={event.eventDetails}
                    />
                );
            } else {
                return null;
            }
        });
        setContent(content);
    }, [context.state.events, context.state.searchEventByName]);
    if (isLoading) {
        return <Loading />;
    } else {
        return (
            <div className="container events-page">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-2">
                        <div className="container d-flex flex-wrap">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                All events
                            </li>
                        </div>
                    </ol>
                </nav>
                <div className="event-banner d-flex align-items-end mb-5">
                    <div className="event-search d-flex align-items-center justify-content-center">
                        <div className="col-sm-5 text-center">
                            <h1>List of events</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">{content} </div>
                </div>
            </div>
        );
    }
};

export default EventsPage;
