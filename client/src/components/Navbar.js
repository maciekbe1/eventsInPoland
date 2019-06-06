import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.scss";
import logo from "../assets/images/logo/logo.png";

import Signin from "./Auth/Signin";
import Context from "../context";
import SignInNavbar from "./Auth/SignInNavbar";

const Navbar = () => {
    const context = useContext(Context);
    const { dispatch } = useContext(Context);
    const onSignOut = () => {
        dispatch({
            type: "SIGNOUT_USER",
            payload: {
                isAuth: false,
                currentUser: null
            }
        });
        sessionStorage.removeItem("gwtoken");
        sessionStorage.removeItem("gwlog");
    };
    const resetEventsFilter = () => {
        dispatch({
            type: "SEARCH_EVENT_BY_NAME",
            payload: ""
        });
        dispatch({ type: "START_EVENT_DATE", payload: null });
        dispatch({ type: "END_EVENT_DATE", payload: null });
    };
    return (
        <div className="nav-bar container-fluid">
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container">
                    <div className="login-container">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" />
                        </Link>

                        <SignInNavbar />
                    </div>

                    <div className="nav-btn text-center">
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
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/recomended">
                                    Recomended
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news">
                                    News
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-link"
                                    to="/all-events"
                                    onClick={resetEventsFilter}
                                >
                                    Events
                                </Link>
                            </li>
                            <li className="nav-item">
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
                            </li>
                            <li className="nav-item">
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
                                            className="nav-link btn btn-outline-secondary"
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
                            </li>
                        </ul>
                    </div>
                </div>
                <Signin />
            </nav>
        </div>
    );
};

export default Navbar;
