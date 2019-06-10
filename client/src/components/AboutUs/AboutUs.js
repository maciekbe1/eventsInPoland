import React, { useEffect, useState } from "react";
import { getContentBpower } from "../../api/api";
import { Link } from "react-router-dom";
import "../../assets/styles/aboutus.scss";
import AboutUsList from "./AboutUsList";

const AboutUs = props => {
    const [content, setContent] = useState();
    const [list, setList] = useState();

    useEffect(() => {
        const getContent = getContentBpower(props.location.pathname);
        getContent.then(res => setContent(res));
    }, []);

    useEffect(() => {
        let arr = [];
        for (var key in content) {
            if (content.hasOwnProperty(key)) {
                arr.push(content[key]);
            }
        }
        setList(arr);
    }, [content]);

    if (!content) {
        return null;
    } else {
        return (
            <>
                <div className="container about-us-page">
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
                    <div className="about-us-banner d-flex align-items-end mb-5">
                        <div className="about-us-search d-flex align-items-center justify-content-center">
                            <div className="col-sm-5 text-center">
                                <h1>{content.text_1}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <p>{content.text_2}</p>
                            <h3>{content.text_3}</h3>
                            <ul>
                                <AboutUsList list={list} />
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default AboutUs;
