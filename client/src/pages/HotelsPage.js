import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HotelSquare from "../components/Hotels/HotelSquare";
import axios from "axios";
import { getToken } from "../api/api";
import "../assets/styles/hotelspage.scss";
import Loading from "../components/Loading/Loading";

export default function HotelsPage() {
    const [hotels, setHotels] = useState();

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
        };
    }, []);
    if (!hotels) {
        return <Loading />;
    } else {
        return (
            <>
                <div className="container hotels-page">
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
                                    Hotels
                                </li>
                            </div>
                        </ol>
                    </nav>
                    <div className="hotels-banner d-flex align-items-end mb-5">
                        <div className="hotels-search d-flex align-items-center justify-content-center">
                            <div className="col-sm-5 text-center">
                                <h1>Hotels</h1>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {hotels
                                ? hotels.map((hotel, index) => {
                                      return (
                                          <HotelSquare
                                              hotel={hotel}
                                              key={index}
                                          />
                                      );
                                  })
                                : null}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
