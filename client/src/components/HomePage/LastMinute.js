import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../../api/api";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import parse from "html-react-parser";
import styled from "styled-components";
import { dateConverter } from "../../containers/date";

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
            {!loading ? (
                <Loading />
            ) : (
                <table className="hotels-table table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">date</th>
                            <th scope="col">place</th>
                            <th scope="col">cost</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotels.slice(0, 4).map((event, index) => {
                            const image = parse(
                                event.eventDetails[5].text_value
                            );
                            const src = image.props.src;
                            return (
                                <tr className="hotels-row" key={index}>
                                    <td className="hotel-td-image">
                                        <Div image={src}>
                                            {/* {parse(event.eventDetails[5].text_value)} */}
                                        </Div>
                                    </td>
                                    <td>
                                        <p className="hotel-mobile-paragraph">
                                            name:
                                        </p>
                                        <p>{event.event.title}</p>
                                    </td>
                                    <td>
                                        <p className="hotel-mobile-paragraph">
                                            date:
                                        </p>
                                        <p>
                                            {dateConverter(
                                                event.event.from_date
                                            )}
                                        </p>
                                        <p>-</p>
                                        <p>
                                            {dateConverter(event.event.to_date)}
                                        </p>
                                    </td>
                                    <td>
                                        <p className="hotel-mobile-paragraph">
                                            place:
                                        </p>
                                        <p>
                                            {event.eventDetails[4].text_value}
                                        </p>
                                    </td>
                                    <td>
                                        <p className="hotel-mobile-paragraph">
                                            cost:
                                        </p>
                                        <p>
                                            {Number(
                                                event.event.value_in_currency
                                            ).toFixed(2)}
                                        </p>
                                    </td>
                                    <td>
                                        <Link
                                            className="btn btn-primary"
                                            to={`/hotels/${event.event.id}`}
                                        >
                                            check
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
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
