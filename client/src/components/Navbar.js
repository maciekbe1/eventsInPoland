import React, { useContext, useState, useEffect } from "react";
import { getContentBpower } from "../api/api";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.scss";
import logo from "../assets/images/logo/logo.png";

// import Signin from "./Auth/Signin";
import Context from "../context";
import SignInNavbar from "./Auth/SignInNavbar";

const Navbar = () => {
    const [content, setContent] = useState();
    // const context = useContext(Context);
    const { dispatch } = useContext(Context);
    // const onSignOut = () => {
    //     dispatch({
    //         type: "SIGNOUT_USER",
    //         payload: {
    //             isAuth: false,
    //             currentUser: null
    //         }
    //     });
    //     sessionStorage.removeItem("gwtoken");
    //     sessionStorage.removeItem("gwlog");
    // };
    const resetEventsFilter = () => {
        dispatch({
            type: "SEARCH_EVENT_BY_NAME",
            payload: ""
        });
        dispatch({ type: "START_EVENT_DATE", payload: null });
        dispatch({ type: "END_EVENT_DATE", payload: null });
    };
    useEffect(() => {
        const getContent = getContentBpower(17);
        getContent.then(res => setContent(res));
    }, []);

    if (!content) {
        return null;
    } else {
        return (
            <div className="nav-bar container">
                <nav className="navbar navbar-expand-sm navbar-light">
                    <div className="w-100">
                        <div className="header-container row mb-2">
                            <div className="col-lg-6">
                                <Link className="navbar-brand" to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                            <SignInNavbar content={content} />
                        </div>

                        <div className="nav-btn">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                        </div>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link btn mr-2"
                                        to="/about-us"
                                    >
                                        {content.text_1}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link btn mr-2"
                                        to="/calendar"
                                    >
                                        {content.text_2}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link btn mr-2"
                                        to="/news"
                                    >
                                        {content.text_3}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link btn mr-2"
                                        to="/contact"
                                    >
                                        {content.text_4}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link btn mr-2"
                                        to="/all-events"
                                        onClick={resetEventsFilter}
                                    >
                                        {content.text_5}
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                {context.state.isAuth ? (
                                    <a
                                        className="nav-link"
                                        href="#test"
                                        onClick={e => e.preventDefault()}
                                    >
                                        Logged in as:{" "}
                                        <span className="logged-as-name">
                                            {context.state.currentUser}
                                        </span>
                                    </a>
                                ) : null}
                            </li> */}
                                {/* <li className="nav-item">
                                {!context.state.isAuth ? (
                                    <div className="d-flex navbar-nav">
                                        <a
                                            className="nav-link"
                                            href="/"
                                            data-toggle="modal"
                                            data-target="#loginModal"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Sign in
                                        </a>
                                        <Link
                                            className="nav-link btn mr-2"
                                            to="/register"
                                        >
                                            Sign up
                                        </Link>
                                    </div>
                                ) : (
                                    <Link
                                        className="nav-link"
                                        to="/"
                                        onClick={onSignOut}
                                    >
                                        Sign out
                                    </Link>
                                )}
                            </li> */}
                            </ul>
                        </div>
                    </div>
                    {/* <Signin /> */}
                </nav>
            </div>
        );
    }
};

export default Navbar;
