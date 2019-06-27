import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { getContentBpower } from "../../api/api";
import Context from "../../context";
import { useCookies } from "react-cookie";

import pl from "../../assets/images/flags/pl.png";
import uk from "../../assets/images/flags/uk.png";
import LoadingBanner from "../Loading/LoadingBanner";

const Language = props => {
    const { dispatch } = useContext(Context);
    const context = useContext(Context);
    const [language, setLanguage] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [cookies, setCookie] = useCookies();

    const locations = [12, 13, 14, 15, 16, 17];
    // 12 - homepage
    // 13 - about-us
    // 14 - news
    // 15 - contact
    // 16 - footer
    // 17 - navbar

    useEffect(() => {
        locations.map(location => {
            const getContent = getContentBpower(location, language);
            getContent.then(res => {
                switch (location) {
                    case 12:
                        dispatch({
                            type: "HOMEPAGE_CONTENT",
                            payload: res
                        });
                        break;
                    case 13:
                        dispatch({ type: "ABOUTUS_CONTENT", payload: res });
                        break;
                    case 14:
                        dispatch({ type: "NEWS_CONTENT", payload: res });
                        break;
                    case 15:
                        dispatch({ type: "CONTACT_CONTENT", payload: res });
                        break;
                    case 16:
                        dispatch({ type: "FOOTER_CONTENT", payload: res });
                        break;
                    case 17:
                        dispatch({ type: "NAVBAR_CONTENT", payload: res });
                        break;
                    default:
                        return null;
                }
            });
            return null;
        });
        if (cookies.eventsLanguage) {
            dispatch({ type: "SET_LANGUAGE", payload: cookies.eventsLanguage });
            setLanguage(cookies.eventsLanguage);
        } else {
            dispatch({ type: "SET_LANGUAGE", payload: "English" });
            setLanguage("English");
        }
    }, [language]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [context.state.homepage]);

    const changeLanguage = lang => {
        setCookie("eventsLanguage", lang);
        setIsLoading(true);
        window.location.reload();
    };

    return (
        <>
            <Div className="languages">
                <Img src={uk} onClick={() => changeLanguage("English")} />
                <Img src={pl} onClick={() => changeLanguage("Polish")} />
            </Div>
            {isLoading ? <LoadingBanner /> : null}
        </>
    );
};

export default Language;

const Div = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
`;

const Img = styled.img`
    width 30px;
    margin: 5px;
    cursor: pointer;
    transition: .3s;
    &:hover {
        transform: scale(1.05)
    }
`;
