import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../../api/api";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import parse from "html-react-parser";
import styled from "styled-components";

export default function LastMinute() {
    const [hotels, setHotels] = useState([]);
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
            const arr = [];
            result.data.map(item => {
                if (item.event.type === "Hotels") {
                    arr.push(item);
                }
                return null;
            });
            const sorted = arr.sort(function(a, b) {
                return (
                    new Date(b.event.from_date) - new Date(a.event.from_date)
                );
            });
            setHotels(sorted);
            setLoading(true);
        };
    }, []);
    return (
        <div className="last-minute mt-2">
            <div className="last-minute-title events-in-poland-bar">
                <h3 className="text-white p-2">Last minute</h3>
            </div>
            <div className="last-minute-list container">
                {!loading ? (
                    <Loading />
                ) : (
                    hotels.slice(0, 4).map((event, index) => {
                        const image = parse(event.eventDetails[5].text_value);
                        const src = image.props.src;
                        return (
                            <div
                                className="hotels-row row my-2 py-2 align-items-center"
                                key={index}
                            >
                                <Div className="col-md" image={src}>
                                    {/* {parse(event.eventDetails[5].text_value)} */}
                                </Div>
                                <div className="col-md">
                                    <p>{event.event.title}</p>
                                </div>
                                <div className="col-sm">
                                    <p>{event.event.from_date}</p>
                                    <p>{event.event.to_date}</p>
                                </div>
                                <div className="col-sm">
                                    <p>{event.eventDetails[4].text_value}</p>
                                </div>
                                <div className="col-sm">
                                    <p>
                                        {Number(
                                            event.event.value_in_currency
                                        ).toFixed(2)}
                                    </p>
                                </div>
                                <div className="col-sm test-text">
                                    <div>
                                        <Link
                                            className="btn btn-primary"
                                            to={`/hotels/${event.event.id}`}
                                        >
                                            check
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

const Div = styled.div`
    background: url(${props => props.image});
    width: 100%;
    height: 150px;
    background-position: center;
    background-size: cover;
`;
