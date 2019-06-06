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
                    <div className="row">
                        <div className="col-12 contact-details">
                            <h3>Company details:</h3>
                            <h5>Events in Poland Ltd.</h5>
                            <p>Marii Skłodowskiej-Curie 10</p>
                            <p>85-094 Bydgoszcz</p>
                            <p>+48 53 31 31 670</p>
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
};

export default Contact;
