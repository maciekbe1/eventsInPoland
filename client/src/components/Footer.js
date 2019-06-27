import React, { useContext } from "react";
import parse from "html-react-parser";
import "../assets/styles/footer.scss";
import Context from "../context";

const Footer = props => {
    const context = useContext(Context);
    const content = context.state.footer;

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
                    {content.text_6 ? parse(content.text_6) : null}
                    <p className="footer-notice">{content.text_7}</p>
                </div>
            </div>
        );
    }
};

export default Footer;
