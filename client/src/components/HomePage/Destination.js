import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Context from "../../context";

const Destination = props => {
    const { dispatch } = useContext(Context);
    const [eventsLength, setEventsLength] = useState(0);

    useEffect(() => {
        axios
            .get(
                'https://b2ng.bpower2.com/index.php/restApi/events/{"pipeline":13, "details: true"}'
            )
            .then(res => {
                setEventsLength(res.data.length);
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
