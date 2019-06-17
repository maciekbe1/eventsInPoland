import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

export default function Squqre(props) {
    return (
        <Link
            className="col-md-4 col-sm-6 event-block"
            key={props.index}
            to={`/all-events/event/${props.id}`}
        >
            {parse(props.img[5].text_value)}
            <p>
                <b>{props.title}</b>
            </p>
            <p>{props.date}</p>
        </Link>
    );
}
