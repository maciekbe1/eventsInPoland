import React, { useContext, useEffect, useState } from "react";
import "../assets/styles/eventspage.scss";
import { Link } from "react-router-dom";
import { getToken } from "../api/api";
import axios from "axios";
import Context from "../context";
import { dateConverter } from "../containers/date";
import Square from "../components/EventsPage/Squqre";

const EventsPage = props => {
    const context = useContext(Context);
    const { dispatch } = useContext(Context);
    const [content, setContent] = useState();

    useEffect(() => {
        getToken(process.env.REACT_APP_USER_DATA_KEY).then(res => {
            let arrOfEvent = [];
            axios({
                method: "get",
                url: process.env.REACT_APP_EVENTS,
                headers: {
                    Authorization: res.data.token
                }
            })
                .then(res => {
                    res.data.data.objects.map(event => {
                        arrOfEvent.push(event);
                        return null;
                    });
                    dispatch({ type: "GET_EVENTS", payload: arrOfEvent });
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
        let filteredItems = context.state.events;
        const filtered = filteredItems.filter(item => {
            return (
                item.title
                    .toLowerCase()
                    .indexOf(context.state.searchEventByName.toLowerCase()) !==
                -1
            );
        });
        const content = filtered.map((event, index) => {
            const start = dateConverter(event.from_date);
            const end = dateConverter(event.to_date);
            const date = start === end ? start : start + " - " + end;
            if (dateConverter(context.state.startEventDate) == null) {
                return (
                    <Square
                        key={index}
                        title={event.title}
                        date={date}
                        id={event.id}
                    />
                );
            } else if (
                dateConverter(context.state.startEventDate) <=
                    dateConverter(event.from_date) &&
                dateConverter(context.state.endEventDate) >=
                    dateConverter(event.from_date)
            ) {
                return (
                    <Square
                        key={index}
                        title={event.title}
                        date={date}
                        id={event.id}
                    />
                );
            }
        });

        setContent(content);
    }, [context.state.events, context.state.searchEventByName]);

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
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
            <div className="container events-page">
                <div className="event-banner d-flex align-items-end mb-5">
                    <div className="event-search d-flex align-items-center justify-content-center">
                        <div className="col-sm-5 text-center">
                            <h1>List of events</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">{content}</div>
                </div>
            </div>
        </div>
    );
};

export default EventsPage;
