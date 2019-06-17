import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import img from "../../assets/images/default.jpg";
export default function Hotel(props) {
    const hotel = props.hotel;
    return (
        <>
            <div className="col-md-4 col-sm-6 hotel-block">
                <Link to={`/hotels/${hotel.event.id}`}>
                    {hotel.eventDetails[5].text_value !== "" ? (
                        parse(hotel.eventDetails[5].text_value)
                    ) : (
                        <img alt="default" src={img} />
                    )}
                    <p>{hotel.event.title}</p>
                </Link>
            </div>
        </>
    );
}
