import React from "react";
import { Link } from "react-router-dom";

export default function Squqre(props) {
    return (
        <>
            <Link
                className="col-md-4 col-sm-6 event-block"
                key={props.index}
                to={`/all-events/event/${props.id}`}
            >
                <img
                    src={`http://via.placeholder.com/450x300?text=${
                        props.title
                    }`}
                    alt=""
                />
                <p>{props.title}</p>
                <p>{props.date}</p>
            </Link>
        </>
    );
}
