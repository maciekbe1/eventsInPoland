import React, { useEffect, useState } from "react";
import { getContentBpower } from "../api/api";
import parse from "html-react-parser";
import "../assets/styles/footer.scss";

const Footer = props => {
    const [content, setContent] = useState();

    useEffect(() => {
        const getContent = getContentBpower(16);
        getContent.then(res => setContent(res));
    }, []);

    if (!content) {
        return null;
    } else {
        return (
            <div className="footer container-fluid">
                <div className="container text-center">
                    <div className="footer-company-info">
                        <h5>{content.text_1}</h5>
                        <p>{content.text_2}</p>
                        <p>{content.text_3}</p>
                        <p>{content.text_4}</p>
                        <p>{content.text_5}</p>
                    </div>
                    {parse(content.text_6)}
                    <p className="footer-notice">{content.text_7}</p>
                </div>
            </div>
        );
    }
};

export default Footer;
