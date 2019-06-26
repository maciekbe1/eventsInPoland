import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../api/api";
import parse from "html-react-parser";
import Loading from "../Loading/Loading";
import { FacebookProvider, Like, Comments } from "react-facebook";

const Event = props => {
    const [event, setEvent] = useState();
    const [eventDetails, setEventDetails] = useState();
    const [image, setImage] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getToken(process.env.REACT_APP_USER_DATA_KEY).then(res => {
            axios({
                method: "get",
                url: `https://b2ng.bpower2.com/index.php/restApi/events?id=${
                    props.match.params.event
                }&details=true`,
                headers: {
                    Authorization: res.data.token
                }
            })
                .then(res => {
                    setEvent(res.data.event);
                    setEventDetails(res.data.eventDetails);
                    setImage(res.data.eventDetails[5].text_value);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.log(error);
                });
        });
    }, []);

    const createMap = () => {
        const address = `${eventDetails[3].text_value} ${
            eventDetails[6].text_value
        } ${eventDetails[4].text_value}`;
        const encode = encodeURIComponent(address);
        const map = `<iframe
            height="440"
            src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=${encode}+(Tytu%C5%82)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            title="map"
        />`;

        return parse(map);
    };

    let content = "";
    if (event && eventDetails) {
        content = (
            <>
                <div className="mw-100 event-image mb-2">
                    {parse(`${image}`)}
                    <div className="image-content">
                        <h2>{event.title}</h2>
                        <p>
                            {/* {dateConverterWithHour(event.from_date)} -{" "}
                            {dateConverterWithHour(event.to_date)} */}
                            {event.type}
                        </p>
                    </div>
                </div>
                <div className="event-details">
                    <div className="row">
                        <div className="col-lg-8 text">
                            <h3>{event.title}</h3>
                            {parse(eventDetails[2].text_value)}
                        </div>
                        <div className="col-lg-4 details">
                            <div className="detail register-btn">
                                <a
                                    className="btn btn-primary find-events"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`https://b2ng.bpower2.com/index.php/workflow/workflowInstance/create/wc_id/509/ProjectTask[sale_chance_id]/${
                                        event.id
                                    }`}
                                >
                                    Register
                                </a>
                            </div>
                            <div className="detail">
                                <div className="icon">
                                    <i className="fas fa-clock fa-2x" />
                                </div>
                                <div className="text">
                                    <p>{event.from_date}</p>
                                    <p>{event.to_date}</p>
                                </div>
                            </div>
                            <div className="detail">
                                <div className="icon">
                                    <i className="fas fa-money-bill-wave fa-2x" />
                                </div>
                                <div className="text">
                                    {Number(event.value_in_currency).toFixed(2)}{" "}
                                    {event.currency}
                                </div>
                            </div>
                            <div className="detail">
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt fa-2x" />
                                </div>
                                <div className="text">
                                    <p>{eventDetails[1].text_value}</p>
                                    <p>{eventDetails[3].text_value}</p>
                                    <p>
                                        {eventDetails[6].text_value}{" "}
                                        {eventDetails[4].text_value}
                                    </p>
                                </div>
                            </div>
                            <div className="detail">{createMap()}</div>
                        </div>
                    </div>
                </div>

                <FacebookProvider appId="345539959465303">
                    <Like
                        size={"large"}
                        width={"200"}
                        href={window.location.href}
                        colorScheme="dark"
                        showFaces
                        share
                    />
                </FacebookProvider>

                <FacebookProvider appId="345539959465303">
                    <Comments width={"100%"} href={window.location.href} />
                </FacebookProvider>
            </>
        );
    }

    return (
        <>
            <div className="container event-subpage">
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb mb-2">
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
                {!isLoading ? content : <Loading />}
            </div>
        </>
    );
};
export default Event;
