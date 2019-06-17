import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import axios from "axios";

const NewsDetails = props => {
    const [content, setContent] = useState({});

    function getNewsTitle() {
        return axios.get(
            `https://b2ng.bpower2.com/index.php/restApi/common-posts/params/{"id": ${
                props.match.params.id
            }}`
        );
    }

    function getNewsContent() {
        return axios.get(
            `https://b2ng.bpower2.com/index.php/restApi/common-posts/params/{"id": ${Number(
                props.match.params.id
            ) + 1}}`
        );
    }
    useEffect(() => {
        axios.all([getNewsTitle(), getNewsContent()]).then(
            axios.spread(function(acct, perms) {
                setContent({
                    title: acct.data[0].post.post_content,
                    text: perms.data[0].post.post_content,
                    image: perms.data[0].post.post_content_filtered
                });
            })
        );
    }, []);

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
                                <Link to="/all-events">News</Link>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                {content.title}
                            </li>
                        </div>
                    </ul>
                </nav>
                {content.image ? (
                    <div className="mw-100 event-image mb-2">
                        {parse(`${content.image}`)}
                        <div className="image-content">
                            <h2>{content.title}</h2>
                        </div>
                    </div>
                ) : null}
                <div className="event-details">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-center">{content.title}</h3>
                            <p>{content.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsDetails;
