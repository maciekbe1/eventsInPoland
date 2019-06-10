import React, { useContext, useEffect, useState } from "react";
import sha256 from "js-sha256";
import { getToken } from "../../api/api";
import { Link } from "react-router-dom";
import Context from "../../context";

const SignInNavbar = props => {
    const { dispatch } = useContext(Context);
    const context = useContext(Context);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [loginFailure, setLoginFailure] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem("gwtoken");
        const login = sessionStorage.getItem("gwlog");

        if (token) {
            const objToken = JSON.parse(window.atob(token));

            if (Date.parse(objToken.expTime) < new Date().getTime()) {
                getToken(objToken.data)
                    .then(() => {
                        dispatch({ type: "IS_AUTH", payload: true });
                        dispatch({ type: "CURRENT_USER", payload: login });

                        let expDate = new Date();
                        expDate.setTime(expDate.getTime() + 15 * 60 * 1000);
                        const tokenData = {
                            data: objToken.data,
                            expTime: expDate
                        };

                        const newToken = window.btoa(JSON.stringify(tokenData));
                        sessionStorage.setItem("gwtoken", newToken);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else if (Date.parse(objToken.expTime) > new Date().getTime()) {
                dispatch({ type: "IS_AUTH", payload: true });
                dispatch({ type: "CURRENT_USER", payload: login });
            }
        }
    }, []);
    const onLoginHandle = login => {
        setLogin(login);
    };
    const onPasswordHandle = password => {
        setPassword(sha256(password));
    };

    const onSignIn = () => {
        try {
            let userData = window.btoa(`${login}:${password}`);

            setLoading(true);

            getToken(userData)
                .then(response => {
                    dispatch({
                        type: "SIGNIN_USER",
                        payload: {
                            token: response.data.token,
                            isAuth: true,
                            currentUser: login
                        }
                    });

                    setLoading(false);

                    let expDate = new Date();

                    expDate.setTime(expDate.getTime() + 15 * 60 * 1000);

                    const tokenData = {
                        data: userData,
                        expTime: expDate
                    };

                    const token = window.btoa(JSON.stringify(tokenData));

                    sessionStorage.setItem("gwtoken", token);
                    sessionStorage.setItem("gwlog", login);
                    // document.querySelector("#closeLoginModal").click();
                    // document.querySelector("#login").value = "";
                    // document.querySelector("#password").value = "";
                })
                .catch(error => {
                    console.log(error);
                    setLoginFailure(true);
                    setLoading(false);
                });
        } catch (err) {
            onFailure(err);
        }
    };
    const onFailure = err => {
        console.error("Error logging", err);
    };

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

    return (
        <div className="login-form-navbar col-lg-6 d-flex justify-content-end align-items-center">
            {context.state.isAuth ? (
                <div className="d-flex align-items-center">
                    {props.content.text_11}&nbsp;
                    <span className="logged-as-name mr-4">
                        {context.state.currentUser}
                    </span>
                    <Link
                        className="nav-link btn btn-primary"
                        to="/"
                        onClick={onSignOut}
                    >
                        {props.content.text_10}
                    </Link>
                </div>
            ) : (
                <div className="d-flex justify-content-end">
                    <form
                        id="signInModal"
                        onKeyPress={e =>
                            e.key === "Enter" ? onSignIn() : null
                        }
                    >
                        <div className="form-group">
                            <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                            >
                                {props.content.text_8}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="login"
                                onChange={e => onLoginHandle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="recipient-name"
                                className="col-form-label"
                            >
                                {props.content.text_9}
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                onChange={e => onPasswordHandle(e.target.value)}
                            />
                        </div>

                        {loginFailure ? (
                            <div className="text-danger">
                                {props.content.text_12}
                            </div>
                        ) : null
                        // null <div className="text-danger" />
                        }
                    </form>

                    <div className="login-form-navbar-btns d-flex flex-column">
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={onSignIn}
                        >
                            {loading ? (
                                <span
                                    className="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                            ) : (
                                "Sign in"
                            )}
                        </button>
                        <Link
                            className="btn btn-outline-secondary"
                            to="/register"
                        >
                            {props.content.text_7}
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignInNavbar;
