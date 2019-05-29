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
            {props.img.map((img, index) => {
                if (img.text_value.indexOf("<img") === 0) {
                    const image = parse(img.text_value);
                    return <div key={index}>{image}</div>;
                }

                return null;
            })}

            <p>{props.title}</p>
            <p>{props.date}</p>
        </Link>
    );
}
