import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/contact.scss";
import { getContentBpower } from "../../api/api";

const Contact = props => {
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
                <div className="container contact-page">
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
                    <div className="contact-banner d-flex align-items-end mb-5">
                        <div className="contact-search d-flex align-items-center justify-content-center">
                            <div className="col-sm-5 text-center">
                                <h1>{content.text_1}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 contact-details">
                                <h3>{content.text_2}</h3>
                                <h5>{content.text_3}</h5>
                                <p>{content.text_4}</p>
                                <p>{content.text_5}</p>
                                <p>{content.text_6}</p>
                                <br />
                                <p>{content.text_7}</p>
                                <p>{content.text_8}</p>
                                <p>{content.text_9}</p>

                                <div className="social-media">
                                    <a
                                        href="https://www.facebook.com/eventsinpoland/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-facebook-square fa-3x" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/company/events-in-poland/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-linkedin fa-3x" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-md-8 offset-md-2">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14557.720601142199!2d18.020406319917853!3d53.12448569736634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47031392ad687157%3A0x2c7b03f074b6403d!2sMarii+Sk%C5%82odowskiej+Curie+10%2C+85-001+Bydgoszcz!5e0!3m2!1spl!2spl!4v1559127526162!5m2!1spl!2spl"
                                    frameBorder="0"
                                    allowFullScreen
                                    title="map"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Contact;
