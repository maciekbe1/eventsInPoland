import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Context from "../../context";
import { getToken } from "../../api/api";


const Destination = props => {
    const { dispatch } = useContext(Context);
    const [eventsLength, setEventsLength] = useState(0);

    useEffect(() => {
        getToken(process.env.REACT_APP_USER_DATA_KEY).then(res => {
            
            axios({
                method: "get",
                url: process.env.REACT_APP_EVENTS_DETAILS,
                headers: {
                    Authorization: res.data.token
                }
            })
                .then(res => {
                    let events = [];
                    res.data.map(event => {
                        return event.event.type !== "Hotels" ? events.push(event) : null;
                    });
                    setEventsLength(events.length);
                })
                .catch(error => {
                    console.log(error);
                });
        });
    }, []);
    const clearDataSearchParams = () => {
        dispatch({ type: "START_EVENT_DATE", payload: null });
        dispatch({ type: "END_EVENT_DATE", payload: null });
    };
    return (
        <div className="destination container-fluid">
            <div className="p-0">
                <div className="row">
                    <div className="text-center">
                        <h3>{props.content.text_13}</h3>
                        <h2>{props.content.text_14}</h2>
                        <p>{props.content.text_15}</p>
                        {
                            // context.state.isAuth ? <Link to="/all-events">See {context.state.events.length} events in Poland</Link> : <button data-toggle="modal" data-target="#loginModal">See {context.state.events.length} events in Poland</button>
                        }
                        <Link to="/all-events" onClick={clearDataSearchParams}>
                            {props.content.text_16} {eventsLength}{" "}
                            {props.content.text_17}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;
