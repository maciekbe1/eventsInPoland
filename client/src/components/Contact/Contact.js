import React from "react";
import "../../assets/styles/contact.scss";

const Contact = () => {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <div className="container d-flex flex-wrap">
                        <li className="breadcrumb-item">Home</li>
                        <li
                            className="breadcrumb-item active"
                            aria-current="page"
                        >
                            Contact
                        </li>
                    </div>
                </ol>
            </nav>
            <div className="container contact-page">
                <div className="contact-banner d-flex align-items-end mb-5">
                    <div className="contact-search d-flex align-items-center justify-content-center">
                        <div className="col-sm-5 text-center">
                            <h1>Contact</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">content</div>
                </div>
            </div>
        </>
    );
};

export default Contact;
