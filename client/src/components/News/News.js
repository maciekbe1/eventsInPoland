import React, { useEffect, useState } from "react";
import "../../assets/styles/news.scss";
import { getContentBpower } from "../../api/api";
import { Link } from "react-router-dom";

const News = props => {
    const [content, setContent] = useState();

    useEffect(() => {
        const getContent = getContentBpower(props.location.pathname);
        getContent.then(res => setContent(res));
    }, []);
    if (!content) {
        return null;
    } else {
        return (
            <>
                <div className="container news-page">
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
                                    {content.text_1}
                                </li>
                            </div>
                        </ol>
                    </nav>
                    <div className="news-banner d-flex align-items-end mb-5">
                        <div className="news-search d-flex align-items-center justify-content-center">
                            <div className="col-sm-5 text-center">
                                <h1>{content.text_1}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <h3>{content.text_2}</h3>
                            <p>{content.text_3}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default News;
